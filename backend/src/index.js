import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import chatRoutes from "./routes/chat.js";
import blogRoutes from "./routes/blog.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

// Adjust the CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Ensure this matches the exact origin of your front end
  credentials: true, // This is important for cookies, authorization headers with HTTPS
};

app.use(cors(corsOptions)); // Use CORS with the specified options

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/chat", chatRoutes);
app.use("/blog", blogRoutes);

// CONNECTION TO DATABASE LOGIC STARTS HERE

const { MONGODB_URI, PORT } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

const port = PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import {
  createPost,
  getAllPosts,
  toggleLike,
  addComment,
} from "../controllers/post.js";
import authenticateUser from "../middlewares/auth.js";

const router = express.Router();

// Route for creating a new post

router.post("/", authenticateUser, createPost);

// Route for getting all posts
router.get("/", getAllPosts);

router.post("/:postId/like", authenticateUser, toggleLike);

router.post("/:postId/comments", authenticateUser, addComment);

export default router;

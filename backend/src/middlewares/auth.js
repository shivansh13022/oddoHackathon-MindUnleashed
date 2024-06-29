import User from "../models/user.model.js";

const authenticateUser = async (req, res, next) => {
  try {
    // Debug
    const userId = req.cookies["userId"];

    if (!userId) {
      // console.log("No userId found in cookies"); // Debug
      return res.status(401).json({ message: "Authentication required" });
    }

    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found with userId:", userId); // Debug: Log if user is not found
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Optionally, attach the user to the request object
    req.user = user;
    req.userId = user._id; // Ensure this line exists to attach userId to req for subsequent use

    next(); // Proceed to the next middleware/function in the stack
  } catch (error) {
    console.error("Authentication error:", error);
    res
      .status(500)
      .json({ message: "An error occurred during authentication." });
  }
};

export default authenticateUser;

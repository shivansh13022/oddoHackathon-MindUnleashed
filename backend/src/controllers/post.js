import Post from "../models/post.model.js";

// Controller to create a new post
async function createPost(req, res) {
  try {
    const { content } = req.body;
    const userId = req.userId; // Extracted by authentication middleware

    // Ensure userId is not undefined or null here
    if (!userId) {
      return res.status(400).send("User ID missing from request.");
    }

    const newPost = await Post.create({
      content,
      user: userId, // Associate the post with the authenticated user
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Failed to create post" });
  }
}

// Controller to get all posts
async function getAllPosts(req, res) {
  try {
    const posts = await Post.find().populate("user", "name");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function toggleLike(req, res) {
  const { postId } = req.params;
  const userId = req.userId; // Assuming userId is set by your authentication middleware

  try {
    const post = await Post.findById(postId);

    const index = post.likes.indexOf(userId);
    if (index > -1) {
      // User has already liked this post, so unlike it
      post.likes.splice(index, 1);
    } else {
      // User hasn't liked this post yet, so like it
      post.likes.push(userId);
    }

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to toggle like status", error: error.message });
  }
}

// In your post controller file

const addComment = async (req, res) => {
  const { postId } = req.params;
  const { comment } = req.body; // Assume you send a comment text in the request body
  const userId = req.user._id; // Assuming you have user ID from authentication middleware

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: { user: userId, comment: comment } } },
      { new: true }
    ).populate("comments.user", "username"); // Populate to return user details (adjust according to your user model)

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to add comment", error: error });
  }
};

// Export both controllers
export { createPost, getAllPosts, toggleLike, addComment };

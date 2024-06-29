import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/features/authSlice";

const Main = () => {
  const [postContent, setPostContent] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [showLoginWarning, setShowLoginWarning] = useState(false);
  const [postWarning, setPostWarning] = useState(false);
  const [posts, setPosts] = useState([]);
  const [commentContent, setCommentContent] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async () => {
    if (!postContent) {
      setPostWarning(true);
      return;
    } else {
      setPostWarning(false);
    }
    if (!isLoggedIn) {
      setShowLoginWarning(true);
      return;
    }
    try {
      const { data: newPost } = await axios.post(
        "http://localhost:5000/posts",
        { content: postContent },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setPosts((currentPosts) => [newPost, ...currentPosts]);
      setPostContent("");
    } catch (error) {
      console.error("Error posting content:", error);
      if (error.response && error.response.status === 401) {
        dispatch(logout());
        setShowLoginWarning(true);
      } else {
        alert("Failed to post content.");
      }
    }
  };

  const handleLike = async (postId) => {
    if (!isLoggedIn) {
      setShowLoginWarning(true);
      return;
    }
    try {
      const { data: updatedPost } = await axios.post(
        `http://localhost:5000/posts/${postId}/like`,
        {},
        {
          withCredentials: true,
        }
      );
      setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleCommentSubmit = async (postId, comment) => {
    if (!isLoggedIn) {
      setShowLoginWarning(true);
      return;
    }
    if (!comment) return;
    try {
      const { data: updatedPost } = await axios.post(
        `http://localhost:5000/posts/${postId}/comments`,
        { comment },
        {
          withCredentials: true,
        }
      );
      setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)));
      setCommentContent({ ...commentContent, [postId]: "" });
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment.");
    }
  };

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="mt-12 max-w-5xl px-4 ml-24">
      {" "}
      {/* Increased max width */}
      <div className="flex gap-20 items-start">
        <div className="w-full lg:w-3/4 bg-gray-800 p-4 rounded-lg shadow">
          {" "}
          {/* Increased width to 3/4 */}
          <h1 className="text-3xl bg-inherit font-semibold text-orange-600 mb-4">
            All Ongoing Conversations
          </h1>
          <div
            className="overflow-auto bg-inherit"
            style={{ maxHeight: "1280px" }}
          >
            {" "}
            {/* Adjusted height */}
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-inherit text-white p-3 mb-3 rounded"
              >
                <p className="text-blue-700 font-sans font-semibold text-xl bg-inherit">
                  {post.content}
                </p>
                <div className="flex gap-4 bg-inherit items-center mt-2">
                  <button
                    onClick={() => handleLike(post._id)}
                    className="text-blue-300 text-lg  hover:text-blue-600"
                  >
                    Like
                  </button>
                  <span className="text-orange-600 bg-transparent">
                    {post.likes.length} likes
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentContent[post._id] || ""}
                    onChange={(e) =>
                      setCommentContent({
                        ...commentContent,
                        [post._id]: e.target.value,
                      })
                    }
                    className="w-full  rounded-xl p-2 text-blue-300"
                  />
                </div>
                <button
                  onClick={() =>
                    handleCommentSubmit(post._id, commentContent[post._id])
                  }
                  className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-400"
                >
                  Comment
                </button>
                {post.comments.map((comment, index) => (
                  <div key={index} className="mt-2 bg-gray-600 p-2 rounded">
                    {comment.user.username}: {comment.comment}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <input
            className="border text-start border-gray-300 rounded-lg text-white w-full h-20 px-4"
            type="text "
            placeholder="Ask, share something..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white w-28 ml-9 rounded-lg mt-2 h-10 hover:bg-blue-700/30"
          >
            Post
          </button>
          {postWarning && (
            <div className="text-red-500 mt-2">Write something to post.</div>
          )}
          {showLoginWarning && (
            <div className="text-red-500 mt-2 ml-2">
              Please{" "}
              <span
                className="cursor-pointer text-blue-500"
                onClick={handleLoginNavigate}
              >
                log in
              </span>{" "}
              to access the community.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blog");
        setBlogs(response.data);
      } catch (error) {
        console.error("There was an error fetching the blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="text-blue-300  p-16">
      <div className="flex">
        <h1 className="text-5xl  font-medium font-sans mb-8">
          Discover the Latest Blogs and Articles
        </h1>
        <div className="border-2 border-pink-600 w-2/3 h-1 bg-pink-600 mt-8"></div>
      </div>

      <div className="grid grid-cols-2 text-blue-500 md:grid-cols-1 lg:grid-cols-3 gap-4 ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg  hover:shadow-lg transform hover:scale-105 duration-150 ease-in-out"
          >
            <h2 className="text-xl bg-inherit font-bold mb-2">
              {blog.webTitle}
            </h2>
            <p className="mb-4 bg-inherit" style={{ color: "#E91E63" }}>
              Published on:{" "}
              {new Date(blog.webPublicationDate).toLocaleDateString()}
            </p>
            <a
              href={blog.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 bg-inherit hover:text-blue-700 transition duration-300 ease-in-out"
              style={{ color: "#E91E63" }}
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

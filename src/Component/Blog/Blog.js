import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="container px-4 my-5" id="hanging-icons">
      <h2 className="pb-2 border-bottom">Total Blog {blog.length}</h2>
      <div className="row g-4 py-5 row-cols-md-2 row-cols-lg-2 card-group">
        {blog.map((head) => (
          <Heading head={head} key={head.id}></Heading>
        ))}
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleBlog = (props) => {
  let { id } = useParams();
  const [singleblog, setSingleBlog] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleBlog(data));
  }, [id]);

  return (
    <div className="container my-4 py-4">
      <div className="card-body">
        <h1 className="text-center">Single Blog</h1>
        <hr />
        <h2 className="card-title">{singleblog.title}</h2>
        <p className="card-text">{singleblog.body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;

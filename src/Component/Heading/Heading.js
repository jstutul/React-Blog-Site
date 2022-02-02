import React from "react";
import { Link } from "react-router-dom";

const Heading = (props) => {
  const { id, title, body } = props.head;
  const url = `/blog/${id}`;
  return (
    <div className="col d-flex align-items-start h-100 p-2">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3"></div>
      <div>
        <h2>{title}</h2>
        <p>{body.slice(0, 130)}.....</p>
        <Link to={url} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Heading;

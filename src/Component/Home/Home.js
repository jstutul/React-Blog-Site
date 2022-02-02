import React, { useEffect, useState } from "react";
import s_1 from "../../images/slider_1.jpg";
import s_2 from "../../images/slider_2.jpg";
import s_3 from "../../images/slider_3.jpg";
import Heading from "../Heading/Heading";
const Home = () => {
  const [heading, setHeading] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setHeading(data));
  }, []);
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={s_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={s_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={s_3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Top Blog</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 card-group">
          {heading.slice(9, 12).map((head) => (
            <Heading head={head} key={head.id}></Heading>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

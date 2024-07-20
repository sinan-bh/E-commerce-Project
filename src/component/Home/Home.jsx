import React from "react";
import backgroundImg from "../../assets/img/hero3.png";
import backgroundImg2 from "../../assets/img/hero4.png";
import backgroundImg4 from "../../assets/img/hero5.png";
import backgroundImg3 from "../../assets/img/hero 2.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-body">
        <div className="hero-content">
          <h1>Happy Days, Jolly Vibes</h1>
          <p>
            We’re dedicated to delivering premium health and wellness products &
            Services to help you lead a vibrant life.
          </p>
          <div className="btn-group">
            <a className="btn btn-primary" href="#">
              Get Started
            </a>
            <a className="btn btn-secondary" href="#">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-img">
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          ></div>
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${backgroundImg2})` }}
          ></div>
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${backgroundImg3})` }}
          ></div>
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${backgroundImg4})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

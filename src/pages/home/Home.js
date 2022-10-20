import React from "react";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="ip_center">
        <div className="container">
          <div className="about_inner">
            <h1>
              <span className="subline">kann </span>
              DESIGN
              <br />
              <span className="subline">auch</span> digital?
            </h1>
          </div>
          <div className="arrow-div">
            <a href="#about">
              <svg className="arrows ">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="ip_button" data-aos="fade-right">
          <a href="#portfolio">gespannt?</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

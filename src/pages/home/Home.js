import React from "react";
import { datahome, meta } from "../../ipcontent";
import "./Home.css";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <meta charSet="utf-8" />
              <title> {meta.title}</title>
              <meta name="description" content={meta.description} />
              <h1>{datahome.title}</h1>
            </div>
            <div className="right">
              <h2>{datahome.description}</h2>
            </div>
          </div>
          <div className="center">
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

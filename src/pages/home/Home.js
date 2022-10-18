import React from "react";
import { datahome } from "../../ipcontent";
import "./Home.css";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <h1>{datahome.title}</h1>
            </div>
            <div>
              <p>{datahome.description}</p>
            </div>
            <div>
              <svg class="arrows">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

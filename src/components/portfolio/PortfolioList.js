import React from "react";
import { dataportfolio } from "../../ipcontent";

const PortfolioList = () => {
  return (
    <div className="ip_section" id="portfolio">
      <div className="portfolio">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <span className="title " data-aos="fade-left">
                {dataportfolio.title}
              </span>
              <div data-aos="fade-up" data-aos-duration="1300">
                <h2>{dataportfolio.description}</h2>

                {/* <p>
                  Ein kleiner Auszug meiner Arbeiten. <br />
                </p> */}
              </div>
            </div>
            <div className="right">
              <div className="active-content">
                {dataportfolio.portfolio.map((data, i) => {
                  return (
                    <div key={i} className="portfolio-div" data-aos="fade-up">
                      <a
                        href={data.link}
                        rel="noopener noreferrer"
                        target={"_blank"}
                      >
                        <img src={data.img} alt="portfolio" />
                      </a>
                      <p className="imgheadline">{data.headline}</p>
                      <p className="imgtext">
                        {data.description}
                        <br />
                        {data.skills}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className="ip_button"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a
            href="https://github.com/rubicode01"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            MEHR?
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;

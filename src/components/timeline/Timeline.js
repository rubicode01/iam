import React from "react";
import { datatimeline } from "../../ipcontent";

const Timeline = () => {
  return (
    <div className="ip_section " id="timeline">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left" data-aos="fade-up" data-aos-duration="1300">
              <span className="title" data-aos="fade-left">
                {datatimeline.title}
              </span>
              <div data-aos="fade-up" data-aos-duration="1300">
                <h2>{datatimeline.description}</h2>
                <p>{datatimeline.content}</p>
                <p>
                  Mein Weg führte mich über verschiedene Stationen - von der
                  kleinen Agentur bis hin zum internationalen Großkonzern - und
                  ermöglichte mir neue Perspektiven zu gewinnen um individuelle
                  Lösungen zu entwickeln.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="active-content">
                {datatimeline.timeline.map((data, i) => {
                  return (
                    <div
                      className="cards"
                      data-aos="fade-up"
                      data-aos-duration="1300"
                      key={i}
                    >
                      <p className="card-date ">
                        {data.date}
                        <br />
                        <p className="card-text">{data.experience}</p>
                        <h4>{data.title}</h4>

                        <p className="card-text">{data.description}</p>
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
          <a href="#contact">INTERESSIERT?</a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

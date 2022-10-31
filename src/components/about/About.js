import React from "react";
import { dataabout } from "../../ipcontent";

const About = () => {
  return (
    <div className="ip_section" id="about">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <span className="title" data-aos="fade-left">
                {dataabout.title}
              </span>
              <div data-aos="fade-up" data-aos-duration="1300">
                <h2>{dataabout.description}</h2>
                <p>{dataabout.content}</p>
              </div>
            </div>
            <div className=" right" data-aos="fade-up" data-aos-duration="1300">
              <p>
                Puh, nicht ganz einfach plötzlich eine Website über sich selbst
                zu erstellen. <br />
                Bisher war ich es gewohnt, Designs oder Websites für andere zu
                erstellen und nun soll ich mich selbst präsentieren. Aber gerne
                stelle ich mich auch dieser Herausforderung und hoffe einen
                Einblick zu ermöglichen, wer ich bin, was mich begeistert und wo
                ich hin will. <br />
                <br />
                Schon mal vorab und kurzum: <br />
                Ich bin Graphic-Designerin, mit Marketing Know-How und der
                Leidenschaft zur Programmierung. :-)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

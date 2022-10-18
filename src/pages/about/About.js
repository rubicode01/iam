import React from "react";
import { dataabout } from "../../ipcontent";
// import "./About.css";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="ip_section" id="about">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left" data-aos="fade-in">
              <span className="title">{dataabout.title}</span>
              <h2>{dataabout.description}</h2>
              <p>{dataabout.content}</p>
            </div>
            <div
              className="right"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="50"
              data-aos-duration="1200"
              // data-aos-mirror="true"
              data-aos-once="true"
            >
              <p>
                Ich bin Grafikerin und liebe die Kombination aus "digitaler
                Kunst" und Programmieren. <br />
                Seit 2001 habe ich Freude daran, komplexe Probleme in einfache,
                schöne und individuelle Designs zu verwandeln. Wenn ich nicht
                gerade Pixel hin- und herrücke, habe ich großen Spaß daran
                Webseiten zu entwickeln oder mit Freunden und Familie Zeit zu
                verbringen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

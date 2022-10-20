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
                Ich lasse mich gerne vom Alltag inspirieren um individuelle
                Nutzererlebnisse und kreative Lösungen zu schaffen. <br />
                <br />
                Wenn ich nicht gerade Pixel hin- und herrücke, habe ich großen
                Spaß daran Webseiten zu entwickeln oder mit Freunden und Familie
                Zeit zu verbringen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

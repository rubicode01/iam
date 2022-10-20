import React from "react";
import { dataskills } from "../../ipcontent";
import { Col } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="ip_section" id="skills">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <span className="title " data-aos="fade-left">
                {dataskills.title}
              </span>
              <div data-aos="fade-up" data-aos-duration="1300">
                <h2>{dataskills.description}</h2>
                <p>
                  Komplexe Probleme lösen und Nutzererlebnisse von Grund auf zu
                  planen sind meine Leidenschaft - von der Recherche, dem
                  Mehrwert/Nutzen bis hin zum visuellen und technischem
                  Anspruch. <br /> Und wenn ich mal nicht weiter weiß, frage ich
                  Google :-)
                </p>
              </div>
            </div>

            <div className="right">
              <Col>
                {dataskills.skills.map((data, i) => {
                  return (
                    <div key={i}>
                      <p>{data.name}</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${data.value}%`,
                          }}
                        >
                          <div className="progress-value">{data.value}% *</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Col>
              <p className="progress-value-text">
                * Da ich immer mehr dazu lerne und auch vor neuen
                Herausforderungen stehe, stelle ich hier keine 100% ein.
              </p>
            </div>
          </div>
        </div>
        {/* <div
          className="ip_button"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a href="#contact">interesse geweckt?</a>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;

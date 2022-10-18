import React from "react";
import { dataskills } from "../../ipcontent";
import { Col } from "react-bootstrap";
import "./Skills.css";
import "aos/dist/aos.css";

const Skills = () => {
  return (
    <div className="ip_section" id="skills">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left" data-aos="fade-in">
              <span className="title">{dataskills.title}</span>
              <h2>{dataskills.description}</h2>
              <p>
                Ich kann wahrhaft nicht alles aber Herausforderungen finde ich
                spannend. <br />
                Komplexe Probleme lösen und das Benutzererlebnis von Grund auf
                zu planen - von der Recherche und dem Nutzen bis hin zum
                visuellen und technischem Anspruch - sind meine Leidenschaft.
              </p>
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
                            resume: `${data.resume}%`,
                          }}
                        >
                          <div className="progress-value">{data.value}%</div>
                          <p className="progress-value-text">{data.resume}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

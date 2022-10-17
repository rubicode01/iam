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
              <span className="title">skills</span>
              <h2>{dataskills.title}</h2>
              <p>{dataskills.info}</p>
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
                          <div className="progress-value">{data.value}%</div>
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

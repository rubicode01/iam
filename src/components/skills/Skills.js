import React from "react";
import { dataskills } from "../../ipcontent";
import { Col } from "react-bootstrap";
import "../../assets/Skills.css";

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
                <p>{dataskills.content}</p>
                <p>
                  Das Zusammenspiel aus Design, Marketing und Digital
                  ermöglichen mir visuell anspruchsvolle und technologisch
                  kompetente Projekte zu verwirklichen. <br />
                  Um gemeinsam Projekte zum Erfolg zu führen, genieße ich die
                  Brainstorming-Zeit im Team - Wünsche und Bedenken die vorab
                  schon berücksichtig werden, führen final zur optimalen Lösung
                  bei.
                </p>
                <p className="small">Alleine spielen macht keinen Spaß! :)</p>
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
                * Ich stelle keine 100% ein. Es gibt immer neue
                Herausforderungen :-)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

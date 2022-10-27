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
                  Gemeinsam macht es doch mehr Spaß! <br />
                  Meine Kenntnisse und Fähigkeiten, verdanke ich der Teamarbeit.{" "}
                  <br />
                  Bei jedem Schritt des Designprozesses lerne ich immer wieder
                  neu dazu. Der Austausch an Erfahrungen, Wünsche und Bedenken
                  jedes einzelnen sind schlussendlich, die Leidenschaft und das
                  Engagement, Projekte zum Erfolg zu führen.
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
                * Ich stelle keine 100% ein. Es gibt immer wieder Neues zu
                entdecken :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

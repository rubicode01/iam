import React from "react";
import { datatimeline } from "../../ipcontent";
import { Row, Card } from "react-bootstrap";

const Timeline = () => {
  return (
    <div className="ip_section" id="timeline">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <span className="title">{datatimeline.title}</span>

              <h2>{datatimeline.description}</h2>

              <p>
                Schon während meiner Ausbildung als Mediengestalterin für
                Digital- und Printmedien, war ich sofort begeistert von der
                Kombination aus "digitaler Kunst" und Programmieren. <br />
                <br />
                Nachdem ich meine Ausbildung abgeschlossen hatte, habe ich in
                kleinen Agenturen gearbeitet bis ich die letzten 17 Jahren in
                einem internationalem Unternehmen als Grafkerin in der
                Marketingabteilung tätig war. <br />
                <br />
                Obwohl ich gerne schöne Designs erstelle, die einen bestimmten
                Zweck haben und seinen Platz verdienen, wollte ich es nicht bei
                dem klassischem „Grafik-Design“ belassen sonder mehr bewegen.
                <br />
                <br />
                Ich forderte mich selbst heraus - nicht nur eigene Designideen
                umzusetzten oder responsive Webseiten zu erstellen - ich
                implementierte Tools die zur Prozessoptimierung dienten und das
                arbeiten erleichterten.
                <br />
                <br /> 2022 entschloss ich mich meine eigenen Fähigkeiten zu
                erweitern und eine Weiterbildung im Bereich Full-Stack
                Development zu absolvieren.
              </p>
            </div>
            <div className="right">
              <Row xs={1} md={2}>
                {datatimeline.timeline.map((data, i) => {
                  return (
                    <Card key={i}>
                      <Card.Body>
                        <Card.Title>
                          <h4>{data.title}</h4>
                        </Card.Title>
                        <Card.Text>
                          {data.experience}

                          <p>{data.description}</p>
                          <p>{data.date}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Row>

              {/* {datatimeline.timeline.map((data, i) => {
                return (
                  <div key={i}>
                    <div>
                      <p>{data.experience}</p>
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      <p>{data.date}</p>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

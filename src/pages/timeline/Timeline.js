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
              <span className="title">timeline</span>
              <h2>{datatimeline.title}</h2>

              <p className="marker-white">{datatimeline.description}</p>
            </div>
            <div className="right">
              <Row xs={1} md={2} className="g-4">
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

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
                Keine leichte Aufgabe, etwas über sich selbst zu erstellen, um
                das darzustellen, wer man ist und was man kann. Doch da ich
                Herausforderungen spannend finde, hoffe ich hiermit ein paar
                Eindrücke zeigen zu können. <br />
                <br />
                Als Grafikerin habe Spaß daran komplexe Probleme in einfache,
                schöne und individuelle Designs zu verwandeln, die einen
                bestimmten Zweck haben und ihren Platz verdienen. <br />
                <br />
                Da ich meine Kenntnisse nicht beim klassischen „Grafik-Design“
                und Marketing Know-How belassen wollte, fordertet ich mich
                selbst heraus und erweiterte diese im Bereich der
                Programmierung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

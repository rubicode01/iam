import React from "react";
import { contactConfig } from "../../ipcontent";

const Contact = () => {
  return (
    <div className="ip_section" id="contact">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <span className="title">contact</span>
              <h2>{contactConfig.title}</h2>
              <p>lorem ipsum dolor</p>
            </div>
            <div className="right">
              <p>{contactConfig.YOUR_EMAIL}</p>
              <p>{contactConfig.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

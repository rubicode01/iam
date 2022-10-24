import React from "react";
import { contactConfig } from "../../ipcontent";

const Contact = () => {
  return (
    <div className="ip_section contact" id="contact">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <span className="title" data-aos="fade-left">
                {contactConfig.title}
              </span>
            </div>
            <div className="right">
              <div>
                <div
                  className="ip_button"
                  data-aos="zoom-in"
                  data-aos-anchor-placement
                  data-aos-duration="1000"
                >
                  <a href={contactConfig.email}>MAIL AN MICH</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

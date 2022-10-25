import React from "react";
import { datasocial } from "../../ipcontent";
import "../../assets/Footer.css";
import { BsGithub, BsFillEnvelopeFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footer_follow_icon">
        <ul>
          {datasocial.github && (
            <li>
              <a href={datasocial.github}>
                <BsGithub />
              </a>
            </li>
          )}

          {datasocial.email && (
            <li>
              <a href={datasocial.email}>
                <BsFillEnvelopeFill />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

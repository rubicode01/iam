import React from "react";
import { datasocial } from "../../ipcontent";
import "./Footer.css";
import { BsGithub, BsLinkedin, BsFillChatTextFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="stick_follow_icon">
        <ul>
          {datasocial.github && (
            <li>
              <a href={datasocial.github}>
                <BsGithub />
              </a>
            </li>
          )}

          {datasocial.linkedin && (
            <li>
              <a href={datasocial.linkedin}>
                <BsLinkedin />
              </a>
            </li>
          )}
          {datasocial.email && (
            <li>
              <a href={datasocial.email}>
                <BsFillChatTextFill />
              </a>
            </li>
          )}
        </ul>
        {/* <p>Follow Me</p> */}
      </div>
    </div>
  );
};

export default Footer;

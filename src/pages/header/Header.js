import "./Header.css";
import "../../assets/animation.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { scaleDown as Menu } from "react-burger-menu";
import { Navbar } from "react-bootstrap";
import { BsList, BsX } from "react-icons/bs";

const Header = (props) => {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  return (
    <>
      <Navbar className="navbar-expand nav">
        <Navbar.Brand href="#">IP</Navbar.Brand>

        <Menu
          right
          isOpen={isMenuOpen}
          onStateChange={handleStateChange}
          customBurgerIcon={<BsList />}
          customCrossIcon={<BsX />}
        >
          <Link
            onClick={() => handleCloseMenu()}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={250}
            offset={0}
          >
            Ich bin
          </Link>

          <Link
            onClick={() => handleCloseMenu()}
            activeClass="active"
            to="timeline"
            spy={true}
            smooth={true}
            duration={250}
            offset={0}
          >
            Meine Zeit
          </Link>
          {/* <Link
            onClick={() => handleCloseMenu()}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={250}
            offset={50}
          >
            About
          </Link> */}
          {/* <Link
            onClick={() => handleCloseMenu()}
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            duration={250}
            offset={50}
          >
            Profile
          </Link> */}
          <Link
            onClick={() => handleCloseMenu()}
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={250}
            offset={0}
          >
            Portfolio
          </Link>
          <Link
            onClick={() => handleCloseMenu()}
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={250}
            offset={0}
          >
            Kenntnisse
          </Link>
          <Link
            onClick={() => handleCloseMenu()}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={250}
            offset={0}
          >
            Kontakt
          </Link>
        </Menu>
      </Navbar>
    </>
  );
};
export default Header;

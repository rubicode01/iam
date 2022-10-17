import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { meta } from "../../ipcontent";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="navbar"
        expand="xs"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home">{meta.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#timeline">Timeline</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

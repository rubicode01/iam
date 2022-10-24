import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { meta } from "../../ipcontent";
import "../../assets/NavBar.css";

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
            <Nav.Link href="#about">Über mich</Nav.Link>
            <Nav.Link href="#timeline">Erfahrung</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#skills">Erfahrung</Nav.Link>
            <Nav.Link href="#contact">Kontact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ darkMode }) => {
    return (
        <div className="NavBar">
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ fontWeight: 400 }}
                bg={darkMode ? "light" : "dark"}
                variant={darkMode ? "light" : "dark"}
                className="pt-3"
            >
                <Container>
                    <Navbar.Brand
                        href="#home"
                        id="home"
                        style={{ fontSize: "1.25rem", fontWeight: 600 }}
                    >
                        Home
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-nav-dropdown">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#aboutme">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contactme">Contact me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;

import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ darkMode, handleToggle }) => {
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
                <Form className="position-realtive top-0 end-0 p-3">
                    <label id="switch" className="switch">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            id="slider"
                        />
                        <span className="slider round"></span>
                    </label>
                </Form>
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

import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "../sass/App.scss";

const NavBar = ({ darkMode, handleToggle, onChange, t }) => {
    return (
        <div className="NavBar">
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ fontWeight: 400 }}
                bg={darkMode ? ["light-color"] : ["dark-color"]}
                variant={darkMode ? "light" : "dark"}
                className="pt-3"
            >
                <Container>
                    <Navbar.Brand
                        href="#home"
                        id="home"
                        style={{ fontSize: "1.25rem", fontWeight: 600 }}
                    >
                        {t("home")}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-nav-dropdown">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#aboutme">{t("about")}</Nav.Link>
                            <Nav.Link href="#skills">{t("skills")}</Nav.Link>
                            <Nav.Link href="#projects">
                                {t("projects")}
                            </Nav.Link>
                            <Nav.Link href="#contactme">
                                {t("contactMe")}
                            </Nav.Link>
                            <select
                                name="language"
                                onChange={onChange}
                                style={{ borderRadius: "10%", outline: "none" }}
                            >
                                <option value="en">English</option>
                                <option value="fr">French</option>
                                <option value="cro">Croatian</option>
                            </select>
                            <Form className="position-realtive top-0 end-0 p-2">
                                <label id="switch" className="switch">
                                    <input
                                        type="checkbox"
                                        onChange={handleToggle}
                                        id="slider"
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;

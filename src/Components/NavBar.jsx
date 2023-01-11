import React, { useState } from "react";

import ReactFlagsSelect from "react-flags-select";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "../sass/App.scss";

import { Link } from "react-router-dom";

const NavBar = ({ darkMode, handleToggle, t, languageChange }) => {
    const [select, setSelect] = useState("");
    const onSelect = (code) => {
        setSelect(code);
        languageChange(code.toLowerCase());
    };
    return (
        <div className="NavBar">
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ fontWeight: 400, fontSize: "1.25rem" }}
                bg={darkMode ? ["light-color"] : ["dark-color"]}
                variant={darkMode ? "light" : "dark"}
                className="pt-3 pt-md-4 "
            >
                <Container>
                    <Navbar.Brand
                        id="home"
                        style={{ fontSize: "1.5rem", fontWeight: 600 }}
                    >
                        <Link to={"/"}>{t("home")}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-nav-dropdown">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link as={Link} to={"/"}>
                                {t("about")}
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/skills"}>
                                {t("skills")}
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/projects"}>
                                {t("projects")}
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/contactme"}>
                                {t("contactMe")}
                            </Nav.Link>
                            <ReactFlagsSelect
                                selected={select}
                                onSelect={onSelect}
                                countries={["GB", "FR", "HR"]}
                                placeholder="Select Language"
                                customLabels={{
                                    GB: "English",
                                    FR: "Français",
                                    HR: "Hrvatski",
                                }}
                                className={darkMode ? "" : "darkModeSelect"}
                            />
                            <Form className="position-realtive top-0 end-0 p-2">
                                <label id="switch" className="switch">
                                    <label htmlFor="slider"></label>
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

import React from "react";
import "./Style/AboutMe.css";

import "../sass/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import portfolio_undraw from "./Photos/portfolio_undraw.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
    return (
        <div className="AboutMe pt-5 mt-5">
            <a id="aboutme">
                <Container className="pt-5 mt-5">
                    <Row
                        xs={1}
                        md={1}
                        lg={2}
                        className="justify-content-xs-center"
                    >
                        <Col xs="auto">
                            <img
                                className="image w-100 h-100"
                                src={portfolio_undraw}
                            />
                        </Col>
                        <Col className="align-self-center" xs="auto">
                            <h1>Hi, I am Marija</h1>
                            <p>
                                A passonate self-taught Front-End Developer.
                                Having an experience of building Web
                                applications with JavaScript and Reactjs and
                                some other cool libraries and frameworks.
                            </p>
                            <Container className="d-flex flex-column justify-content-center align-items-center">
                                <Row>
                                    <Col className="m-1 icon">
                                        <a
                                            href="https://github.com/marijahavaic"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                style={{ fontSize: "2.25rem" }}
                                            />
                                        </a>
                                    </Col>
                                    <Col className="m-1 icon">
                                        <a
                                            href="https://www.linkedin.com/in/marija-havaic/"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                style={{ fontSize: "2.25rem" }}
                                            />
                                        </a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button
                                            style={{
                                                backgroundColor: "#f3b700",
                                                border: "none",
                                                color: "aliceblue",
                                            }}
                                            variant="warning"
                                            type="submit"
                                            className="mt-3"
                                        >
                                            Download CV
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </a>
        </div>
    );
};

export default AboutMe;

import React from "react";

import "../sass/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import proud_coder from "./Photos/proud_coder.svg";

const AboutMe = () => {
    return (
        <div className="AboutMe py-md-5 my-md-5">
            <Container>
                <Row
                    xs={1}
                    md={1}
                    lg={2}
                    className="justify-content-xs-center my-5 py-5"
                >
                    <Col xs="auto">
                        <Image
                            variant="center"
                            src={proud_coder}
                            height="400px"
                            className="aboutmeImg"
                        />
                    </Col>
                    <Col className="align-self-center px-2" xs="auto">
                        <h1>Hi, I'm Marija!</h1>
                        <h3>
                            A passonate self-taught Front-End Developer. Having
                            an experience of building Web applications with
                            JavaScript and ReactJS and some other cool libraries
                            and frameworks.
                        </h3>
                        <Container className="px-0 d-flex flex-column justify-content-md-start align-items-md-start justify-content-center align-items-center">
                            <Row>
                                <Col className="icon align-items-center justify-content-center">
                                    <a
                                        href="https://github.com/marijahavaic"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            style={{
                                                fontSize: "2.5rem",
                                                paddingRight: "2rem",
                                            }}
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/marija-havaic/"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            style={{ fontSize: "2.75rem" }}
                                        />
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button
                                        variant="danger"
                                        type="submit"
                                        className="mt-3 p-2 btn"
                                    >
                                        Download CV
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;

import React from "react";

import "../sass/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Undraw from "react-undraw";

Undraw.defaultProps.primaryColor = "#DA0037";

const AboutMe = () => {
    return (
        <div className="AboutMe pt-md-5 mt-md-5 pb-md-5 mb-md-5">
            <a id="aboutme">
                <Container>
                    <Row
                        xs={1}
                        md={1}
                        lg={2}
                        className="justify-content-xs-center"
                    >
                        <Col xs="auto">
                            <Undraw name="proud_coder_re_exuy" height="700px" />
                        </Col>
                        <Col className="align-self-center" xs="auto">
                            <h1>Hi, I'm Marija!</h1>
                            <h3>
                                A passonate self-taught Front-End Developer.
                                Having an experience of building Web
                                applications with JavaScript and Reactjs and
                                some other cool libraries and frameworks.
                            </h3>
                            <Container className="p-0 d-flex flex-column justify-content-center">
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
            </a>
        </div>
    );
};

export default AboutMe;

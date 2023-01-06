import React from "react";

import { web_skills, design_skills } from "../skillsDetails";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import programming from "../Photos/programming.svg";
import add_color from "../Photos/add_color.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ t }) => {
    return (
        <div className="Skills my-md-5 py-md-5 mt-5 pt-5 mb-0 pb-0">
            <Container className="justify-content-center align-items-center text-center my-md-5 py-md-5 my-xs-1 py-xs-1">
                <a id="skills" href="#skills">
                    <h1>{t("skills")}</h1>
                </a>
                <Row xs={1} md={2} className="pt-3 align-items-center ">
                    <Col
                        className="justify-content-center align-items-center"
                        xs={{ order: "last" }}
                        md={{ order: "first" }}
                    >
                        <Container>
                            <h2 className="pb-3 mb-3 red">Front-End</h2>
                            <Row xs={1} md={3} lg={4}>
                                {web_skills.map((skill, i) => (
                                    <Col key={i} className="skills_icon m-2">
                                        <FontAwesomeIcon
                                            icon={skill.icon}
                                            style={{
                                                fontSize: "3.5rem",
                                            }}
                                        />
                                        <p>{skill.name}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                    <Col
                        className="justify-content-center align-items-center"
                        xs={{ order: "first" }}
                        md={{ order: "last" }}
                    >
                        <Image
                            variant="center"
                            src={programming}
                            height="100%"
                            width="100%"
                            className="aboutmeImg img"
                            alt=""
                        />
                    </Col>
                </Row>
                <Row xs={1} md={2} className="align-items-center ">
                    <Col className="justify-content-center align-self-center">
                        <Image
                            variant="center"
                            src={add_color}
                            height="100%"
                            width="100%"
                            className="aboutmeImg img"
                            alt=""
                        />
                    </Col>
                    <Col className="align-self-center">
                        <Container>
                            <h2 className="mb-4 red">{t("designSkills")}</h2>
                            <Row xs={1} md={3} lg={4}>
                                {design_skills.map((skill, i) => (
                                    <Col key={i} className="skills_icon m-2">
                                        <FontAwesomeIcon
                                            icon={skill.icon}
                                            style={{
                                                fontSize: "3.5rem",
                                            }}
                                        />
                                        <p>{skill.name}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;

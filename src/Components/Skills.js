import React from "react";

import { web_skills, design_skills } from "../projectsDetails";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import web_development from "./Photos/web_development.svg";
// import designer_girl from "./Photos/designer_girl.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Undraw from "react-undraw";

Undraw.defaultProps.primaryColor = "#DA0037";

const Skills = ({ t }) => {
    return (
        <div className="Skills">
            <Container className="justify-content-center align-items-center text-center my-5 py-5">
                <a id="skills">
                    <h1>{t("skills")}</h1>
                </a>
                <Row xs={1} md={2} className="pt-3 align-items-center">
                    <Col
                        className="justify-content-center align-items-center"
                        xs={{ order: "last" }}
                        md={{ order: "first" }}
                    >
                        <Container>
                            <h2 className="pb-3 mb-3">Front-End</h2>
                            <Row xs={2} md={3} lg={4}>
                                {web_skills.map((skill, i) => (
                                    <Col key={i} className="skills_icon">
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
                        <Undraw name="programming_re_kg9v" height="300px" />
                        {/* <img
                            src={web_development}
                            className="image w-75 h-75"
                            xs="auto"
                        /> */}
                    </Col>
                </Row>
                <Row xs={1} md={2} className="align-items-center">
                    <Col className="justify-content-center align-self-center">
                        <Undraw name="add_color_re_buro" height="300px" />
                        {/* <img
                            src={designer_girl}
                            className="image w-50 h-25"
                            xs="auto"
                        /> */}
                    </Col>
                    <Col className="align-self-center">
                        <Container>
                            <h2 className="mb-4">{t("designSkills")}</h2>
                            <Row xs={2} md={3} lg={4}>
                                {design_skills.map((skill, i) => (
                                    <Col key={i} className="skills_icon">
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

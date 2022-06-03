import React from "react";
import "./Style/Skills.css";

import { skills_container } from "../projectsDetails";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
    return (
        <div className="Skills">
            <Container className="justify-content-center align-items-center text-center mb-5 pb-5">
                <h1>
                    <a id="skills">Skills</a>
                </h1>
                <Row xs={1} md={2}>
                    {skills_container.map((skills_container, i) => (
                        <Col key={i}>
                            <Container className="justify-content-center align-items-center">
                                <h2 className="mb-4">
                                    {skills_container.name}
                                </h2>
                                <Row xs={2} md={3} lg={5}>
                                    {skills_container.skills.map((skill, i) => (
                                        <Col key={i}>
                                            <FontAwesomeIcon
                                                icon={skill.icon}
                                                style={{
                                                    fontSize: "2.25rem",
                                                }}
                                            />
                                            <p>{skill.name}</p>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Skills;

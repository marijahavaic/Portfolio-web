import React from "react";
import "./Style/Projects.css";

import { projects } from "../projectsDetails";

import ProjectContainer from "./ProjectContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Projects extends React.Component {
    render() {
        return (
            <div className="Projects">
                <Container
                    className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5 mb-5 pb-5"
                    fluid
                >
                    <h1 className="p-3">
                        <a id="projects">Projects</a>
                    </h1>
                    <Row
                        xs={1}
                        md={2}
                        lg={3}
                        className="d-flex justify-content-center align-items-center"
                    >
                        {projects.map((project, i) => (
                            <ProjectContainer
                                key={i}
                                image={project.image}
                                title={project.title}
                                text={project.text}
                                badges={project.badges}
                                icons={project.icons}
                            />
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Projects;

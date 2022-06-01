import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectContainer = ({
    darkMode,
    key,
    image,
    title,
    text,
    badges,
    icons,
}) => {
    return (
        <div>
            <Col className="d-flex justify-content-center">
                <Card
                    style={{ width: "23rem", height: "32rem" }}
                    bg={darkMode ? "light" : "dark"}
                    className="mb-5"
                    key={key}
                >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text
                            style={{
                                height: "6.5rem",
                            }}
                        >
                            {text}
                        </Card.Text>
                        <div className="pt-3 pb-3" style={{ height: "5.5rem" }}>
                            {badges.map((badge, i) => (
                                <Badge
                                    bg={darkMode ? "dark" : "light"}
                                    text={darkMode ? "light" : "dark"}
                                    className="m-1"
                                    key={i}
                                >
                                    {" "}
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                        <Container variant="bottom">
                            <Row className="d-flex justify-content-center align-items-center">
                                {icons.map((icon, i) => (
                                    <Col>
                                        <a href={icon.link} key={i}>
                                            <FontAwesomeIcon
                                                icon={icon.name}
                                                style={{
                                                    fontSize: "2.25rem",
                                                }}
                                            />
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ProjectContainer;

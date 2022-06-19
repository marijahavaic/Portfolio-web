import React from "react";

// Import Swiper styles
import "swiper/css";

import "../sass/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectContainer = ({
    id,
    darkMode,
    image,
    title,
    text,
    badges,
    icons,
}) => {
    return (
        <Container
            bg={darkMode ? "light" : "dark"}
            text={darkMode ? ["light-color"] : ["dark-color"]}
            className="mb-4"
            style={{
                height: "750px",
            }}
        >
            <Row
                xs={12}
                md={2}
                className="align-items-center justify-content-center h-100"
            >
                <Col xs md={7}>
                    <Container>
                        <Image
                            variant="top"
                            src={image}
                            className="w-100 h-100 mb-xs-1"
                        />
                    </Container>
                </Col>
                <Col xs={12} md={5}>
                    <Container className="py-xs-4 py-md-0 m-0">
                        <h3 className="px-3">{title}</h3>
                        <p className="px-3 ">{text}</p>
                        <div className="px-3" style={{ height: "5.5rem" }}>
                            {badges.map((badge, i) => (
                                <Badge
                                    key={i}
                                    bg={darkMode ? "dark" : "light"}
                                    text={darkMode ? "light" : "dark"}
                                    className="m-1 p-2"
                                >
                                    {" "}
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                        <Container
                            variant="bottom"
                            className="d-flex justify-content-center align-items-center"
                        >
                            <Row>
                                {icons.map((icon, i) => (
                                    <Col key={i} className="icon links">
                                        <a href={icon.href} target="_blank">
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
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectContainer;

import React from "react";

// Import Swiper React components
import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../sass/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectContainer = ({
    key,
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
            key={key}
            style={{
                height: "750px",
            }}
        >
            <Row xs={1} md={2} className="p-2 align-items-center h-100">
                <Col>
                    <Container className="h-100">
                        <Image
                            variant="top"
                            src={image}
                            className="w-100 h-100 shadow mb-xs-1 rounded"
                        />
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <h3>{title}</h3>
                        <p
                            style={{
                                height: "6.5rem",
                            }}
                        >
                            {text}
                        </p>
                        <div className="pt-3 pb-3" style={{ height: "5.5rem" }}>
                            {badges.map((badge, i) => (
                                <Badge
                                    key={i}
                                    bg={darkMode ? "dark" : "light"}
                                    text={darkMode ? "light" : "dark"}
                                    className="m-1 p-1"
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

import React, { useState } from "react";
import "./sass/App.scss";

import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`App ${darkMode ? "Light-mode" : "Dark-mode"}`}>
            <NavBar darkMode={darkMode} />
            <Container className="h-100 d-flex justify-content-end">
                <Form className="position-absolute top-0 end-0 mt-1">
                    <Form.Switch
                        onChange={handleToggle}
                        type="switch"
                        id="custom-switch"
                    />
                </Form>
            </Container>

            <AboutMe />

            <Container className="h-100 d-flex justify-content-end pe-5">
                <a href="#home">
                    <Button
                        variant={darkMode ? "dark" : "light"}
                        className="position-fixed bottom-0 mb-3"
                    >
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            style={{ fontSize: "1rem" }}
                        />
                    </Button>
                </a>
            </Container>

            <Skills />

            <Projects darkMode={darkMode} />

            <ContactMe />

            <Footer />
        </div>
    );
}

export default App;

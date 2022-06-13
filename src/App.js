import React, { Suspense, useState } from "react";
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

import { useTranslation } from "react-i18next";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const { t, i18n } = useTranslation();

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    const languageChange = (code) => {
        i18n.changeLanguage(code);
    };

    return (
        <Suspense fallback="Loading...">
            <div className={`App ${darkMode ? "Light-mode" : "Dark-mode"}`}>
                <NavBar
                    darkMode={darkMode}
                    handleToggle={handleToggle}
                    t={t}
                    languageChange={languageChange}
                />

                <AboutMe />

                <Container className="h-100 d-flex justify-content-end pe-5">
                    <a href="#home">
                        <Button
                            variant="danger"
                            className="position-fixed bottom-0 mb-3"
                        >
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                style={{ fontSize: "1.25rem" }}
                            />
                        </Button>
                    </a>
                </Container>

                <Skills t={t} />

                <Projects darkMode={darkMode} t={t} />

                <ContactMe t={t} />

                <Footer t={t} />
            </div>
        </Suspense>
    );
}

export default App;

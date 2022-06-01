import React from "react";
import "./sass/App.scss";

import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

import lyrics from "./Components/Photos/lyrics.png";
import notestodo from "./Components/Photos/notestodo.png";
import form from "./Components/Photos/form.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faBootstrap,
    faFontAwesome,
    faReact,
    faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
    faImage,
    faImages,
    faObjectGroup,
    faPencilRuler,
    faClone,
    faRoute,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";

class App extends React.Component {
    static defaultProps = {
        projects: [
            {
                key: 1,
                image: lyrics,
                title: "Lyrics Search",
                text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                badges: ["HTML5", "CSS3", "Javascript"],
                icons: [
                    { name: faGithub, src: "github.com" },
                    { name: faYoutube, src: "github" },
                    { name: faGlobe, src: "github" },
                ],
            },
            {
                key: 2,
                image: notestodo,
                title: "Notes Todo App",
                text: `This is a Notes Todo app in which you can add either a note or a todo, both of which are saved in local storage. This app uses React’s functional components and hooks (useState, useEffect, useContext).`,
                badges: ["HTML5", "CSS3", "Javascript", "React", "FontAwesome"],
                icons: [
                    {
                        name: faGithub,
                        src: "https://github.com/marijahavaic/notes-todo-app",
                    },
                    { name: faYoutube, src: "github" },
                    { name: faGlobe, src: "github" },
                ],
            },
            {
                key: 3,
                image: form,
                title: "Form App",
                text: `This is a Form app which uses React state hook form handling and validating React form inputs.`,
                badges: ["HTML5", "CSS3", "Javascript", "React", "FontAwesome"],
                icons: [
                    {
                        name: faGithub,
                        src: "https://github.com/marijahavaic/form-app",
                    },
                    { name: faYoutube, src: "github" },
                    { name: faGlobe, src: "github" },
                ],
            },
        ],
        skills_container: [
            {
                name: "Front-End",
                skills: [
                    { icon: faHtml5, name: "HTML5" },
                    { icon: faCss3Alt, name: "CSS3" },
                    { icon: faJs, name: "JavaScript" },
                    { icon: faReact, name: "React JS" },
                    { icon: faRoute, name: "React Router" },
                    { icon: faBootstrap, name: "Bootstrap5" },
                    { icon: faFontAwesome, name: "FontAwesome" },
                    { icon: faClone, name: "MeaterialUI" },
                ],
            },
            {
                name: "Design",
                skills: [
                    { icon: faFigma, name: "Figma" },
                    { icon: faObjectGroup, name: "Adobe XD" },
                    { icon: faImage, name: "Photoshop" },
                    { icon: faImages, name: "Lightroom" },
                    { icon: faPencilRuler, name: "Illustrator" },
                ],
            },
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            ligthMode: true,
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            lightMode: !this.state.ligthMode,
        });
        console.log(this.state.ligthMode);
    }

    render() {
        return (
            <div
                className={`App ${
                    this.state.lightMode ? "Light-mode" : "Dark-mode"
                }`}
            >
                <NavBar />
                <Container className="h-100 d-flex justify-content-end">
                    <Form className="position-absolute top-0 end-0 mt-1">
                        <Form.Switch
                            // toggled={this.state.ligthMode}
                            onChange={this.handleToggle}
                            type="switch"
                            id="custom-switch"
                        />
                    </Form>
                </Container>

                <AboutMe />

                <Container className="h-100 d-flex justify-content-end pe-5">
                    <a href="#home">
                        <Button
                            variant="light"
                            className="position-fixed bottom-0 mb-3"
                        >
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                style={{ fontSize: "1rem" }}
                            />
                        </Button>
                    </a>
                </Container>

                <Skills skills_container={this.props.skills_container} />

                <Projects projects={this.props.projects} />

                <ContactMe />

                <Footer />

                {/* <div className='position-fixed end-2 right-2'>
        <a href="#home"><FontAwesomeIcon icon={faArrowUp} style={{fontSize: '1rem'}} /></a>
        </div> */}
            </div>
        );
    }
}

export default App;

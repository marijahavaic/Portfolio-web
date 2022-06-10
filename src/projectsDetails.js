import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
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

import lyrics from "./Components/Photos/lyrics.png";
import notestodo from "./Components/Photos/notestodo.png";
import form from "./Components/Photos/form.png";

export const projects = [
    {
        key: 1,
        image: lyrics,
        title: "Lyrics Searcher",
        text: `This project is written with Vanilla JavaScript which uses a third-party API for lyrics searching.`,
        badges: ["HTML5", "CSS3", "Javascript"],
        icons: [
            {
                name: faGithub,
                href: "https://github.com/marijahavaic/lyrics-searcher",
            },
            // { name: faYoutube, href: "github" },
            { name: faGlobe, href: "http://lyricssearcher.marijahavaic.com/" },
        ],
    },
    {
        key: 2,
        image: notestodo,
        title: "Notes and Todos App",
        text: `The Notes and Todos App is an app in which you can add either a note or a todo, both of which are saved in local storage. This app uses React’s functional components and hooks (useState, useEffect, useContext).`,
        badges: ["HTML5", "CSS3", "Javascript", "React", "FontAwesome"],
        icons: [
            {
                name: faGithub,
                href: "https://github.com/marijahavaic/notes-todo-app",
            },
            // { name: faYoutube, href: "github" },
            { name: faGlobe, href: "http://notes.marijahavaic.com/" },
        ],
    },
    {
        key: 3,
        image: form,
        title: "Sign Up Page",
        text: `This is a Sign Up Page which uses React state hook form handling and validating React form inputs.`,
        badges: ["HTML5", "CSS3", "Javascript", "React", "FontAwesome"],
        icons: [
            {
                name: faGithub,
                href: "https://github.com/marijahavaic/form-app",
            },
            // { name: faYoutube, href: "github" },
            { name: faGlobe, href: "http://form.marijahavaic.com/" },
        ],
    },
    {
        key: 4,
        image: lyrics,
        title: "Portfoilo Page",
        text: `This project is written with Vanilla JavaScript which uses a third-party API for lyrics searching.`,
        badges: [
            "HTML5",
            "CSS3",
            "Javascript",
            "React",
            "React Bootstrap",
            "FontAwesome",
        ],
        icons: [
            {
                name: faGithub,
                href: "https://github.com/marijahavaic/lyrics-searcher",
            },
            // { name: faYoutube, href: "github" },
            { name: faGlobe, href: "github" },
        ],
    },
];
export const web_skills = [
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3Alt, name: "CSS3" },
    { icon: faJs, name: "JavaScript" },
    { icon: faReact, name: "React JS" },
    { icon: faRoute, name: "React Router" },
    { icon: faBootstrap, name: "Bootstrap5" },
    { icon: faFontAwesome, name: "FontAwesome" },
    { icon: faClone, name: "MeaterialUI" },
];
export const design_skills = [
    { icon: faFigma, name: "Figma" },
    { icon: faObjectGroup, name: "Adobe XD" },
    { icon: faImage, name: "Photoshop" },
    { icon: faImages, name: "Lightroom" },
    { icon: faPencilRuler, name: "Illustrator" },
];

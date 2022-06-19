import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
import notestodos from "./Components/Photos/notestodos.png";
import form from "./Components/Photos/form.png";
import { nanoid } from "nanoid";

export const projects = [
    {
        id: nanoid(),
        image: lyrics,
        title: "Lyrics Searcher",
        text: `Vanilla JavaScript application which uses a third-party API for finding lyrics which started as a simple DOM representation of JSON API responses and became a website for looking up and displaying the artist, lyrics and song sample.`,
        badges: ["Javascript", "CSS3", "HTML5"],
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
        id: nanoid(),
        image: notestodos,
        title: "Notes and Todos App",
        text: `React application which allows a user to create, edit and delete post-it sticker notes and todos with checklists, filter by searching for word matches and allows the user to close and reopen the page without data loss.`,
        badges: ["React", "FontAwesome", "CSS3", "HTML5"],
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
        id: nanoid(),
        image: form,
        title: "Sign Up Page",
        text: `This is a Sign Up Page which uses React state hook form handling and validating React form inputs.`,
        badges: ["React", "FontAwesome", "CSS3", "HTML5"],
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
        id: nanoid(),
        image: lyrics,
        title: "Portfoilo Page",
        text: `React mobile friendly personal portfolio application which showcases a brief introduction, skills, projects and provides users with a contact form.`,
        badges: ["React", "React Bootstrap", "FontAwesome", "CSS3", "HTML5"],
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
    { icon: faReact, name: "ReactJS" },
    { icon: faRoute, name: "React Router" },
    { icon: faBootstrap, name: "Bootstrap5" },
    { icon: faClone, name: "Material UI" },
    { icon: faFontAwesome, name: "Font Awesome" },
];
export const design_skills = [
    { icon: faFigma, name: "Figma" },
    { icon: faObjectGroup, name: "Adobe XD" },
    { icon: faImage, name: "Photoshop" },
    { icon: faImages, name: "Lightroom" },
    { icon: faPencilRuler, name: "Illustrator" },
];

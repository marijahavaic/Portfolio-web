import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import lyrics from "./Components/Photos/lyrics.png";
import notestodos from "./Components/Photos/notestodos.png";
import form from "./Components/Photos/form.png";
import portfolio from "./Components/Photos/portfolio.png";
import { nanoid } from "nanoid";

export const projects = [
    {
        id: nanoid(),
        slug: "lyrics",
        image: lyrics,
        badges: ["Javascript", "CSS3", "HTML5"],
        icons: [
            {
                name: faGithub,
                href: "https://github.com/marijahavaic/lyrics-searcher",
            },
            // { name: faYoutube, href: "github" },
            {
                name: faGlobe,
                href: "http://lyricssearcher.marijahavaic.com/",
            },
        ],
    },
    {
        id: nanoid(),
        slug: "notes",
        image: notestodos,
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
        slug: "form",
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
        slug: "portfolio",
        image: portfolio,
        title: "Portfoilo Page",
        text: `React mobile friendly personal portfolio application which showcases a brief introduction, skills, projects and provides users with a contact form.`,
        badges: ["React", "React Bootstrap", "FontAwesome", "CSS3", "HTML5"],
        icons: [
            {
                name: faGithub,
                href: "https://github.com/marijahavaic/portfolio-app",
            },
            // { name: faYoutube, href: "github" },
            { name: faGlobe, href: "http://marijahavaic.com/" },
        ],
    },
];

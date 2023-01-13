import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import lyrics from "./Photos/lyrics.png";
import notestodos from "./Photos/notes-todos.png";
import form from "./Photos/form.png";
import portfolio from "./Photos/portfolio.png";
import order from "./Photos/order-summary-component.png";
import intro from "./Photos/intro-section-with-dropdown-navigation.png";
import sunnyside from "./Photos/sunnyside-agency-landing-page.png";
import advice from "./Photos/advice-generator.png";
import { nanoid } from "nanoid";

export const projects = [
    {
        id: nanoid(),
        slug: "lyrics",
        image: lyrics,
        alt: "",
        badges: ["Javascript", "CSS3", "HTML5"],
        icons: [
            {
                name: faCode,
                href: "https://github.com/marijahavaic/lyrics-searcher",
                tooltip: "Source Code",
                ariaLabel: "Link to source code of Lyrics Searcher app",
            },
            // { name: faYoutube, href: "github" },
            {
                name: faGlobe,
                href: "http://lyricssearcher.marijahavaic.com/",
                tooltip: "Live Page",
                ariaLabel: "Link to the live page of Lyrics Searcher app",
            },
        ],
    },
    {
        id: nanoid(),
        slug: "notes",
        image: notestodos,
        alt: "",
        badges: ["React", "FontAwesome", "CSS3", "HTML5"],
        icons: [
            {
                name: faCode,
                href: "https://github.com/marijahavaic/notes-todo-app",
                tooltip: "Source Code",
                ariaLabel: "Link to source code of Notes Todo app",
            },
            // { name: faYoutube, href: "github" },
            {
                name: faGlobe,
                href: "http://notes.marijahavaic.com/",
                tooltip: "Live Page",
                ariaLabel: "Link to the live page of Notes Todo app",
            },
        ],
    },
    {
        id: nanoid(),
        slug: "form",
        image: form,
        alt: "",
        title: "Sign Up Page",
        text: `This is a Sign Up Page which uses React state hook form handling and validating React form inputs.`,
        badges: ["React", "FontAwesome", "CSS3", "HTML5"],
        icons: [
            {
                name: faCode,
                href: "https://github.com/marijahavaic/form-app",
                tooltip: "Source Code",
                ariaLabel: "Link to source code of Form app",
            },
            // { name: faYoutube, href: "github" },
            {
                name: faGlobe,
                href: "http://form.marijahavaic.com/",
                tooltip: "Live Page",
                ariaLabel: "Link to the live page of the Form app",
            },
        ],
    },
    {
        id: nanoid(),
        slug: "portfolio",
        image: portfolio,
        alt: "",
        title: "Portfoilo Page",
        text: `React mobile friendly personal portfolio application which showcases a brief introduction, skills, projects and provides users with a contact form.`,
        badges: [
            "React",
            "React Bootstrap",
            "FontAwesome",
            "CSS3",
            "HTML5",
            "i18n",
        ],
        icons: [
            {
                name: faCode,
                href: "https://github.com/marijahavaic/portfolio-app",
                tooltip: "Source Code",
                ariaLabel: "Link to source code of Portfolio app",
            },
            // { name: faYoutube, href: "github" },
            {
                name: faGlobe,
                href: "http://marijahavaic.com/",
                tooltip: "Live Page",
                ariaLabel: "Link to the live page of the Portfolio app",
            },
        ],
    },
    {
        id: nanoid(),
        slug: "order",
        image: order,
        title: "Frontend Mentor - Order summary card solution",
        text: "This is a solution to the Order summary card challenge on Frontend Mentor.",
        badges: ["CSS3", "HTML5"],
        icons: [
            {
                name: faCode,
                href: "https://github.com/marijahavaic/frontend-mentor-order-summary-component",
                tooltip: "Source Code",
            },
            {
                name: faGithub,
                tooltip: "Live Page",
                href: "https://marijahavaic.github.io/frontend-mentor-order-summary-component/",
            },
            {
                name: faGlobe,
                tooltip: "View Challenge",
                href: "https://www.frontendmentor.io/solutions/order-summary-card-solution-kXdFttYanW",
            },
        ],
    },
    {
        id: nanoid(),
        slug: "intro",
        image: intro,
        title: "Frontend Mentor - Intro section with dropdown navigation solution",
        text: "This is a solution to the Intro section with dropdown navigation challenge on Frontend Mentor.",
        badges: ["Javascript", "CSS3", "HTML5"],
        icons: [
            {
                name: faCode,
                href: "https://github.com/marijahavaic/fm-intro-section-with-dropdown-menu",
                tooltip: "Source Code",
            },
            {
                name: faGithub,
                tooltip: "Live Page",
                href: "https://marijahavaic.github.io/fm-intro-section-with-dropdown-menu/",
            },
            {
                name: faGlobe,
                tooltip: "View Challenge",
                href: "https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-YzxV0kGpa8",
            },
        ],
    },
    {
        id: nanoid(),
        slug: "sunnyside",
        image: sunnyside,
        title: "Frontend Mentor - Sunnyside agency landing page solution",
        text: "This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor.",
        badges: ["Javascript", "CSS3", "HTML5"],
        icons: [
            {
                name: faCode,
                href: "https://github.com/marijahavaic/fm-sunnyside-agency-landing-page",
                tooltip: "Source Code",
            },
            {
                name: faGithub,
                tooltip: "Live Page",
                href: "https://marijahavaic.github.io/fm-sunnyside-agency-landing-page/",
            },
            {
                name: faGlobe,
                tooltip: "View Challenge",
                href: "https://www.frontendmentor.io/solutions/sunnyside-agency-landing-page-6Rch7cSbhO",
            },
        ],
    },
    {
        id: nanoid(),
        slug: "advice",
        image: advice,
        title: "Frontend Mentor - Advice generator app solution",
        text: "This is a solution to the Advice generator app challenge on Frontend Mentor.",
        badges: [
            "React",
            "React Query",
            "React Device Detection",
            "SASS",
            "HTML5",
        ],
        icons: [
            {
                name: faCode,
                href: "https://github.com/marijahavaic/fm-advice-generator-app",
                tooltip: "Source Code",
            },
            {
                name: faGithub,
                tooltip: "Live Page",
                href: "https://marijahavaic.github.io/fm-advice-generator-app/",
            },
            {
                name: faGlobe,
                tooltip: "View Challenge",
                href: "https://www.frontendmentor.io/solutions/advice-generator-app-Cd4YFPyyak",
            },
        ],
    },
];

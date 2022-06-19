import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
    home: "Home",
    about: "About Me",
    aboutme: "Hi, I'm",
    aboutmetext: `I'm passionate about building web applications using JavaScript and React with experience of building web applications throughout two years.`,
    skills: "Skills",
    designSkills: "Design",
    projects: "Projects",
    contactMe: "Contact Me",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    madeBy: "Made by Marija HAVAIC",
    project_list: {
        lyrics: {
            title: "Lyrics Searcher",
            text: `Vanilla JavaScript application which uses a third-party API for finding lyrics which started as a simple DOM representation of JSON API responses and became a website for looking up and displaying the artist, lyrics and song sample.`,
        },
        notes: {
            title: "Notes and Todos App",
            text: `React application which allows a user to create, edit and delete post-it sticker notes and todos with checklists, filter by searching for word matches and allows the user to close and reopen the page without data loss.`,
        },
        form: {
            title: "Sign Up Page",
            text: `This is a Sign Up Page which uses React state hook form handling and validating React form inputs.`,
        },
        portfolio: {
            title: "Portfoilo Page",
            text: `React mobile friendly personal portfolio application which showcases a brief introduction, skills, projects and provides users with a contact form.`,
        },
    },
};

const translationsFr = {
    home: "Accueil",
    about: "Qui suis-je",
    aboutme: "Salut, je suis",
    aboutmetext: `Je suis passionné par la création d'applications Web en utilisant JavaScript et React avec une expérience de création d'applications Web pendant deux ans.`,
    skills: "Compétences",
    designSkills: "Désign",
    projects: "Projets",
    contactMe: "Contact",
    name: "Nom",
    email: "E-mail",
    message: "Le message",
    send: "Envoyer",
    madeBy: "Faite par Marija HAVAIC",
    project_list: {
        lyrics: {
            title: "Chercheur de paroles de chanson ",
            text: `Application Vanilla JavaScript qui utilise une API pour trouver des chansons qui a commencé comme une simple représentation DOM des réponses de l'API JSON et est devenue un site Web pour rechercher et afficher l'artiste, les chansons et l'échantillon de chanson.`,
        },
        notes: {
            title: "Notes et Todos App",
            text: `Application React qui permet à un utilisateur de créer, modifier et supprimer des post-it autocollants et des tâches avec des listes de contrôle, filtrer en recherchant des correspondances de mots et permet à l'utilisateur de fermer et de rouvrir la page sans perte de données.`,
        },
        form: {
            title: "Page d'inscription",
            text: `Il s'agit d'une page d'inscription qui utilise la gestion du formulaire de crochet d'état React et la validation des entrées du formulaire React.`,
        },
        portfolio: {
            title: "Site de Portfolio",
            text: `React Application de portefeuille personnel conviviale pour mobile qui présente une brève introduction, des compétences, des projets et fournit aux utilisateurs un formulaire de contact.`,
        },
    },
};

const translationsCro = {
    home: "Početna",
    about: "O meni",
    aboutme: "Bok, ja sam",
    aboutmetext: `Volim programirati web aplikacije koristeći JavaScript i React te imam dvije godine iskustva u tome.`,
    skills: "Vještine",
    designSkills: "Dizajn",
    projects: "Projekti",
    contactMe: "Kontaktiraj me",
    name: "Ime",
    email: "Email adresa",
    message: "Poruka",
    send: "Pošalji",
    madeBy: "Stranicu je izradila Marija HAVAIC",
    project_list: {
        lyrics: {
            title: "Lyrics Searcher",
            text: `Vanilla JavaScript aplikacija koja koristi API treće strane za pronalaženje tekstova koji je započeo kao jednostavan DOM prikaz JSON API odgovora i postao web stranica za traženje i prikaz izvođača, teksta i uzorka pjesme.`,
        },
        notes: {
            title: "Notes and Todos App",
            text: `React aplikacija koja korisniku omogućuje stvaranje, uređivanje i brisanje bilježaka i zadataka s todo listama. Moguće je filtrirati po ključnim riječima te je omogućeno korisniku da zatvori i ponovno otvori stranicu bez gubitka podataka.`,
        },
        form: {
            title: "Sign Up Page",
            text: `Ovo je stranica za prijavu koja koristi React Form hook.`,
        },
        portfolio: {
            title: "Portfoilo Page",
            text: `React mobile friendly aplikacija za osobni portfolio koja prikazuje kratak uvod, vještine, projekte te pruža korisnicima kontakt obrazac.`,
        },
    },
};

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
            gb: { translation: translationsEn },
            fr: { translation: translationsFr },
            hr: { translation: translationsCro },
        },
        fallbackLng: "gb",
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;

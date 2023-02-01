import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
    home: "Home",
    about: "About Me",
    aboutme: "Hi, I'm",
    aboutmetext: `I'm passionate about building efficient, mobile‑first responsive web applications using JavaScript and React with
    experience of building them throughout a two‑year‑long career‑changing journey to a fulfilling role.`,
    download: "Download CV",
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
            text: `Vanilla JavaScript mobile‑friendly application which uses a fetch JSON API and async/await for asynchronous
            API calls to fetch lyrics.`,
        },
        notes: {
            title: "Notes and Todos App",
            text: `React mobile‑friendly application which allows a user to create, edit and delete sticky notes and todos using
            functional components and hooks, saved in browser local storage (HTML5); filter by searching for word
            matches.
            `,
        },
        form: {
            title: "Sign Up Page",
            text: `Simple mobile‑friendly React sign‑up form which demonstrates the usage of React state hook and user input
            validation.`,
        },
        portfolio: {
            title: "Portfoilo Page",
            text: `React mobile‑friendly personal portfolio application which showcases a brief introduction, skills, projects and
            provides users with multi‑language support using the i18next library and with a contact form.`,
        },
        budget: {
            title: "Budget Tracking App",
            text: `This is the final project for Harvard CS50x Course CS50's Introduction to Computer Science. This is a budget tracking app which uses a bank document in CSV format to show current balance, total spending, balance trends and spending trends.`,
        },
        order: {
            title: "Order summary card",
            text: "This is a solution to the Order summary card challenge on Frontend Mentor.",
        },
        intro: {
            title: "Intro section with dropdown navigation",
            text: "This is a solution to the Intro section with dropdown navigation challenge on Frontend Mentor.",
        },
        sunnyside: {
            title: "Sunnyside agency landing page",
            text: "This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor.",
        },
        advice: {
            title: "Advice generator app",
            text: "This is a solution to the Advice generator app challenge on Frontend Mentor.",
        },
    },
};

const translationsFr = {
    home: "Accueil",
    about: "Qui suis-je",
    aboutme: "Salut, je suis",
    aboutmetext: `Je suis passionnée par la création d'applications web réactives efficaces, axées sur le mobile, à l'aide de JavaScript et de React. J'ai acquis de l'expérience dans ce domaine tout au long d'un parcours de deux ans qui m'a permis de changer de carrière afin d'obtenir un poste valorisant.`,
    download: "Télécharger CV",
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
            text: `Application Vanilla JavaScript qui utilise une API de récupération JSON et async/await pour les appels API asynchrones afin de récupérer les paroles et le nom de l'artiste.`,
        },
        notes: {
            title: "Notes et Todos App",
            text: `Application React adaptée au mobile qui permet à un utilisateur de créer, modifier et de supprimer des notes autocollantes et des "todos" à l'aide de composants fonctionnels et de crochets, sauvegardés dans le stockage local du navigateur (HTML5); filtrer en recherchant des correspondances de mots.`,
        },
        form: {
            title: "Page d'inscription",
            text: `Formulaire d'inscription React simple et adapté aux téléphones portables, qui démontre l'utilisation du crochet d'état React et de la validation des entrées de l'utilisateur.`,
        },
        portfolio: {
            title: "Site de Portfolio",
            text: `Application de portefeuille personnel adapté aux mobiles qui présente une brève introduction, des compétences, des projets et fournit aux utilisateurs un support multi-langue en utilisant la bibliothèque i18next ainsi qu'un formulaire de contact.`,
        },
        budget: {
            title: "Application de suivi budgétaire",
            text: `Il s'agit du projet final du cours CS50x de Harvard, Introduction à l'informatique. Il s'agit d'une application de suivi budgétaire qui utilise un document bancaire au format CSV pour afficher le solde actuel, les dépenses totales, les tendances du solde et les tendances des dépenses.`,
        },
        order: {
            title: "Carte récapitulative de commande",
            text: "Il s’agit d’une solution au défi de carte récapitulative de commande dans Frontend Mentor.",
        },
        intro: {
            title: "Introduction avec de navigation déroulante",
            text: "Il s’agit d’une solution à la section Intro avec un défi de navigation déroulante dans Frontend Mentor.",
        },
        sunnyside: {
            title: "Page de renvoi de l’agence Sunnyside",
            text: "Il s’agit d’une solution au défi de la page de renvoi de l’agence Sunnyside sur Frontend Mentor.",
        },
        advice: {
            title: "Application de générateur de conseils",
            text: "Il s’agit d’une solution au défi de l’application Générateur de conseils sur Frontend Mentor.",
        },
    },
};

const translationsCro = {
    home: "Početna",
    about: "O meni",
    aboutme: "Bok, ja sam",
    aboutmetext: `Volim programirati web aplikacije koristeći JavaScript i React. Imam dvije godine iskustva rada i učenja u tom području.`,
    download: "Preuzmi CV",
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
            text: `Vanilla JavaScript stranica koja koristi API za pronalaženje tekstova pjesama. Projekt je započeo kao jednostavan DOM prikaz JSON API odgovora i postao web stranica za traženje i prikaz izvođača, teksta i uzorka pjesme.`,
        },
        notes: {
            title: "Notes and Todos App",
            text: `React aplikacija koja korisniku omogućuje stvaranje, uređivanje i brisanje bilježaka i zadataka s todo listama. Moguće je filtrirati po ključnim riječima te je omogućeno korisniku da zatvori i ponovno otvori stranicu bez gubitka podataka.`,
        },
        form: {
            title: "Forma za registraciju",
            text: `Ovo je stranica za prijavu koja koristi React form i custom hook.`,
        },
        portfolio: {
            title: "Portfoilo",
            text: `React mobile friendly aplikacija za osobni portfolio koja prikazuje kratak uvod, vještine, projekte te kontakt obrazac.`,
        },
        budget: {
            title: "Aplikacija za pracenje budžeta",
            text: `Završni projekt za tečaj na Harvardu CS50x - CS50's Introduction to Computer Science. Aplikacija koristi bankovne dokumente u CSV formatu iz kojih generira podatke koji prikazuju trenutno stanje računa, stanje cjelokupne potrošnje,  stanje računa tijekom vremena te navike potrošnje.`,
        },
        order: {
            title: "Kartica sažetka narudžbe",
            text: "Ovo je rješenje za izazov kartice sa sažetkom narudžbe na Frontend Mentoru.",
        },
        intro: {
            title: "Uvodni odjeljak s padajućim izbornikom za navigaciju",
            text: "Ovo je rješenje za izazov uvodni odjeljak s padajućim izbornikom na Frontend Mentoru.",
        },
        sunnyside: {
            title: "Landing page agencije Sunnyside",
            text: "Ovo je rješenje za izazov landing page agencije Sunnyside na Frontend Mentoru.",
        },
        advice: {
            title: "Aplikacija za generiranje savjeta",
            text: "Ovo je rješenje za izazov aplikacije generatora savjeta na Frontend Mentoru.",
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

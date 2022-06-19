import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    designSkills: "Design",
    projects: "Projects",
    contactMe: "Contact Me",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    madeBy: "Made by Marija HAVAIC",
};

const translationsFr = {
    home: "Accueil",
    about: "Qui suis-je",
    skills: "Compétences",
    designSkills: "Désign",
    projects: "Projets",
    contactMe: "Contact",
    name: "Nom",
    email: "E-mail",
    message: "Le message",
    send: "Envoyer",
    madeBy: "Faite par Marija HAVAIC",
};

const translationsCro = {
    home: "Početna",
    about: "O meni",
    skills: "Vještine",
    designSkills: "Dizajn",
    projects: "Projekti",
    contactMe: "Kontaktiraj me",
    name: "Ime",
    email: "Email adresa",
    message: "Poruka",
    send: "Pošalji",
    madeBy: "Stranicu je izradila Marija HAVAIC",
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

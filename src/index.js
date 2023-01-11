import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./i18n";
import ErrorPage from "./Components/error-page";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import ProjectContainer from "./Components/ProjectContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: "/skills",
                element: <Skills />,
            },
            {
                path: "/projects",
                element: <Projects />,
                children: [
                    {
                        path: "/projects/:projectId",
                        element: <ProjectContainer />,
                    },
                ],
            },
            {
                path: "/contactme",
                element: <ContactMe />,
            },
        ],
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

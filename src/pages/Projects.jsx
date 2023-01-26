import React from "react";

import "../sass/App.scss";

import { useTranslation } from "react-i18next";
import ProjectSwiper from "../components/ProjectSwiper";
// import "bootstrap/dist/css/bootstrap.min.css";

import { projects } from "../data/projectsDetails";

import ProjectContainer from "../components/ProjectContainer";

const Projects = ({ darkMode }) => {
    const { t } = useTranslation();
    return (
        <div className="Projects mb-1">
            <h1 className="p-3 text-center">
                <a id="projects" href="#projects">
                    {t("projects")}
                </a>
            </h1>
            <ProjectSwiper darkMode={darkMode} />
            <div className="projectGallery">
                {projects.map((project) => (
                    <ProjectContainer
                        image={project.image}
                        altText={project.alt}
                        title={t(`project_list.${project.slug}.title`)}
                        text={t(`project_list.${project.slug}.text`)}
                        badges={project.badges}
                        icons={project.icons}
                        darkMode={darkMode}
                        key={project.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;

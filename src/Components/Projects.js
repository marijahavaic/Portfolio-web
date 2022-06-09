import React from "react";

// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectCoverflow,
} from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "../sass/App.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./Style/Projects.css";

import { projects } from "../projectsDetails";

import ProjectContainer from "./ProjectContainer";

import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

const Projects = ({ darkMode, t }) => {
    return (
        <div className="Projects p-3 m-5 ">
            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    Autoplay,
                    // EffectCoverflow,
                ]}
                // effect={"coverflow"}
                spaceBetween={1}
                slidesPerView={1}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                // coverflowEffect={{
                //     rotate: 50,
                //     stretch: 0,
                //     depth: 100,
                //     modifier: 1,
                //     slideShadows: true,
                // }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                data-swiper-autoplay="2000"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {projects.map((project) => (
                    <SwiperSlide>
                        <ProjectContainer
                            key={project.key}
                            image={project.image}
                            title={project.title}
                            text={project.text}
                            badges={project.badges}
                            icons={project.icons}
                            darkMode={darkMode}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        // <div className="Projects">
        //     <Container
        //         className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5 mb-5 pb-5"
        //         fluid
        //     >
        //         <h1 className="p-3">
        //             <a id="projects">{t("projects")}</a>
        //         </h1>
        //         <Row
        //             xs={1}
        //             md={2}
        //             lg={3}
        //             className="d-flex justify-content-center align-items-center"
        //         >
        //             {projects.map((project) => (
        //                 <ProjectContainer
        //                     key={project.key}
        //                     image={project.image}
        //                     title={project.title}
        //                     text={project.text}
        //                     badges={project.badges}
        //                     icons={project.icons}
        //                     darkMode={darkMode}
        //                 />
        //             ))}
        //         </Row>
        //     </Container>
        // </div>
    );
};

export default Projects;

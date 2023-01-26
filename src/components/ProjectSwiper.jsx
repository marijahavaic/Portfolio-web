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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { useTranslation } from "react-i18next";

import { projects } from "../data/projectsDetails";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function ProjectSwiper({ darkMode }) {
    return (
        <Swiper
            modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectCoverflow,
            ]}
            effect={"coverflow"}
            spaceBetween={1}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            style={{ zIndex: "1" }}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            data-swiper-autoplay="2000"
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            className="mb-5"
        >
            {projects.map((project) => (
                <SwiperSlide key={project.id}>
                    <Container>
                        <Image
                            variant="top"
                            src={project.image}
                            className="w-100 h-100 mb-xs-1"
                            alt={project.altText}
                            key={project.id}
                        />
                    </Container>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ProjectSwiper;

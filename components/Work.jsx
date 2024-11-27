"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/speedy-bites.png",
    category: "Full Stack",
    name: "Stadiums",
    description:
      "Contrôle à distance d'un stade utilisant HTML, CSS, JavaScript et Firebase. Fait partie d'un projet plus large d'application IoT et mobile.",
    link: "/",
    github: "https://github.com/ayaabidghozy13",
  },
  {
    image: "/work/stadiums.png",
    category: "Full Stack",
    name: "Speedy Bites",
    description:
      "Système de réservation de restaurant en ligne utilisant React, MongoDB et Node.js..",
    link: "/",
    github: "https://github.com/ayaabidghozy13",
  },

  {
    image: "/work/flesk-ia.png",
    category: "IA",
    name: "Flesk IA",
    description:
      " Reconnaissance faciale utilisant HTML, CSS, JavaScript, React, TensorFlow, OpenCV, PyTorch, etc.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/palestine-mobile.png",
    category: "Applications Mobile",
    name: " Palestine Mobile Application",
    description:
      "Développée en utilisant Java et XML avec un thème centré sur la Palestine.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="container relative mb-12 xl:mb-48 ">
      <div className="container mx-auto ">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left  mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          <h2 className="section-title mb-4 ">Derniers projets</h2>
          <p className="subtitle mb-8 ">
            Découvrez la fusion de la créativité et de la technologie à travers
            mes derniers projets.
          </p>
          <Link href="/projects">
            <Button>Tous les projets</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[900px] xl:absolute right-6 top-0   ">
          <Swiper
            className="h-[480px]  "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={50}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            style={{ height: "500px", paddingBottom: "50px" }} // Inline style for padding below swiper
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;

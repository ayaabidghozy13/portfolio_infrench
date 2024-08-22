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
    image: "/work/stadiums.png",
    category: "Full Stack",
    name: "Stadiums",
    description:
      "Remote stadium control using HTML, CSS, JavaScript, and Firebase. Part of a larger IoT and mobile application project. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/speedy-bites.png",
    category: "Full Stack",
    name: " Speedy Bites",
    description:
      "Online restaurant reservation system using React, MongoDB, and Node.js.",
    link: "/",
    github: "/",
  },

  {
    image: "/work/flesk-ia.png",
    category: "IA",
    name: "Flesk IA",
    description:
      "Facial Recognition using HTML, CSS, JavaScript, React, TensorFlow, OpenCV, PyTorch, etc. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/palestine-mobile.png",
    category: "Mobile Applications",
    name: " Palestine Mobile Application",
    description: "Developed using Java and XML with a theme around Palestine.",
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
          <h2 className="section-title mb-4 ">Latest Projects</h2>
          <p className="subtitle mb-8 ">
            Explore the fusion of creativity and technology in my latest
            projects.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
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

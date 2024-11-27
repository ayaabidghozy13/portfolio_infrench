"use client";

import React, { useState } from "react";
import BlogCard from "@/components/BlogCard";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const blogData = [
  {
    id: 1,
    imagePath: "/blog/back.webp",
    altText: "Illustration du développement du backend ",
    name: "Développement Backend",
    category: "Backend",
    description:
      "Découvrez les bases du développement côté serveur et comprenez le fonctionnement des systèmes backend.",
    link: "https://www.linkedin.com/posts/deadlymind_understand-how-backend-system-work-part-1-activity-7186217629181751296-4Uld?utm_source=share&utm_medium=member_desktop",
    createdAt: "2024-03-26",
    author: "ayaabidghozy",
    tags: ["Dévelopment", "Backend", "Programmation"],
  },
  {
    id: 2,
    imagePath: "/blog/front.webp",
    altText: "Illustration du développement Frontend",
    name: " Development Frontend",
    category: "Frontend",
    description:
      "Plongez dans le développement Frontend pour créer des expériences utilisateur engageantes et interactives sur le web.", // Descriptive text about frontend development
    link: "/blog/frontend",
    createdAt: "2024-03-26",
    author: "ayaabidghozy",
    tags: ["Dévelopment", "Frontend", "Web Design"],
  },
  {
    id: 3,
    imagePath: "/blog/full.png",
    altText: "Illustration du développement Full Stack",
    name: " Dévelopment Full stack",
    category: "Full Stack",
    description:
      "Maîtrisez à la fois le frontend et le backend du développement web pour créer des applications web complètes et performantes.",
    link: "/blog/fullstack",
    createdAt: "2024-03-26",
    author: "ayaabidghozy",
    tags: ["Dévelopment", "Full Stack", " Applications Web"],
  },
  {
    id: 4,
    imagePath: "/blog/mernf.png",
    altText: "MERN STACK",
    name: "MERN STACK",
    category: "Full Stack",
    description:
      "Maîtrisez les bases essentielles du MERN Stack pour développer des applications web dynamiques et évolutives.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7188400972086312960/",
    createdAt: "2024-04-23",
    author: "ayaabidghozy",
    tags: ["Dévelopment", "Full Stack", " Applications web"],
  },
];

const Blog = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        {/* slider */}
        <div className="h-[350px] ">
          <Swiper
            className="h-[350px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {blogData.map((blog, index) => {
              return (
                <SwiperSlide key={index}>
                  <BlogCard blog={blog} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;

{
  /*const Blog = () => {

    return (
      <section className="mb-12 xl:mb-32">
        <div className="container mx-auto">
          <h2 className='section-title mb-12 text-center mx-auto'>My Blog</h2>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[350px]"
          >
            {filteredBlog.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };
  
export default Blog; */
}

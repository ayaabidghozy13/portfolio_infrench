"use client";

import React, { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BlogCard from "@/components/BlogCard";

const blogData = [
  {
    id: 1,
    imagePath: "/blog/back.webp",
    altText: "Illustration du développement Backend",
    name: "Développement Backend",
    category: "Backend",
    description:
      "Découvrez les bases du développement côté serveur et comprenez le fonctionnement des systèmes backend.",
    link: "https://www.linkedin.com/in/aya-abid-ba4139285/",
    createdAt: "2024-03-26",
    author: "ayaabidghozy",
    tags: ["Development", "Backend", "Programmation"],
  },
  {
    id: 2,
    imagePath: "/blog/front.webp",
    altText: "Illustration du développement Frontend",
    name: "Développement Frontend",
    category: "Frontend",
    description:
      "Plongez dans le monde du développement Frontend pour créer des expériences utilisateur engageantes et interactives sur le web.",
    link: "/blog/frontend",
    createdAt: "2024-03-26",
    author: "ayaabidghozy",
    tags: ["Development", "Frontend", "Web Design"],
  },
  {
    id: 3,
    imagePath: "/blog/full.png",
    altText: "Illustration du développement Full Stack",
    name: "Développement Full Stack",
    category: "Full Stack",
    description:
      "Maîtrisez le frontend et le backend du développement web pour créer des applications web complètes et performantes.",
    link: "/blog/fullstack",
    createdAt: "2024-03-26",
    author: "ayaabidghozy",
    tags: ["Développement ", "Full Stack", "Applications web"],
  },
  {
    id: 4,
    imagePath: "/blog/mernf.png",
    altText: "MERN STACK",
    name: "MERN STACK",
    category: "Full Stack",
    description:
      "Maîtrisez les bases essentielles du MERN Stack pour développer des applications web évolutives et dynamiques.",
    link: "https://www.linkedin.com/in/aya-abid-ba4139285/",
    createdAt: "2024-04-23",
    author: "ayaabidghozy",
    tags: ["Développement ", "Full Stack", "Web Applications"],
  },
];

const uniqueCategories = [
  "tous les  articles",
  ...new Set(blogData.map((item) => item.category)),
];

const MyBlog = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("tous les  articles");

  const filteredBlogData = useMemo(
    () =>
      blogData.filter((blog) => {
        return selectedCategory === "tous les  articles"
          ? true
          : blog.category === selectedCategory;
      }),
    [selectedCategory]
  );

  return (
    <section className="flex flex-col justify-between min-h-screen">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mon blog
        </h2>
        <Tabs
          defaultValue={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-24 xl:mb-48"
        >
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {uniqueCategories.map((category, index) => (
              <TabsTrigger
                value={category}
                key={index}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={selectedCategory}>
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              {filteredBlogData.length > 0 ? (
                filteredBlogData.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))
              ) : (
                <p>No articles found in this category.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MyBlog;

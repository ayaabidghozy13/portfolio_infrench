"use client";

import React, { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/speedy-bites.png",
    category: "Full Stack",
    name: "Stadiums",
    description:
      "Contrôle à distance de stade utilisant HTML, CSS, JavaScript et Firebase. Fait partie d'un projet IoT et d'application mobile plus large.",
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
      "Reconnaissance faciale utilisant HTML, CSS, JavaScript, React, TensorFlow, OpenCV, PyTorch, etc.",
    link: "/",
    github: "https://github.com/ayaabidghozy13",
  },
  {
    image: "/work/palestine-mobile.png",
    category: "Mobile Applications",
    name: "Palestine Mobile Application",
    description:
      "Développée en utilisant Java et XML avec un thème centré sur la Palestine.",
    link: "/",
    github: "https://github.com/ayaabidghozy13",
  },
];

const uniqueCategories = [
  "Tous les projets",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les projets");

  const filteredProjects = useMemo(
    () =>
      projectData.filter((project) => {
        return selectedCategory === "Tous les projets"
          ? true
          : project.category === selectedCategory;
      }),
    [selectedCategory]
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mes Projets
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
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard project={project} key={project.name + index} />
                ))
              ) : (
                <p>No projects found in this category.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;

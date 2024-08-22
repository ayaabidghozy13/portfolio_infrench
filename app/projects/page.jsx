"use client";

import React, { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/stadiums.png",
    category: "Full Stack",
    name: "Stadiums",
    description:
      "Remote stadium control using HTML, CSS, JavaScript, and Firebase. Part of a larger IoT and mobile application project.",
    link: "/",
    github: "https://github.com/ayaabidghozy13",
  },
  {
    image: "/work/speedy-bites.png",
    category: "Full Stack",
    name: "Speedy Bites",
    description:
      "Online restaurant reservation system using React, MongoDB, and Node.js.",
    link: "/",
    github: "https://github.com/ayaabidghozy13",
  },
  {
    image: "/work/flesk-ia.png",
    category: "IA",
    name: "Flesk IA",
    description:
      "Facial Recognition using HTML, CSS, JavaScript, React, TensorFlow, OpenCV, PyTorch, etc.",
    link: "/",
    github: "https://github.com/ayaabidghozy13",
  },
  {
    image: "/work/palestine-mobile.png",
    category: "Mobile Applications",
    name: "Palestine Mobile Application",
    description: "Developed using Java and XML with a theme around Palestine.",
    link: "/",
    github: "https://github.com/ayaabidghozy13",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all projects");

  const filteredProjects = useMemo(
    () =>
      projectData.filter((project) => {
        return selectedCategory === "all projects"
          ? true
          : project.category === selectedCategory;
      }),
    [selectedCategory]
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
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

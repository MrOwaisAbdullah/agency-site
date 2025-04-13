"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import projects from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeInSection from "./FadeInSection";

const ProjectTabs = () => {
  const categories = Object.keys(projects);
  const [selectedTab, setSelectedTab] = useState(categories[0]);
  const [isHovered, setIsHovered] = useState(false);

  console.log(selectedTab);

  return (
    <FadeInSection>
      <section id="projects" className="max-w-7xl mx-auto mt-20 mb-10 px-5">
        <div className="text-center">
          <h3 className="text-base text-accent font-medium sm:text-lg">
            See Our Work
          </h3>
          <h2 className="text-5xl text-text font-semibold sm:text-6xl">
            Portfolio
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={categories[0]} className="w-full mt-10">
          <TabsList className="flex flex-wrap justify-center gap-3 p-2 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedTab(category)}
                className="px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-accent transition"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects[category as keyof typeof projects].map(
                  (project, index) => (
                    <div
                      key={index}
                      className="group entrance scroll-smooth border border-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#3a69ff]/20 bg-gradient-to-br to-[#1c1f22] from-[#16161f]"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div className="relative aspect-[1220/686] w-full overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt="Service"
                          width={500}
                          height={300}
                          className={
                            "h-full w-full object-cover transition-transform duration-700"
                          }
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#212428] to-transparent opacity-70" />
                      </div>

                      <div className="p-6">
                        <h1 className="text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="font-poppins mb-4 text-[#e5e7eb]">
                          {project.description}
                        </p>
                        <div className="flex items-center">
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center text-[#3a69ff] transition-all hover:text-white"
                          >
                            <span className="font-poppins mr-2 font-medium">
                              Learn more
                            </span>
                            <ArrowRight
                              className={cn(
                                "h-4 w-4 transition-all duration-300",
                                isHovered ? "translate-x-1" : "translate-x-0"
                              )}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </FadeInSection>
  );
};

export default ProjectTabs;

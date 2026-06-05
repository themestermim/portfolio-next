import React, { useContext } from "react";
import HomeContext from "@/app/contexts/HomeContext";
import Link from "next/link";
import ProjectCard from "@/components/Shared/ProjectCard";

const Projects = () => {

    const data = useContext(HomeContext);

    if (!data?.projects?.length) return null;

    return (
        <div className="py-8" id="projects">
            <h2 className="text-center relative font-bold text-2xl unique-title">
                نمونه کار های من
            </h2>

            <div className="marquee-list flex items-center mt-6 overflow-hidden">
                <div className="marquee w-fit flex">
                    {data.projects.map((project) => (
                        <div className="w-76 px-2 flex-none lg:w-84 lg:px-3" key={project.id}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                    
                    {data.projects.map((project) => (
                        <div className="w-76 px-2 flex-none lg:w-84 lg:px-3" key={project.id}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end mt-8">
                <Link className="flex items-center gap-2 py-1 text-primary" href="/projects">
                    <span className="text-sm">مشاهده همه</span>
                    <svg className="size-6">
                        <use href="#svg-arrow-left" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
"use client";

import ProjectsContext from "@/app/contexts/ProjectsContext";
import { useContext } from "react";
import ProjectCard from "@/components/Shared/ProjectCard";

export default function List() {

    const { projects } = useContext(ProjectsContext);

    return (
        <div className="lg:col-span-4">
            <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {projects.map(project => (
                    <li key={project.id}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>

        </div>
    )
}
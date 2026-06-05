"use client";

import ProjectsContext from "@/app/contexts/ProjectsContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import Filters from "@/components/Projects/Filters/index";
import List from "@/components/Projects/Projects/List";
import { useEffect, useState } from "react";

export default function ProjectsWrapper({ projects, categories }) {

    const [projectList, setProjectList] = useState(projects);

    useEffect(() => {
        setProjectList(projects);
    }, [projects]);

    const breadcrumbs = [
        { title: "لیست پروژه ها", link: "/projects" }
    ];

    return (
        <ProjectsContext.Provider value={{ projects: projectList, setProjects: setProjectList, categories }}>
            <main className="container pb-10">
                <Breadcrumbs data={breadcrumbs} />

                <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-5">
                    <Filters />

                    <List />
                </div>

            </main>
        </ProjectsContext.Provider>
    );
}
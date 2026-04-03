import React, { useContext } from "react";
import Image from "next/image";
import HomeContext from "@/app/contexts/HomeContext";
import Link from "next/link";

const Projects = () => {

    const data = useContext(HomeContext);

    return (
        <div className="py-8" id="projects">
            <h2 className="text-center relative font-bold text-2xl unique-title">
                نمونه کار های من
            </h2>

            <div className="marquee-list flex items-center mt-6 overflow-hidden">
                <div className="marquee w-fit flex">
                    {data.projects.map((project) => (
                        <div className="w-76 px-2 flex-none lg:w-84 lg:px-3" key={project.id}>
                            <article className="w-full rounded-xl bg-secondary text-accent overflow-hidden group">
                                <div className="w-full pt-[56.25%] relative overflow-hidden">
                                    <Image src={project._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={project.title.rendered} width="288" height="162" className="absolute size-full object-cover top-0 left-0 group-hover:scale-105 transition-transform duration-500 will-change-transform" />
                                </div>

                                <section className="p-4 flex flex-col items-start">
                                    <h3 className="text-lg font-medium">{project.title.rendered}</h3>
                                    <div
                                        className="text-sm mt-2 h-10 line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                            __html: project.content.rendered,
                                        }}>
                                    </div>
                                    <Link href={`projects/${project.slug}`} title={project.title.rendered} className="c-btn btn-dark-fill btn-sm btn-full btn-center mt-4">
                                        <span>مشاهده پروژه</span>
                                    </Link>
                                </section>
                            </article>
                        </div>
                    ))}
                    
                    {data.projects.map((project) => (
                        <div className="w-76 px-2 flex-none lg:w-84 lg:px-3" key={project.id}>
                            <article className="w-full rounded-xl bg-secondary text-accent overflow-hidden group">
                                <div className="w-full pt-[56.25%] relative overflow-hidden">
                                    <Image src={project._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={project.title.rendered} width="288" height="162" className="absolute size-full object-cover top-0 left-0 group-hover:scale-105 transition-transform duration-500 will-change-transform" />
                                </div>

                                <section className="p-4 flex flex-col items-start">
                                    <h3 className="text-lg font-medium">{project.title.rendered}</h3>
                                    <div
                                        className="text-sm mt-2 h-10 line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                            __html: project.content.rendered,
                                        }}>
                                    </div>
                                    <Link href={`projects/${project.slug}`} title={project.title.rendered} className="c-btn btn-dark-fill btn-sm btn-full btn-center mt-4">
                                        <span>مشاهده پروژه</span>
                                    </Link>
                                </section>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
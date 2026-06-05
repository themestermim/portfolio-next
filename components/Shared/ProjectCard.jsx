"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({project}) {

    return (
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
    )
}
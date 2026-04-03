"use client";

import ProjectContext from "@/app/contexts/ProjectContext";
import { useContext } from "react";

export default function Title() {

    const { data, likes } = useContext(ProjectContext);

    return (
        <div className="py-4 mt-4 flex items-start justify-between gap-4">
            <h1 className="text-2xl text-accent">{data?.title?.rendered}</h1>
            <ul className="flex items-center gap-2">
                <li>
                    <a href={data?.acf?.link} target="_blank" className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-secondary text-accent text-sm">
                        <span>نمایش</span>
                        <svg className="size-4">
                            <use href="#svg-eye-open" />
                        </svg>
                    </a>
                </li>
                <li className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-secondary text-accent text-sm">
                    <span>{likes}</span>
                    <svg className="size-4">
                        <use href="#svg-heart" />
                    </svg>
                </li>
            </ul>
        </div>
    )
}
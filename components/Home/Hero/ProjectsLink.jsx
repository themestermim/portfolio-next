"use client";

import React from "react";
import {scrollToElement} from "@/utils/scrollTo";

const ProjectsLink = () => {
    return (
        <div className="flex items-center gap-4 mt-4 lg:mt-8">
            <button type="button" role="button" className="c-btn btn-primary-fill btn-md" onClick={() => scrollToElement("projects")}>
                <span>نمونه کار ها</span>
            </button>
        </div>
    )
}

export default ProjectsLink;
"use client";
import ProjectContext from "@/app/contexts/ProjectContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import Like from "@/components/Project/Like";
import Image from "next/image";
import Title from "@/components/Project/Title";
import { useState } from "react";

export default function HomeWrapper({ data }) {
    const [likes, setLikes] = useState(data?.meta?.likes_count || 0);

    const breadcrumbs = [
        { title: data.title.rendered, link: data.slug }
    ];

    return (
        <ProjectContext.Provider value={{ data, likes, setLikes }}>
            <main className="container pb-10">
                <Breadcrumbs data={breadcrumbs} />

                <div className="w-full flex mt-4">
                    <Image src={data._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={data._embedded?.["wp:featuredmedia"]?.[0]?.alt_text} width={data._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.width} height={data._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.height} className="rounded-2xl" />
                </div>
                
                <Title />

                <article className="custom-html mt-4" dangerouslySetInnerHTML={{
                        __html: data.content.rendered,
                    }}>
                </article>

                <Like />
            </main>
        </ProjectContext.Provider>
    );
}
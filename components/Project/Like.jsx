"use client";

import { useContext, useState } from "react";
import ProjectContext from "@/app/contexts/ProjectContext";

export default function LikeContainer() {
    const { data, likes, setLikes } = useContext(ProjectContext);
    const [loading, setLoading] = useState(false);
    const [liked, setLiked] = useState(false);

    async function likeProject() {
        if (loading || liked) return;
        setLoading(true);

        try {
            const res = await fetch("http://portfolio-next.test/wp-json/custom/v1/like", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slug: data?.slug }),
            });

            if (!res.ok) {
                console.error("Like error:", await res.text());
                return;
            }

            const response = await res.json();
            setLikes(response.likes);
            setLiked(true);

        } catch (err) {
            console.error("Network error:", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="bg-secondary p-4 rounded-2xl mt-10 max-w-2xl mx-auto text-white">
            <h3 className="text-xl mb-2">اگه از این پروژه خوشت اومد ❤️</h3>
            <p className="text-white/70 text-base mb-4">
                با زدن دکمه زیر بهم انرژی بده!
                این کمک می‌کنه پروژه‌های بعدی بهتر بشن.
            </p>

            <div className="flex items-center justify-between">
                <button
                    onClick={likeProject}
                    disabled={loading || liked}
                    className={"flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 bg-primary"}
                >
                    <span className={`text-xl transition ${liked ? "animate-pulse" : ""}`}>
                        {liked ? "❤️" : "🤍"}
                    </span>
                    <span className="font-medium">
                        {liked ? "مرسی! لایک شد" : "لایک کن"}
                    </span>
                </button>

                <span className="text-sm">
                    {likes} لایک
                </span>
            </div>

        </section>
    );
}

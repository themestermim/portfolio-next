"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ProjectsContext from "@/app/contexts/ProjectsContext";
import { useContext, useState } from "react";

export default function Filters() {

    const { categories } = useContext(ProjectsContext);

    const router = useRouter();
    const searchParams = useSearchParams();

    const initialCats = searchParams.get("cat")?.split(",").map(Number) || [];

    const [selectedCats, setSelectedCats] = useState(initialCats);

    function toggleCategory(id) {

        let updated;

        if (selectedCats.includes(id)) {
            updated = selectedCats.filter(c => c !== id);
        } else {
            updated = [...selectedCats, id];
        }

        setSelectedCats(updated);

        const params = new URLSearchParams(searchParams);

        if (updated.length) {
            params.set("cat", updated.join(","));
        } else {
            params.delete("cat");
        }

        router.push(`/projects?${params.toString()}`);
    }

    return (
        <section className="fixed bottom-0 start-0 bg-background z-10 h-full w-full lg:static">
            <div className="text-accent lg:border lg:border-secondary lg:p-4 lg:rounded-2xl">
                <span className="block text-lg">فیلتر ها</span>

                <div className="flex flex-col text-sm mt-4">
                    {categories.map(cat => (
                        <label key={cat.id} className="flex items-center gap-4 py-2 cursor-pointer">
                            <input type="checkbox" className="size-4" onChange={() => toggleCategory(cat.id)} checked={selectedCats.includes(cat.id)} />
                            <span>{cat.name}</span>
                        </label>
                    ))}
                </div>
            </div>
        </section>
    )
}
"use client";

import Hero from "@/components/Home/Hero/index";
import About from "@/components/Home/About/index";
import Services from "@/components/Home/Services/index";
import Projects from "@/components/Home/Projects/index";
import Contact from "@/components/Home/Contact/index";
import HomeContext from "@/app/contexts/HomeContext";

export default function HomeWrapper({ projects }) {

    return (
        <HomeContext.Provider value={{ projects }}>
            <main className="container space-y-10 lg:space-y-24">
                <Hero />

                <About />

                <Services />

                <Projects />

                <Contact />
            </main>
        </HomeContext.Provider>
    );
}

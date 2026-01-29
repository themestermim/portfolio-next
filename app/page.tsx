import React from "react";
import Hero from "@/components/Home/Hero/index";
import About from "@/components/Home/About/index";
import Services from "@/components/Home/Services/index";
import Projects from "@/components/Home/Projects/index";
import Contact from "@/components/Home/Contact/index";

export default function HomePage() {
    return (
        <main className="container text-3xl text-green-500 space-y-10 lg:space-y-24">
            <Hero />

            <About />

            <Services />

            <Projects />

            <Contact />
        </main>
    )
}
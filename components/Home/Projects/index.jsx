import React from "react";
import Image from "next/image";

const Projects = () => {
    const projects = [
        {
            src: "/assets/img/projects/drfori.png",
            title: "دکتر فوری",
            shortDescription: "وبسایت نوبت گیری آنلاین پزشکی",
            link: "https://drfori.com/"
        },
        {
            src: "/assets/img/projects/paye1.png",
            title: "پایه یک",
            shortDescription: "مرجع جامع برای خودرو های سنگین",
            link: "https://paye1.org/"
        },
        {
            src: "/assets/img/projects/tehran-dj.png",
            title: "تهران دی جی",
            shortDescription: "مرجع تخصصی دی جی ایران",
            link: "https://tehrandj.com/"
        },
        {
            src: "/assets/img/projects/farsh.png",
            title: "شهر فرش",
            shortDescription: "مرجع تخصصی فرش ایران",
            link: "https://shahrfarsh.com/"
        },
        {
            src: "/assets/img/projects/personal-themestermim.png",
            title: "پورتفولیو شخصی",
            shortDescription: "معرفی خودم به همراه نمونه کار ها و تخصص ها به زبان انگلیسی",
            link: "https://themestermim.vercel.app/"
        },
        {
            src: "/assets/img/projects/personal-mestermim.png",
            title: "پورتفولیو شخصی",
            shortDescription: "معرفی خودم به همراه نمونه کار ها و تخصص ها دو ربانه به همراه دارک مود",
            link: "https://mestermim.vercel.app/"
        },
        {
            src: "/assets/img/projects/mammutco.png",
            title: "ماموت ساختمان",
            shortDescription: "قطب اصلی تولید محصولات پیش ساخته در خاورمیانه",
            link: "https://mammutco-panel.com/"
        },
        {
            src: "/assets/img/projects/panel-mammut.png",
            title: "پانل ماموت",
            shortDescription: "تولید کننده محصولات پیش ساخته",
            link: "https://panelmammutco.com/"
        },
    ];
    
    return (
        <div className="py-8">
            <h2 className="text-center relative font-bold text-2xl unique-title">
                نمونه کار های من
            </h2>

            <div className="marquee-list flex items-center mt-6 overflow-hidden">
                <div className="marquee w-fit flex">
                    {projects.map((project, index) => (
                        <div className="w-76 px-2 flex-none lg:w-84 lg:px-3" key={project.link}>
                            <article className="w-full rounded-xl bg-secondary text-accent overflow-hidden" key={index}>
                                <div className="w-full pt-[56.25%] relative">
                                    <Image src={project.src} alt={project.title} width="288" height="162" className="absolute size-full object-cover top-0 left-0" />
                                </div>

                                <section className="p-4 flex flex-col items-start">
                                    <h3 className="text-lg font-medium">{project.title}</h3>
                                    <p className="text-sm mt-2 h-10 line-clamp-2">{project.shortDescription}</p>
                                    <a href={project.link} target="_blank" title={project.title} className="c-btn btn-dark-fill btn-sm btn-full btn-center mt-4">
                                        <span>مشاهده پروژه</span>
                                    </a>
                                </section>
                            </article>
                        </div>
                    ))}
                    {projects.map((project, index) => (
                        <div className="w-76 px-2 flex-none lg:w-84 lg:px-3" key={project.link}>
                            <article className="w-full rounded-xl bg-secondary text-accent overflow-hidden" key={index}>
                                <div className="w-full pt-[56.25%] relative">
                                    <Image src={project.src} alt={project.title} width="288" height="162" className="absolute size-full object-cover top-0 left-0" />
                                </div>

                                <section className="p-4 flex flex-col items-start">
                                    <h3 className="text-lg font-medium">{project.title}</h3>
                                    <p className="text-sm mt-2 h-10 line-clamp-2">{project.shortDescription}</p>
                                    <a href={project.link} target="_blank" title={project.title} className="c-btn btn-dark-fill btn-sm btn-full btn-center mt-4">
                                        <span>مشاهده پروژه</span>
                                    </a>
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

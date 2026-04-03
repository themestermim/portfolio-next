import React from "react";
import LogoApi from "./Logos/Api";
import LogoDevelopment from "./Logos/Development";
import LogoPerformance from "./Logos/Performance";
import LogoSeo from "./Logos/Seo";
import LogoLegacy from "./Logos/Legacy";
import LogoWordpress from "./Logos/Wordpress";

const services = [
    {
        title: "Front-End Development",
        description: "ساخت فرانت‌اند ماژولار و قابل توسعه با Nuxt و Vue",
        logo: <LogoDevelopment style="size-20 fill-primary" />
    },
    {
        title: "Performance Optimization",
        description: "بهبود سرعت، Core Web Vitals و PageSpeed",
        logo: <LogoPerformance style="size-20 fill-primary" />
    },
    {
        title: "SSR & SEO",
        description: "پیاده‌سازی SSR و سئو فنی برای رشد ارگانیک",
        logo: <LogoSeo style="size-20 fill-primary" />
    },
    {
        title: "Legacy Refactoring",
        description: "بازنویسی کدهای قدیمی و هاردکد",
        logo: <LogoLegacy style="size-20 fill-primary" />
    },
    {
        title: "WordPress Custom UI",
        description: "توسعه سفارشی بدون پلاگین‌های سنگین",
        logo: <LogoWordpress style="size-20 fill-primary" />
    },
    {
        title: "API Integration",
        description: "اتصال پایدار فرانت‌اند به بک‌اند",
        logo: <LogoApi style="size-20 fill-primary" />
    },
];

const Services = () => {
    return (
        <div className="py-8">
            <h2 className="text-center relative font-bold text-2xl unique-title">
                خدمات من
            </h2>

            <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6 text-accent *:space-y-2 *:p-4 *:rounded-xl *:bg-secondary lg:*:pb-5">
                {services.map((service, index) => (
                    <li className="flex flex-col items-center" key={index}>
                        {service.logo}
                        <h3 className="text-xl text-center font-medium">{service.title}</h3>
                        <p className="text-base text-center">{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;

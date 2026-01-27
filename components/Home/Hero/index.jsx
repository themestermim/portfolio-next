import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="py-12 flex flex-col gap-4 lg:items-center lg:flex-row-reverse lg:gap-8">
            <div className="w-full flex justify-center relative lg:w-auto lg:px-8 lg:flex-none before:absolute before:content-[''] before:size-48 before:bg-primary/75 before:rounded-full before:top-1/2 before:-translate-y-1/2 before:blur-[7rem]">
                <div className="border-4 border-primary rounded-full p-1 relative z-10 lg:p-2 lg:border-[6px]">
                    <div className="size-40 flex-none overflow-hidden rounded-full lg:size-72">
                        <Image src="/assets/img/mehran-mahmoudi.png" alt="مهران محمودی" className="size-full object-cover" width="288" height="288" priority="high" />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col lg:w-auto lg:flex-1">
                <span className="block text-sm text-primary font-medium">سلام، من</span>
                <h1 className="text-primary text-3xl font-bold mt-6">مهران محمودی</h1>
                <div className="text-white text-xl font-medium mt-2">
                    من&nbsp;
                    <span className="text-primary text-2xl font-bold inline">برنامه نویس</span>&nbsp;
                    فرانت اند هستم
                </div>
                <p className="text-white text-base font-medium mt-4 lg:mt-6">
                    با بیش از 5 سال تجربه در توسعه و بازطراحی اپلیکیشن‌های وب مقیاس‌پذیر. تمرکز اصلی بر Nuxt.js، SSR، معماری کامپوننت‌محور و بهینه‌سازی عملکرد است. تجربه تحلیل کدبیس‌های قدیمی، اتخاذ تصمیم‌های فنی برای افزایش سرعت، سئو و قابلیت توسعه، و پیاده‌سازی راهکارهایی که منجر به بهبود محسوس تجربه کاربری و نتایج Lighthouse شده‌اند. توانمند در همکاری بین‌تیمی و درک نیازهای بک‌اند در پروژه‌های داده‌محور.
                </p>
                <ul className="mt-4 flex items-start flex-wrap gap-4 lg:gap-6 *:text-primary *:border *:border-primary *:flex *:items-center *:justify-center *:size-14 *:rounded-full *:relative *:overflow-hidden *:before:absolute *:before:content-[''] *:before:size-8 *:before:rounded-full *:before:bg-primary *:before:blur-xl">
                    <li>
                        <a href="https://wa.me/989307065673?text=سلام" title="واتس اپ" target="_blank" className="relative z-10">
                            <svg className="size-7">
                                <use href="#svg-whatsapp" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="tel:09027658338" title="تماس" className="relative z-10">
                            <svg className="size-7">
                                <use href="#svg-phone" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="flex items-center gap-4 mt-4 lg:mt-8">
                    <button type="button" role="button" className="c-btn btn-primary-fill btn-md">
                        <span>نمونه کار ها</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;
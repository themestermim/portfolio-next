import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="py-12 flex flex-col gap-4 lg:items-center lg:flex-row-reverse lg:gap-8">
            <div className="w-full flex justify-center relative lg:w-auto lg:px-10 lg:flex-none before:absolute before:content-[''] before:size-48 before:bg-primary/75 before:rounded-full before:top-1/2 before:-translate-y-1/2 before:blur-[7rem]">
                <div className="border-4 border-primary rounded-full p-1 relative z-10">
                    <div className="size-40 flex-none overflow-hidden rounded-full lg:size-64">
                        <Image src="/assets/img/mehran-mahmoudi.png" alt="مهران محمودی" className="size-full object-cover" width="256" height="256" />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col lg:w-auto lg:flex-1">
                <h1 className="text-primary text-3xl font-bold">مهران محمودی</h1>
                <div className="text-white text-xl font-medium mt-2">
                    من&nbsp;
                    <span className="text-primary text-2xl font-bold inline">برنامه نویس</span>&nbsp;
                    فرانت اند هستم
                </div>
                <p className="text-white text-base font-medium mt-4 lg:mt-6">
                    Front-End Developer با بیش از 5 سال تجربه در توسعه و بازطراحی اپلیکیشن‌های وب مقیاس‌پذیر. تمرکز اصلی بر Nuxt.js، SSR، معماری کامپوننت‌محور و بهینه‌سازی عملکرد است. تجربه تحلیل کدبیس‌های قدیمی، اتخاذ تصمیم‌های فنی برای افزایش سرعت، سئو و قابلیت توسعه، و پیاده‌سازی راهکارهایی که منجر به بهبود محسوس تجربه کاربری و نتایج Lighthouse شده‌اند. توانمند در همکاری بین‌تیمی و درک نیازهای بک‌اند در پروژه‌های داده‌محور.
                </p>
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
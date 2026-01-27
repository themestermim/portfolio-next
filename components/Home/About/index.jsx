import React from "react";

const About = () => (
    <div className="py-8">
        <h2 className="text-center relative font-bold text-2xl unique-title">درباره من</h2>

        <section className="mx-auto w-full max-w-2xl rounded-xl p-4 mt-6 bg-secondary text-accent text-base">
            <div className="space-y-4">
                <p>
                    من یک Front-End Developer هستم با تمرکز روی توسعه اپلیکیشن‌های وب مقیاس‌پذیر، سریع و قابل نگهداری. بیش از ۵ سال تجربه دارم در بازنویسی و توسعه فرانت‌اند پروژه‌های واقعی، از سیستم‌های محتوایی WordPress تا اپلیکیشن‌های مبتنی بر Nuxt.js و SSR.
                </p>

                <p>
                    تمرکز اصلی من فقط پیاده‌سازی UI نیست؛ بلکه تصمیم‌گیری فنی، بهینه‌سازی Performance، سئو فنی و ساختاردهی درست کدبیس است. در پروژه‌های مختلف مسئول تحلیل کدهای قدیمی، طراحی ساختار جدید، و بهبود تجربه کاربری و سرعت صفحات بوده‌ام؛ به‌طوری که در چند پروژه امتیاز PageSpeed از حدود ۵۰ به بالای ۹۰ رسیده است.
                </p>

                <p>
                    در کنار فرانت‌اند، درک مناسبی از بک‌اند (Laravel، API Design) دارم و همکاری نزدیک با تیم بک‌اند را بخشی از کیفیت نهایی محصول می‌دانم. هدف من ساخت محصولاتی است که 
                    &nbsp;<span className="font-medium">هم برای کاربر سریع و ساده باشند، هم برای تیم توسعه قابل توسعه در آینده</span>.
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 *:space-y-1.5">
                <ul>
                    <li>
                        <span className="font-medium">نام:</span>
                        <span>مهران محمودی</span>
                    </li>
                    <li>
                        <span className="font-medium">تجربه:</span>
                        <span>+۵ سال</span>
                    </li>
                    <li>
                        <span className="font-medium">استان:</span>
                        <span>البرز</span>
                    </li>
                </ul>

                <ul>
                    <li>
                        <span className="font-medium">ایمیل:</span>
                        <a href="mailto:themestermim@gmail.com" className="underline underline-offset-4 cursor-pointer">themestermim@gmail.com</a>
                    </li>
                    <li>
                        <span className="font-medium">تماس:</span>
                        <a href="tel:+989027658338" className="cursor-pointer">۰۹۰۲۷۶۵۸۳۳۸</a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
)

export default About;
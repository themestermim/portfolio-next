import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const data = await req.json();

        // 1️⃣ اعتبارسنجی اولیه سمت سرور
        if (!data.name || data.name.length < 3) {
            return new Response(JSON.stringify({ error: "نام معتبر نیست" }), { status: 400 });
        }
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            return new Response(JSON.stringify({ error: "ایمیل معتبر نیست" }), { status: 400 });
        }

        // 2️⃣ ساخت متن ایمیل
        const emailText = `
      Name: ${data.name}
      Email: ${data.email}
      Subject: ${data.subject || "-"}
      Message: ${data.description || "-"}
    `;

        // 3️⃣ کانفیگ nodemailer
        const transporter = nodemailer.createTransport({
            host: "mail.mammut-construction.com", // هاست ایمیل
            port: 587,
            secure: false,
            auth: {
                user: "mahmoudi.m@mammut-construction.com",
                pass: "Mm123456!@#",
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <mahmoudi.m@mammut-construction.com>`,
            to: "themestermim@gmail.com", // ایمیلی که میخوای دریافت کنه
            subject: data.subject || "New Contact Form Submission",
            text: emailText,
        });

        return new Response(JSON.stringify({ message: "ایمیل ارسال شد" }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "مشکل در ارسال ایمیل" }), { status: 500 });
    }
}

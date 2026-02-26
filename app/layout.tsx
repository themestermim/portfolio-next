import './globals.css'
import type { Metadata } from 'next'
import Header from "@/components/Header/header";
import SharedSvgs from "@/components/Svgs/Shared";

export const metadata: Metadata = {
    title: 'مهران محمودی - برنامه نویس ارشد',
    description: 'با بیش از 5 سال تجربه در توسعه و بازطراحی اپلیکیشن‌های وب مقیاس‌پذیر.',
    icons: {
        icon: [
            { url: '/favicon.svg' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180' },
        ],
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fa">
            {/* className='pt-12' */}
            <body>
                <SharedSvgs />
                <Header />
                {children}
            </body>
        </html>
    )
}

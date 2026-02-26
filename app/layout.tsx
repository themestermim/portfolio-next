import './globals.css'
import type { Metadata } from 'next'
import Header from "@/components/Header/header";
import SharedSvgs from "@/components/Svgs/Shared";

export const metadata: Metadata = {
  title: 'مهران محمودی - برنامه نویس ارشد',
  description: 'با بیش از 5 سال تجربه در توسعه و بازطراحی اپلیکیشن‌های وب مقیاس‌پذیر.',
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

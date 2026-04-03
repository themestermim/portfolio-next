import { getProjects } from "@/lib/api";
import HomeWrapper from "@/components/Home/HomeWrapper";

export default async function HomePage() {
    
    const projectsList = await getProjects();
    
    return (
        <HomeWrapper projects={projectsList} />
    )
}

export const metadata = {
  title: "مهران محمودی | رزومه آنلاین",
  description: "لیست پروژه‌های انجام شده و نمونه‌کارها",
};
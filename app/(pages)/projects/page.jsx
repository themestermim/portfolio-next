import { getProjects, getProjectCategories } from "@/lib/api";
import ProjectsWrapper from "@/components/Projects/ProjectsWrapper";

export default async function ProjectsPage({ searchParams }) {
    
    const categoriesParam = searchParams?.cat || "";

    const projectsList = await getProjects(categoriesParam);
    const categoriesList = await getProjectCategories();
    
    return (
        <ProjectsWrapper projects={projectsList} categories={categoriesList} />
    )
}

export const metadata = {
  title: "لیست پروژه ها",
  description: "لیست پروژه‌های انجام شده و نمونه‌کارها",
};
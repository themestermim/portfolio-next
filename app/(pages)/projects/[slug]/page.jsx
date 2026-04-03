import { getProject } from "@/lib/api";
import ProjectWrapper from "@/components/Project/ProjectWrapper";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getProject(slug);

  const title = data.length > 0 ? data[0]?.title?.rendered : "پروژه یافت نشد";
  const description = data.length > 0 ? data[0]?.content?.rendered : "توضیحات پروژه";

  return {
    title,
    description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const data = await getProject(slug);

  if (!data.length) {
    return <div>پروژه‌ای یافت نشد.</div>;
  }

  return (
    <ProjectWrapper data={data[0]} />
  );
}

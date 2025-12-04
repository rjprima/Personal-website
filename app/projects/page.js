import { client } from "@/sanity/lib/client";
import ProjectPostObj from "@/app/projects/components/ProjectPost";

async function getProjectObj() {
  const query = `*[_type == "personalProject"] {
    title,
    description,
    link,
    image,  
    slug
  }`;

  const projects = await client.fetch(query);
  return projects;
}

export default async function projectposts() {
    const projects = await getProjectObj();

    return (
        <div>
            <div className="absolute left-[calc(50%-300px)] w-[600px] h-full pb-[40.6%] bg-white z-[-2] border border-black"></div>
            <div className="relative flex left-[calc(50%-300px)] w-[600px] justify-around z-[-1] flex-wrap bg-white border border-black">
                {projects.map((project) => (
                <ProjectPostObj key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
}
import { client } from "@/sanity/lib/client";
import ProjectPostObj from "@/app/projects/components/ProjectPost";

async function getProjectObj() {
  const query = `*[_type == "personalProject"] {
    title,
    description,
    link,
    image,  
    id
  }`;

  const projects = await client.fetch(query);
  return projects;
}

export default async function projectposts() {
    const projects = await getProjectObj();

    return (
        <div>
            <p className="fixed top-0 left-[25px] text-[2.7rem] z-11 invisible md:visible text-(--colormode1)"><b>Projects</b></p>
            <div className="absolute left-[calc(50%-300px)] w-[600px] h-full bg-(--colormode1) border border-black"></div>
            <div className="relative flex left-[calc(50%-300px)] w-[600px] justify-center flex-wrap">
                {projects.map((project) => (
                <ProjectPostObj key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
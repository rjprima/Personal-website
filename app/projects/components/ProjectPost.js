import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function ProjectPostObj({ project }) {
    return (
        <div className="centered pb-10 pl-2.5 pr-2.5 pt-2.5 w-[250px] text-center">
            <Link href={project.link}><p className="text-[2rem] text-(--colormode2) hover:underline"><b>{project.title}</b></p></Link>
            <Image
                src={urlFor(project.image).auto("format").size(1920, 1080).url()}
                width={200}
                height={112}
                alt={project.title}
                className="rounded-2xl border border-primary-400"
            />
            <p className="text-(--colormode2)">{project.description}</p>
        </div>
    );
}
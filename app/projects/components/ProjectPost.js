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
        <Link href={project.link} className=" centered pb-10 pl-2.5 pr-2.5 pt-2.5">
            <p>{project.title}</p>
            <Image
                src={urlFor(project.image).auto("format").size(1920, 1080).url()}
                width={200}
                height={170}
                alt={project.title}
                className="rounded-2xl border border-primary-400"
            />
            <p>{project.description}</p>
        </Link>
    );
}
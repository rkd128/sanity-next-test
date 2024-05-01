import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image"
import Link from "next/link";

type Props = {
  params: { project: string }
}

export default async function Showcase({ params }: Props) {
  const slug = params.project;
  const projects = await getProjects();


  return (
    <>
        <section className="bg-offwhite w-full py-20">
            <h1 className="font-gt-pressura text-charcoal text-6xl font-bold mx-auto my-0 text-center">SHOWCASE</h1>
        </section>
        <section className="px-16 py-16 bg-slate-800 w-full">
            <div className="flex flex-col gap-12 over w-full items-center">
                {projects.map((project) => (
                project.showcase?
                    <Link href={`/showcase/${project.slug}`} key={project.name} 
                    className="rounded-2.5xl overflow-hidden shadow-lg w-full h-full max-h-620 max-w-1100 hover:shadow-2xl hover:scale-105 transition duration-200 ease-out active:scale-100"
                    >
                        {project.showcaseVideo?
                            <video
                            src={project.showcaseMedia}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className=""
                            /> 
                        :
                            <Image
                            src={project.showcaseMedia}
                            width={800}
                            height={450}
                            layout="responsive"
                            alt={project.name}
                            className="object-center"
                            />
                        }
                    </Link>
                :
                    ``
                ))}
            </div>
        </section>
    </>   
)} 
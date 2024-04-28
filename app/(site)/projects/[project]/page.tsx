import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
  <div className="flex flex-col">
    <section>
      {project.thumbnailVideo ? 
        <video
          src={project.thumbnail}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover h-screen w-screen"
        /> 
        :
        <Image
          src={project.thumbnail}
          width={350}
          height={115}
          alt={project.name}
          className="object-cover h-screen"
        />
      }
    </section>

    <section className="pt-16 pb-24 px-5 text-charcoal">
      <div>
        <h3 className="font-bold text-xl my-3">{project.heroHeader}</h3>
        <div className="text-3.5xl leading-9.5 font-normal mb-4">
          <PortableText value={project.heroSnippet}/>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl my-4">How we helped</h3>
        <div className="text-1 leading-4.5 mb-10">
          <PortableText value={project.howWeHelpedText}/>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl my-4">Services</h3>
        <ul className="font-extralight list-disc ml-5">
          {project.services.map((service, index) => (
            <li key={index} className="text-base">{service}</li>
          ))}
        </ul>
      </div>
    </section>

    <section>
      {project.mediaFiles.map((media, index) => (
        media.isVideo ? 
        <div key={index}>
          <video
            muted
            autoPlay
            playsInline
            loop
            src={media.url}
            className="object-cover w-full max-h-96"
          />
        </div>
        :
        <div key={index}>
          <Image
            src={media.url}
            width={350}
            height={115}
            alt={project.name}
            className="object-cover w-full"
          />
        </div>

      ))}
    </section>
  </div>)
} 
import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col items-center">
      <div className="p-10 h-auto relative">
        <video className="relative rounded-3xl shadow-xl" src="https://underexposed.imgix.net/2023/08/Underexposed_Showreel-2023_Desktop_mid.mp4" playsInline loop muted autoPlay>
        </video>

      </div>
      
      <div className="p-10 max-w-6xl">

        <h1 className="text-7xl font-extrabold">
        WE BUILD <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">4 BRANDS</span> THAT CONNECT YOUR IDEAS TO THE WORLD
        
        </h1>
        <p className="mt-3 text-xl text-gray-600">We’re a brand and digital studio who partner with people who find truly better ways of doing things.</p>
        <h2 className="mt-24 font-bold text-gray-700 text-3xl">Our Work</h2>

        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="rounded-lg p-3 shadow-md hover:shadow-2xl hover:scale-105 hover:border-blue-500 transition">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  )

}
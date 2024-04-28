import { getProjects, getServices } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();
  const services = await getServices();


  return (
    <div id="wrapper">
        {/* HERO */}
        <section className="hero h-auto lg:pt-36 relative bg-white-rock">
          {/* Hero Content */}
          <div className="top-0 h-full w-full lg:grid lg:grid-rows-2 pt-10">
            {/* Hero Text Content */}
              <div className="sticky top-10 flex flex-col gap-14 items-center justify-center px-4">
                <Link href="/" className="max-lg:block hidden self-start">
                  <Image src="/logo.svg" alt="Underexposed Logo" width={178} height={117}/>
                </Link>
                <h1 className="max-w-4xl text-4.5xl leading-11 md:text-7xl xl:text-8xl text-black">
                  We build brands that connect your ideas to the world
                </h1>
              </div>
            {/* Video */}
            <div className="hero-video hidden max-lg:block h-mobile-video">
              <video className="h-full w-screen object-cover" src="https://underexposed.imgix.net/2023/08/Underexposed_Showreel-2023_Mobile-1.mp4" playsInline loop muted autoPlay></video>
            </div>
            {/* Client Logos -- Desktop Only */}
              <div className="max-lg:hidden w-full self-end overflow-hidden">
                <div className="flex gap-2 justify-center">
                  {projects.map((project) => (
                    <div className="relative" key={project._id}>
                        <Image className="client-icon min-w-28"
                          src={project.clientCardColour} 
                          key={project._id} 
                          alt={project.name} 
                          width={112} 
                          height={112} 
                          />
                    </div>
                  ))}
                </div>

              </div>
          </div>
          
        </section>

      {/* Learn About Us */}
      <section className=" p-5 py-14 ">
        <div className="max-lg:flex max-lg:flex-col max-lg:max-w-3xl grid grid-cols-2 items-center justify-center gap-10 max-w-7xl mx-auto my-0">
          <Image src="https://cdn.sanity.io/images/rxcpny8a/production/40f1510c05bac60c17ed71b2644577fe2b8239a7-2218x1254.gif" alt="" width={350} height={198} className="rounded-2.5xl w-full justify-self-center"/>
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-3.5xl text-charcoal leading-9.5">We’re a brand and digital studio who partner with people who find truly better ways of doing things.</h2>
            <a href="" className="px-7 py-5 bg-ultramarine hover:bg-spring-green transition ease-in-out duration-200 text-xl text-white font-gt-pressura rounded-full">LEARN ABOUT US</a>
          </div>
        </div>

      </section>

      
      {/* Client Reels */}
      <section className="lg:hidden">
        <div>
          <h3 className="font-roboto text-xl leading-9.5 text-charcoal font-extrabold text-center mb-5">Ideas we&apos;ve helped bring to life</h3>
        </div>

        <div className="w-screen">
          <div className="flex flex-col gap-1.5">
            <div className="xl:hidden w-full flex justify-center overflow-hidden">
              <div className="scrolling-right gap-1 w-screen">
                {[...projects.slice(0,8), ...projects.slice(0,8)].map((project, index) => (
                  <div className="relative" key={`${project._id}-${index}`}>
                    <Image className="client-icon min-w-28"
                      src={project.clientCardColour} 
                      alt={project.name} 
                      width={112} 
                      height={112} 
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:hidden w-full flex justify-center overflow-hidden">
              <div className="scrolling-left gap-1 w-screen">
                {[...projects.slice(8), ...projects.slice(8)].map((project, index) => (
                  <div className="relative" key={`${project._id}-${index}`}>
                    <Image className="client-icon min-w-28"
                      src={project.clientCardColour} 
                      alt={project.name} 
                      width={112} 
                      height={112} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>       

      </section>


      {/* Projects Grid Section */}
      <section className="lg:hidden px-5 ">

        <h2 className="mb-7 text text-gray-700 text-4.5xl text-center mt-14">Our Work</h2>

        <div className="flex flex-col flex-wrap md:flex-row gap-8 max-w-4xl mx-auto">
          {projects.filter(project => project.featured).map((project) => (
            
            <Link href={`/projects/${project.slug}`} key={project._id} className="flex mx-auto my-0 max-w-96">
                <div className="flex flex-col min-w-80">
                  {project.thumbnailVideo ? 
                    <video
                      src={project.thumbnail}
                      className="object-cover w-full h-showcase-thumb rounded-2.5xl"
                      autoPlay
                      loop
                      muted
                      playsInline
                    /> 
                    :
                    <Image
                      src={project.thumbnail}
                      width={350}
                      height={115}
                      alt={project.name}
                      className="object-cover w-full h-showcase-thumb rounded-2.5xl"
                    />
                  }
                  <div className="flex flex-wrap gap-1 mt-4">
                    <span className="font-gt-pressura border border-white-rock px-3 py-1 rounded-full">{project.category.toUpperCase()}</span>
                    {project.services.map((service, index) => (
                      <span key={index} className="font-gt-pressura text-base bg-white-rock px-3 py-1.5 rounded-full">{service.toUpperCase()}</span>
                    ))}
                    {project.award ? <span className="font-gt-pressura border border-white-rock px-3 py-1 rounded-full">AWARD WINNING</span> : ""}
                  </div>
                </div>
            </Link>
            
          ))}
        </div>

      </section>

      <section className="w-screen pb-32">
        <h2 className="mb-7 text text-gray-700 text-4.5xl text-center mt-14">Our Services</h2>
        <div className="flex gap-2.9 overflow-scroll">
          {services.map((service, index) => (
            <div key={index} className=" object-cover flex flex-col gap-4 items-center">
              <div className="relative w-72 h-72">
                {service.video ? 
                  <video src={service.media} muted playsInline autoPlay loop className="object-cover w-full h-full rounded-2.5xl"/>
                  
                  :
                  <img src={service.media} alt={service.name} className="object-cover rounded-2.5xl" />
                }
                <p className="absolute top-0 w-full h-full text-2.5xl text-charcoal font-serif text-center font-bold leading-8 pl-11 pr-8 pt-20 pb-16">{service.overlay}</p>
              </div>
              <span key={index} className="font-gt-pressura text-xl">{service.name}</span>

            </div>
          ))}
        </div>
      </section>
    </div>
  )

}
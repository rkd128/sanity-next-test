import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Service } from "@/types/Service"

const client = createClient(clientConfig);

export async function getProjects(): Promise<Project[]> {
   return client.fetch(
        groq`*[_type == "projects"]{
            _id,
            _createdAt,
            name,
            featured,
            "showcase": showcase.showcaseEnable,
            "showcaseVideo": showcase.showcaseVideoMode,
            "showcaseMedia": showcase.showcaseMedia.asset->url,
            award,
            pencil,
            "thumbnail": thumbnail.asset->url,
            category,
            "thumbnailVideo": thumbnail.type,
            "clientCard": clientCard.asset->url,
            "clientCardColour": clientCardColour.asset->url,
            "howWeHelpedText": howWeHelped.howWeHelpedText,
            "servicesProvided": howWeHelped.servicesProvided,
            "slug": slug.current,
            url,
            content
        }`,{},
        {
          // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
          cache: 'no-cache',
        },
    )
}

export async function getProject(slug: string): Promise<Project> {
    return client.fetch(
        groq`*[_type == "projects" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            featured,
            "showcase": showcase.showcaseEnable,
            "showcaseVideo": showcase.showcaseVideoMode,
            "showcaseMedia": showcase.showcaseMedia.asset->url,
            award,
            pencil,
            "thumbnail": thumbnail.asset->url,
            "thumbnailVideo": thumbnail.type,
            "clientCard": clientCard.asset->url,
            "clientCardColour": clientCardColour.asset->url,
            "heroHeader": heroText.heroHeader,
            "howWeHelpedText": howWeHelped.howWeHelpedText,
            "servicesProvided": howWeHelped.servicesProvided,
            "heroSnippet": heroText.heroSnippet,
            "slug": slug.current,
            "mediaFiles": mediaFiles[]{
                "url": asset->url,
                "isVideo": type
            },
            url
        }`,
        { slug },{
            // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
            cache: 'no-cache',
          },
    )
}

export async function getPages(): Promise<Page[]> {
    return client.fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`,{},{
            // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
            cache: 'no-cache',
          },
        
    )
}
export async function getPage(slug: string): Promise<Page> {
    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug },{
            // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
            cache: 'no-cache',
          },
    )
}

export async function getServices(): Promise<Service[]> {
    return client.fetch(
        groq`*[_type == "service"]{
            _id,
            _createdAt,
            title,
            name,
            "media": media.asset->url,
            "video": media.type,
            "overlay": media.textOverlay,
            "slug": slug.current
        }`,{},{
            // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
            cache: 'no-cache',
          },
        
    )
}
export async function getService(slug: string): Promise<Service> {
    return client.fetch(
        groq`*[_type == "service" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            name,
            "media": media.asset->url,
            "video": media.type,
            "overlay": media.textOverlay,
            content
        }`,
        { slug },{
            // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
            cache: 'no-cache',
          },
    )
}

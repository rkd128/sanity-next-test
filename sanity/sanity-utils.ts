import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

const client = createClient(clientConfig);

export async function getProjects(): Promise<Project[]> {
   return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
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
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
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


import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  colour: string;
  url: string;
  content: PortableTextBlock[];
}
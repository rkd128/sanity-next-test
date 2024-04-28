import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    heroHeader: string;
    award: boolean;
    howWeHelpedText: PortableTextBlock[];
    thumbnail: string;
    thumbnailVideo: boolean;
    services: string[];
    featured: boolean;
    category: string;
    clientCard: string;
    clientCardColour: string;
    slug: string;
    url: string;
    heroSnippet: PortableTextBlock[];
    mediaFiles: { url: string, isVideo: boolean }[];
};

import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    heroHeader: string;
    featured: boolean;
    showcase: boolean;
    showcaseVideo: boolean;
    showcaseMedia: string;
    award: boolean;
    pencil: boolean;
    howWeHelpedText: PortableTextBlock[];
    thumbnail: string;
    thumbnailVideo: boolean;
    servicesProvided: string[];
    category: string;
    clientCard: string;
    clientCardColour: string;
    slug: string;
    url: string;
    heroSnippet: PortableTextBlock[];
    mediaFiles: { url: string, isVideo: boolean }[];
};

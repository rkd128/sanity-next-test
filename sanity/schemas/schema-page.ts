import { defineArrayMember, defineField, defineType } from "sanity";

const page = {
    name: "page",
    title: "Pages",
    type: 'document',
    groups: [
      {name: 'page', title: 'Page'},
      {name: 'seo', title: 'SEO'}
    ],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'seo',
        group: 'seo'
      },
    ],
  };
  
export default page;
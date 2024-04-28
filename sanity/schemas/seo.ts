// schemas/richText.ts
const seoSchema = {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    group: 'seo',
    options: {collapsible: true, collapsed: false},
    fields: [
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            options: {maxLength: 60},
        },
        {
            name: 'seoDecription',
            title: 'SEO Description',
            type: 'string',
            options: {maxLength: 170},
        },
        {
            name: 'seoImage',
            title: 'SEO Image',
            type: 'image',
            options: {hotspot: true},
        },

    ]
};

export default seoSchema
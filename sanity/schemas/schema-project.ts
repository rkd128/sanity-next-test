import { ProjectsIcon } from "@sanity/icons";

const project = {
    name: 'projects',
    title: 'Projects',
    icon: ProjectsIcon,
    type: 'document',
    groups: [
        {
            name: 'page',
            title: 'Page Content'
        },
        {
            name: 'seo',
            title: 'SEO'
        },
    ],
    fields: [
        // Client
        {
            name: 'name',
            title: 'Name',
            description: 'Client name',
            type: 'string'
        },
        // Slug
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {title: 'Athletic Apparel', value: 'Athletic Apparel'},
                    {title: 'Automotive', value: 'Automotive'},
                    {title: 'Cat Food', value: 'Cat Food'},
                    {title: 'Sleep', value: 'Sleep'},
                    {title: 'Drink', value: 'Drink'},
                    {title: 'Pet', value: 'Pet'},
                ]
            }
        },
        {
            name: 'featured',
            title: 'Featured',
            description: 'Enable to feature this client on the home page.',
            type: 'boolean'
        },
        {
            name: 'award',
            title: 'Award Winning',
            description: 'Enable if this project won something fancy, or a pencil.',
            type: 'boolean',
        },
        {
            name: 'pencil',
            title: 'Pencil ✏️',
            description: 'Did we win a ✏️?',
            type: 'boolean'
        },
        {
            name: 'showcase',
            title: 'Showcase',
            description: 'Enable to show client on main Showcase page.',
            type: 'object',
            fields: [
                {
                    name: 'showcaseEnable',
                    title: 'Showcase',
                    type: 'boolean',
                },
                {
                    name: 'showcaseMedia',
                    title: 'Showcase Backdrop',
                    type: 'file',
                },
                {
                    name: 'showcaseVideoMode',
                    title: 'Showcase Video Mode',
                    type: 'boolean',
                },

            ]
        },
        // Client Cards
        {
            name: 'clientCard',
            title: 'Client Card (Basic)',
            type: 'image'
        },
        {
            name: 'clientCardColour',
            title: 'Client Card (Colour)',
            type: 'image'
        },
        {
            name: 'thumbnail',
            title: 'Home Page Thumbnail',
            description: 'Images or Videos welcome.',
            type: 'file',
            fields: [
              {
                name: 'type',
                title: 'Is this a Video?',
                description: 'Enable for super-special video mode on Home Page.',
                type: 'boolean',
              }
            ]
        },
                

        // Header
        {
            name: 'heroText',
            title: 'Hero Text',
            type: 'object',
            group: 'page',
            fields: [
                {
                    name: 'heroHeader',
                    title: 'Hero Header',
                    type: 'string',
                },
                {
                    name: 'headerColour',
                    title: 'Header Colour',
                    type: 'color'
                },
                {
                
                    name: 'heroSnippet',
                    title: 'Hero Snippet',
                    type: 'array',
                    of: [{type: 'block'}]
                },
                {
                    name: 'snippetColour',
                    title: 'Snippet Colour',
                    type: 'color'
                }
            ],
        },
        // How We Helped
        {
            name: 'howWeHelped',
            title: 'How We Helped',
            type: 'object',
            fields: [
                {
                    name: 'howWeHelpedText',
                    title: 'How We Helped Text',
                    description: "Description of how we helped the client",
                    type: 'array',
                    of: [{type: 'block'}, {type: 'figure'}]
                },
                {
                    name: 'servicesProvided',
                    title: 'Services Provided',
                    description: "List of services provided to the client",
                    type: 'array',
                    of: [{
                        type: 'string',
                        options: {
                            list: [
                                {title: '3D', value: '3D'},
                                {title: 'Animation', value: 'Animation'},
                                {title: 'Art Direction', value: 'Art Direction'},
                                {title: 'Branding', value: 'Branding'},
                                {title: 'Illustration', value: 'Illustration'},
                                {title: 'Naming', value: 'Naming'},
                                {title: 'Packaging', value: 'Packaging'},
                                {title: 'Strategy', value: 'Strategy'},
                                {title: 'UI/UX', value: 'UI/UX'},
                                {title: 'Website Build', value: 'Website Build'},
                            ]
                        }

                    }]
                },
            ]
        },

        {
            name: 'mediaFiles',
            title: 'Media Files (Deprecated)',
            description: "Visual content for the project",
            type: 'array',
            of: [
                {
                    name: 'item',
                    title: 'Item',
                    type: 'file',
                    fields: [
                      {
                        name: 'type',
                        title: 'Is this a Video?',
                        description: 'Enable for super-special video mode.',
                        type: 'boolean',
                      }
                    ]
                },
            ],
            preview: {
                select: {
                    title: 'item',
                    media: 'file'
                }
            }
        },
        
        // Quote
        {
            name: 'quote',
            title: 'Quote',
            type: 'object',
            // options: {collapsible: true, collapsed: true},
            fieldsets: [
                {
                    name: 'quoteSection',
                    title: 'Client Quote',
                },
            ],
            fields: [
                {
                    name: 'author',
                    title: 'Author',
                    description: "Who said the thing?",
                    type: 'string',
                },
                {
                    name: 'quoteText',
                    title: 'Quote Text',
                    description: "The thing",
                    type: 'array',
                    of: [{type: 'block'}]
                },
            ],
        },
        // URL
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        // Page Body Content
        // {
        //     name: 'body',
        //     title: 'Body',
        //     type: 'array',
        //     of: [{type: 'block'}, {type: 'image'}, {type: 'figure'}, {type:'file'}]
        // },
        // SEO
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo'
        },
        {
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'pageBuilder',
            group: 'page'
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'clientCardColour',
        }
    }
}

export default project;
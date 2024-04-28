import { ProjectsIcon } from "@sanity/icons";

const project = {
    name: 'projects',
    title: 'Projects',
    icon: ProjectsIcon,
    type: 'document',
    groups: [
        {
            name: 'media',
            title: 'Media'
        },
        {
            name: 'seo',
            title: 'SEO'
        },
    ],
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {title: 'Athletic Apparel', value: 'Athletic Apparel'},
                    {title: 'Automotive', value: 'Automotive'},
                    {title: 'Cat Foot', value: 'Cat Food'},
                    {title: 'Sleep', value: 'Sleep'}
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
            type: 'boolean'
        },
        // Client Cards
        {
            name: 'clientCard',
            title: 'Client Card',
            type: 'image'
        },
        {
            name: 'clientCardColour',
            title: 'Client Card Colour',
            type: 'image'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
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
        // Header
        {
            name: 'heroText',
            title: 'Hero Text',
            type: 'object',
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
            options: {collapsible: true, collapsed: true},
            fields: [
                {
                    name: 'howWeHelpedText',
                    title: 'How We Helped Text',
                    description: "Description of how we helped the client",
                    type: 'array',
                    of: [{type: 'block'}, {type: 'figure'}]
                },
                {
                    name: 'services',
                    title: 'Services',
                    description: "List of services provided to the client",
                    type: 'array',
                    of: [{type: 'string'}]
                },
            ]
        },

        {
            name: 'mediaFiles',
            title: 'Media Files',
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
            ]
        },
        // Media
        // {
        //     name: 'media',
        //     title: 'Media',
        //     type: 'object',
        //     options: {collapsible: true, collapsed: false},
        //     group: 'media',
        //     fields: [
        //         // Images
        //         {
        //             name: 'heroImages',
        //             title: 'Hero Images',
        //             type: 'object',
        //             options: {collapsible: true, collapsed: false, columns: 3},
        //             fields: 
        //             [
        //                 {
        //                     name: 'heroLg',
        //                     title: 'Hero Large',
        //                     type: 'image',
        //                     options: {hotspot: true},
                            
        //                 },
        //                 {
        //                     name: 'heroMd',
        //                     title: 'Hero Medium',
        //                     type: 'image',
        //                     options: {hotspot: true},
        //                 },
        //                 {
        //                     name: 'heroSm',
        //                     title: 'Hero Small',
        //                     type: 'image',
        //                     options: {hotspot: true},
        //                 }
        //             ]
        //         },
        //         // Videos
        //         {
        //             type: 'object',
        //             name: 'heroVideos',
        //             options: {columns: 2},
        //             fields: [
        //                 {
        //                     name: 'videoDesktop',
        //                     title: 'Desktop',
        //                     type: 'file',
        //                 },
        //                 {
        //                     name: 'videoMobile',
        //                     title: 'Mobile',
        //                     type: 'file',
        
        //                 }
                        
        //             ],
        //         },
        //     ],
        // },
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
    ],
}

export default project;
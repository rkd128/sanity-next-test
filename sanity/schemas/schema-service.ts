import {SparklesIcon} from '@sanity/icons'

const service = {

    name: 'service',
    title: 'Services',
    type: 'document',
    icon: SparklesIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'media',
            title: 'Media',
            type: 'file',
            fields: [
                {
                    name: 'type',
                    title: 'Is this a video?',
                    description: 'Enable for super-special video mode.',
                    type: 'boolean',
                },
                {
                    name: 'textOverlay',
                    title: 'Text Overlay',
                    type: 'string',
                },
            ]
        },
    ]
    
}

export default service;
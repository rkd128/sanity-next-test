const figureSchema = {
    name: 'figure',
    type: 'object',
    Title: 'Figure',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
    ]
}

export default figureSchema;
import { defineField, defineType } from "sanity";

const quoteType = defineType({
    name: 'quote',
    type: 'object',
    fields: [
        defineField({
            name: 'quoteText',
            type: 'array',
            title: 'Quote Text',
            description: "The thing",
            of: [{type: 'block'}]
        }),
        defineField(
            {
                name: 'author',
                type: 'string',
                title: 'Author',
                description: "Who said the thing?",
            }
        )
    ]
})

export default quoteType

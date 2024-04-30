import { defineArrayMember } from "sanity"

const pageBuilder = {
    name: 'pageBuilder',
        type: 'array',
        title: 'Page builder',
        description: 'Add "items" (Sections) to build the main body of the page!',
        group: 'page',
        of: [
          defineArrayMember({
            name: 'hero',
            type: 'hero',
          }),
          defineArrayMember({
            name: 'textWithIllustration',
            type: 'textWithIllustration',
          }),
          defineArrayMember({
            name: 'gallery',
            type: 'gallery',
          }),
          defineArrayMember({
            name: 'video',
            type: 'video',
          }),
          defineArrayMember({
            name: 'quote',
            type: 'quote',
          }),
          // etc...
        ]
}

export default pageBuilder
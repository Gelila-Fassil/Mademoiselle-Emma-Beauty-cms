import { defineType } from 'sanity'

export default defineType({
    name: 'showcase',
    title: 'Homepage Showcase',
    type: 'document',
    fields: [
        {
            name: 'lipstickImage',
            title: 'Lipstick Section Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'skincareImage',
            title: 'Skincare Section Image',
            type: 'image',
            options: { hotspot: true },
        },
    ],
})
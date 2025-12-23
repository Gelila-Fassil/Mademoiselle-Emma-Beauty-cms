import {defineType} from 'sanity'

export default defineType({
  // The name property is crucial; it's the type identifier used in GROQ queries.
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      description: 'Unique URL path for the product details page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      // Add an accessible alt text field for the image
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Short description of the image for accessibility.',
        },
      ],
      description: 'Upload the main image for this product.',
      validation: (Rule) => Rule.required(),
    },
    {
      // This is the REFERENCE field that connects products to categories
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Select the main category for this product.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in your base currency (e.g., 49.99)',
      // Ensure non-negative prices; keep it optional to avoid breaking existing data
      validation: (Rule) => Rule.min(0),
    },
    {
      name: 'description',
      title: 'Description',
      // 'array' type with a 'block' item is how Sanity handles rich text (Portable Text)
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})
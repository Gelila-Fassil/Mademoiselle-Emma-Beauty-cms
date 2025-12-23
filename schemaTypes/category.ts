import {defineType} from 'sanity'

export default defineType({
  // The name property is crucial; it's the type identifier used in GROQ queries.
  name: 'category',
  title: 'Product Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      description: 'e.g., Women\'s Perfume, Skincare, Makeup',
      validation: (Rule) => Rule.required(),
    },
    {
      // This slug is used by your frontend component's filtering logic (selectedCategorySlug).
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'The URL-friendly identifier for this category.',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
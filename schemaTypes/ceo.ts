import { defineType } from 'sanity'

export default defineType({
  name: 'ceoProfile',
  title: 'CEO Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'highlightQuote',
      title: 'Highlight Quote',
      type: 'text',
      description: 'Short, standout quote from the CEO shown in italics.',
    },
    {
      name: 'intro',
      title: 'Intro Paragraph',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Main Message (use blank lines for new paragraphs)',
      type: 'text',
      rows: 6,
    },
  ],
})


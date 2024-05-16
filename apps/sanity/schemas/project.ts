import {defineArrayMember, defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      description: 'Will be used to generate the URL for this project. Must be unique.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the project.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle of the project. e.g. "Android Application"',
    }),
    defineField({
      name: 'oneLiner',
      title: 'One Liner',
      type: 'string',
      description: 'A one liner describing the project. Displayed on featured projects.',
    }),
    defineField({
      name: 'isResearch',
      title: 'Is Research',
      type: 'boolean',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'projectLinks',
      title: 'Project Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'ProjectLink',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'madeWith',
      title: 'Made With',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          name: 'name',
        }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'Image',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'updated',
      title: 'Updated',
      type: 'date',
    }),
  ],
})

import type { CollectionConfig } from 'payload'

export const Navlinks: CollectionConfig = {
    slug: 'navlink',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'page',
            type: 'relationship',
            relationTo: 'pages',
            required: true,
            hasMany: false,
        },
        {
            name: 'sublinks',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'page',
                    type: 'relationship',
                    relationTo: 'pages',
                    required: true,
                    hasMany: false,
                },
            ],
        },
    ],
}

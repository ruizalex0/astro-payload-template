import type { Block, CollectionConfig } from 'payload'

export const ImageColumn: Block = {
    slug: 'imageColumn',
    admin: {
        disableBlockName: true,
    },
    fields: [
        {
            name: 'images',
            type: 'array',
            fields: [
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
    ],
}

export const GridBlock: Block = {
    slug: 'grid',
    admin: {
        disableBlockName: true,
    },
    fields: [
        {
            name: 'columns',
            type: 'blocks',
            blocks: [ImageColumn],
        },
    ],
}

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'slug',
            type: 'text',
        },
        {
            name: 'content',
            type: 'blocks',
            blocks: [ImageColumn, GridBlock],
        },
    ],
}

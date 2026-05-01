import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Navlinks } from './collections/Navlinks'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    routes: {
        admin: '/',
    },
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Users, Media, Pages, Navlinks],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URL || '',
    }),
    plugins: [
        nestedDocsPlugin({
            collections: ['pages'],
            generateLabel: (_, doc) => String(doc.title),
            generateURL: (docs) =>
                docs.reduce((url, doc) => `${url}/${String(doc.slug)}`, ''),
        }),
    ],
})

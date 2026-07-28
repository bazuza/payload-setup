import type { CollectionConfig } from 'payload'
import { HeroBlock } from '@/blocks/Hero/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'slug',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Use "home" for the homepage.',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [HeroBlock],
      defaultValue: [],
    },
  ],
}

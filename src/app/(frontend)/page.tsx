import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })

  const page = docs[0]

  if (!page) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-400">
          No homepage found. Create a page with slug &#34;home&#34; in the admin.
        </p>
      </main>
    )
  }

  return (
    <main>
      <RenderBlocks blocks={page.blocks} />
    </main>
  )
}

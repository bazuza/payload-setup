import Link from 'next/link'
import type { HeroBlock } from '@/payload-types'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'

export default function HeroBlockComponent({ data }: { data: HeroBlock }) {
  const { title, description, button } = data

  return (
    <section className="flex flex-col items-center gap-6 py-24 text-center">
      <Heading tag="h1" className="text-5xl font-bold">
        {title}
      </Heading>
      {description && (
        <Text size="lg" className="max-w-2xl text-gray-500">
          {description}
        </Text>
      )}
      {button?.label && button?.url && (
        <Link href={button.url}>
          <Button size="lg">{button.label}</Button>
        </Link>
      )}
    </section>
  )
}

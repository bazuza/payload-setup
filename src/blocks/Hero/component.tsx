import Link from 'next/link'
import type { HeroBlock } from '@/payload-types'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'

export default function HeroBlockComponent({ data }: { data: HeroBlock }) {
  const { title, description, button } = data

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col gap-6">
          <Heading tag="h1" className="text-5xl">
            {title}
          </Heading>
          {description && (
            <Text size="lg" breakLine className="max-w-2xl">
              {description}
            </Text>
          )}
          {button?.label && button?.url && (
            <Link href={button.url}>
              <Button size="lg">{button.label}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

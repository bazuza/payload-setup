import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <Heading tag="h1" className="text-4xl font-bold">
        Elucient
      </Heading>
      <Heading className="text-2xl text-gray-500">Default h2 heading</Heading>
      <Heading tag="h3" className="text-xl text-gray-400">
        h3 heading
      </Heading>
      <Text size="subtitle-1">Subtitle 1 text</Text>
      <Text size="lg">Large paragraph text</Text>
      <Text size="sm" tag="span">
        Small span text
      </Text>
      <Text breakLine>{`Line one\nLine two`}</Text>
    </main>
  )
}

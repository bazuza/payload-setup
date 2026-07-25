import { Heading } from '@/components/ui/Heading'
import { Image } from '@/components/ui/Image'
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
      <Image
        src="https://picsum.photos/800/600"
        width={800}
        height={600}
        alt="Placeholder"
        fallback={
          <div className="flex h-[600px] w-[800px] items-center justify-center bg-gray-200 text-gray-400">
            Failed to load
          </div>
        }
      />
    </main>
  )
}

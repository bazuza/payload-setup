import type { Page } from '@/payload-types'
import HeroBlockComponent from './Hero/component'

const availableBlocks = {
  hero: HeroBlockComponent,
}

export function RenderBlocks({ blocks }: { blocks: Page['blocks'] }) {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block, index) => {
        if (!block) return null
        const Block = availableBlocks[block.blockType as keyof typeof availableBlocks]
        if (!Block) return null
        return <Block key={index} data={block as never} />
      })}
    </>
  )
}

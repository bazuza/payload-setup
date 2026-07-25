import { HTMLAttributes } from 'react'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tag?: HeadingTag
}

export function Heading({ tag: Tag = 'h2', children, ...props }: HeadingProps) {
  return <Tag {...props}>{children}</Tag>
}

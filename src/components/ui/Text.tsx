import { HTMLAttributes } from 'react'

type TextTag = 'p' | 'span' | 'strong'
type TextSize = 'lg' | 'sm' | 'subtitle-1' | 'subtitle-2' | 'subtitle-3'

const sizeClasses: Record<TextSize, string> = {
  lg: 'text-lg',
  sm: 'text-sm',
  'subtitle-1': 'text-xl font-semibold',
  'subtitle-2': 'text-lg font-medium',
  'subtitle-3': 'text-base font-medium',
}

interface TextProps extends HTMLAttributes<HTMLElement> {
  tag?: TextTag
  size?: TextSize
  breakLine?: boolean
}

export function Text({
  tag: Tag = 'p',
  size,
  breakLine = false,
  className,
  children,
  ...props
}: TextProps) {
  const classes = [size ? sizeClasses[size] : '', breakLine ? 'whitespace-pre-wrap' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes || undefined} {...props}>
      {children}
    </Tag>
  )
}

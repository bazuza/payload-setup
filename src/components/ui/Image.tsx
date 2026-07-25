'use client'

import NextImage, { ImageProps } from 'next/image'
import { ReactNode, useState } from 'react'

interface Props extends ImageProps {
  fallback?: ReactNode
}

export function Image({ fallback, onError, alt = '', ...props }: Props) {
  const [hasError, setHasError] = useState(false)

  if (hasError && fallback) {
    return <>{fallback}</>
  }

  return (
    <NextImage
      alt={alt}
      onError={(e) => {
        setHasError(true)
        onError?.(e)
      }}
      {...props}
    />
  )
}

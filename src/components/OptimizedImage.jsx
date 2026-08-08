import React from 'react'

export default function OptimizedImage({
  src,
  alt,
  width = 1280,
  height = 853,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  className,
  style,
  onClick,
}) {
  const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp')

  return (
    <picture onClick={onClick}>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        className={className}
        style={style}
      />
    </picture>
  )
}

// Draws an SVG file in the current text color, so it follows light/dark mode and hover colors.
export default function MaskIcon({ src, className = 'h-5 w-5' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        WebkitMask: `url(${src}) center / contain no-repeat`,
        mask: `url(${src}) center / contain no-repeat`,
      }}
    />
  )
}

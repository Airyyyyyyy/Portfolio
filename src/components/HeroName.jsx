// The name, set letter by letter. On load a weight wave runs through it.
// After that it stays still: there is no hover effect.
export default function HeroName({ name }) {
  let i = 0
  const words = name.split(' ')

  return (
    <h1 className="-ml-[0.05em] min-w-0 text-[clamp(3.75rem,15vw,11.5rem)] leading-[0.88] tracking-[-0.035em] lg:text-[min(13vw,10rem)]">
      <span className="sr-only">{name}</span>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <span key={`${word}-${w}`}>
            <span className="inline-block whitespace-nowrap">
              {[...word].map((ch) => {
                const idx = i++
                return (
                  <span key={idx} data-letter className="hero-letter" style={{ '--i': idx }}>
                    {ch}
                  </span>
                )
              })}
            </span>
            {w < words.length - 1 && ' '}
          </span>
        ))}
      </span>
    </h1>
  )
}

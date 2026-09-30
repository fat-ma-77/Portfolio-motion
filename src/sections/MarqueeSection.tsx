import { useEffect, useRef, useState } from 'react'
import { marqueeImages } from '../data/content'

function MarqueeRow({
  images,
  offset,
  direction,
}: {
  images: string[]
  offset: number
  direction: 'left' | 'right'
}) {
  const tiles = [...images, ...images, ...images]
  const translate =
    direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div
      className="flex w-max gap-3"
      style={{
        transform: `translateX(${translate}px)`,
        willChange: 'transform',
      }}
    >
      {tiles.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      const next =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(next)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const row1 = marqueeImages.slice(0, 11)
  const row2 = marqueeImages.slice(11)

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-hidden="true"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={row1} offset={offset} direction="right" />
        <MarqueeRow
          images={row2.length ? row2 : marqueeImages.slice(0, 10)}
          offset={offset}
          direction="left"
        />
      </div>
    </section>
  )
}

import FadeIn from '../components/FadeIn'
import { packages } from '../data/content'

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="mx-auto max-w-5xl">
        {packages.map((item, index) => (
          <FadeIn key={item.number} delay={index * 0.1} y={30}>
            <div
              className={`flex flex-col gap-4 border-[#0C0C0C]/15 py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:gap-12 md:py-12 ${
                index < packages.length - 1 ? 'border-b' : ''
              } ${index === 0 ? 'border-t' : ''}`}
            >
              <span
                className="shrink-0 font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </span>

              <div className="flex flex-1 flex-col gap-3 pt-2 sm:pt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="font-black text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

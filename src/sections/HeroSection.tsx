import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import Tilt3D from '../components/Tilt3D'
import { asset, hero, navLinks, site } from '../data/content'

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip" id="home">
      <FadeIn delay={0} y={-20} className="relative z-20">
        <nav>
          <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      <div className="relative z-20 mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap px-2 text-[clamp(2.4rem,9.5vw,8.5rem)] font-black uppercase leading-none tracking-tight sm:text-[clamp(2.8rem,10vw,9rem)] md:text-[clamp(3rem,10.5vw,9.5rem)]">
            {hero.heading}
          </h1>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {hero.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="pointer-events-auto"
        >
          <Tilt3D className="relative" maxTilt={16}>
            <div
              className="relative overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
              style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
            >
              <img
                src={site.portrait}
                alt={site.name}
                className="w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/45 via-transparent to-transparent" />
            </div>

            <img
              src={asset('assets/images/rotate-img.png')}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 top-8 w-24 animate-spin-slow sm:-right-8 sm:top-10 sm:w-28 md:-right-10 md:w-32"
              style={{ transform: 'translateZ(80px)' }}
            />
          </Tilt3D>
        </Magnet>
      </FadeIn>
    </section>
  )
}

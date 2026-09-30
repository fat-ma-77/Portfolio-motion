import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import { about, decorativeImages } from '../data/content'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      {decorativeImages.map((image) => (
        <FadeIn
          key={image.src}
          delay={image.delay}
          duration={0.9}
          x={image.x}
          y={0}
          className={`${image.className} pointer-events-none`}
        >
          <img src={image.src} alt="" className="w-full select-none" />
        </FadeIn>
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-[560px] flex-col items-center text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="mt-10 flex w-full flex-col items-center gap-16 sm:mt-14 sm:gap-20 md:mt-16 md:gap-24">
          <AnimatedText
            text={about.text}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          />
          <ContactButton />
        </div>
      </div>
    </section>
  )
}

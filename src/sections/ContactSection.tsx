import { Facebook, Github, Linkedin } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { site } from '../data/content'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16"
          style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <FadeIn delay={0.1} y={20}>
          <p
            className="max-w-xl font-light text-[#D7E2EA]/80"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            Ready to build something unforgettable? Reach out on social and
            let&apos;s turn your ideas into a polished digital experience.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div className="flex items-center gap-6">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-opacity hover:opacity-70"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-70"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-opacity hover:opacity-70"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

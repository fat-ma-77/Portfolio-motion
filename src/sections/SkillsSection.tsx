import FadeIn from '../components/FadeIn'
import { skillCategories } from '../data/content'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.title} delay={index * 0.08} y={24}>
            <div className="h-full rounded-[28px] border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 p-6 sm:rounded-[36px] sm:p-8">
              <h3
                className="mb-5 font-medium uppercase tracking-wide text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
              >
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#D7E2EA]/25 px-4 py-2 text-sm font-light uppercase tracking-wider text-[#D7E2EA] sm:text-base"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

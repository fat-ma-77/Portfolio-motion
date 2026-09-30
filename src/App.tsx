import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import SkillsSection from './sections/SkillsSection'

export default function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}

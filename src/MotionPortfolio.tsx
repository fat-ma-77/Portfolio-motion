import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, ArrowDown, Play, X, Github, Linkedin, Menu, Check, Copy } from 'lucide-react'
import { asset, about, skillCategories } from './data/content'

const filmUrl = asset('motion/fatima-brand-film.mp4?v=motion-2')

const projects = [
  { name: 'Benadir Innovation Hub', category: 'Innovation', description: 'A digital home for Benadir University’s innovation initiatives, programs and technology advancements.', image: 'bu.png', tech: 'React / Tailwind CSS / Node.js / MongoDB', url: 'https://ihub.bu.edu.so/' },
  { name: 'Baraarug Consulting Firm', category: 'Business', description: 'Business solutions, training programs and organizational development, brought together in one modern experience.', image: 'brarug.png', tech: 'React / TypeScript / Tailwind CSS / Next.js', url: 'https://bcf.so/' },
  { name: 'Almas Training & Consultancy', category: 'Education', description: 'A platform connecting people with courses, partners and professional development opportunities.', image: 'almas.png', tech: 'React / TypeScript / Tailwind CSS / Next.js', url: 'https://www.almasltd.com/' },
  { name: 'SOR Institute', category: 'Education', description: 'Programs, services and community learning resources, designed to be easy to discover.', image: 'sor.png', tech: 'React / TypeScript / Tailwind CSS / Next.js', url: 'https://www.sorinstitute.org/' },
  { name: 'Benadir University', category: 'Education', description: 'An accessible gateway to academic programs, student resources and campus updates.', image: 'benadir-university.png', tech: 'HTML / CSS / JavaScript / jQuery', url: 'https://bu.edu.so/' },
]

export default function MotionPortfolio() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  const [filter, setFilter] = useState('All')
  const [menu, setMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const film = useRef<HTMLVideoElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>()
  useEffect(() => () => clearTimeout(timer.current), [])
  const closeFilm = () => { film.current?.pause(); dialog.current?.close() }
  const reveal = { initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 36 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .15 }, transition: { duration: .65 } }
  async function copyEmail() {
    try { await navigator.clipboard.writeText('faatum7@gmail.com'); setCopied(true); timer.current = setTimeout(() => setCopied(false), 2500) }
    catch { window.location.href = 'mailto:faatum7@gmail.com' }
  }
  return <div className="portfolio">
    <a href="#main" className="skip-link">Skip to content</a>
    <motion.div className="reading-progress" style={{ scaleX: progress }} />
    <header className="navigation">
      <a href="#home" className="brand" aria-label="That Tech Lady home"><span className="brand-symbol">f<span>.</span></span><span>THAT TECH LADY<small>FATIMA ABDURRAHMAN</small></span></a>
      <button className="mobile-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="navigation-links" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      <nav id="navigation-links" className={menu ? 'navigation-links is-open' : 'navigation-links'} aria-label="Main navigation"><a onClick={() => setMenu(false)} href="#work">Selected work</a><a onClick={() => setMenu(false)} href="#about">About me</a><a onClick={() => setMenu(false)} href="#skills">My toolkit</a><a onClick={() => setMenu(false)} className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a></nav>
    </header>
    <main id="main">
      <section className="intro-stage" id="home">
        <div className="stage-top"><span><i /> IDEAS. PEOPLE. POSSIBILITIES.</span><span>MOGADISHU, SOMALIA ↗</span></div>
        <div className="intro-layout">
          <motion.div {...reveal} className="portrait-stage"><div className="portrait-orbit" /><div className="portrait-disc"><img src={asset('assets/images/fatima-portrait.jpeg')} alt="Fatima Abdurrahman" fetchPriority="high" /></div><motion.div className="experience-chip" animate={reduce ? {} : { y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}><b>3+</b><span>YEARS OF<br />BUILDING IDEAS</span><span className="chip-star">✳</span></motion.div><span className="portrait-caption">A DEVELOPER WITH A HUMAN PERSPECTIVE</span></motion.div>
          <motion.div {...reveal} className="intro-text"><p className="section-label">HELLO, I’M FATIMA <span>✳</span></p><h1>Technology.<br />With a <em>human</em><br />touch<span className="orange">.</span></h1><h2>Front-end Developer & Technology Builder</h2><p className="intro-description">I build digital products and technology initiatives that connect people with ideas, skills and opportunities.</p><div className="intro-actions"><a className="action-primary" href="#work">See my work <ArrowUpRight size={19} /></a><button className="film-trigger" onClick={() => dialog.current?.showModal()}><span><Play size={15} fill="currentColor" /></span>Play my story <small>00:18</small></button></div></motion.div>
        </div>
        <div className="stage-bottom"><span>DEVELOPMENT / DESIGN / IMPACT</span><a href="#work">SCROLL TO DISCOVER <ArrowDown size={15} /></a><span>PORTFOLIO — 2026</span></div>
      </section>
      <div className="purpose-strip" aria-label="Build with purpose. Design for people."><div aria-hidden="true">BUILD WITH PURPOSE <span>✳</span> DESIGN FOR PEOPLE <span>✳</span> BUILD WITH PURPOSE <span>✳</span> DESIGN FOR PEOPLE <span>✳</span></div></div>
      <section className="selected-work content-section" id="work"><motion.div {...reveal} className="section-top"><div><p className="section-label">01 / SELECTED WORK</p><h2>Good ideas.<br /><em>Real-world impact.</em></h2></div><p>From innovation hubs to learning platforms.<br />Five projects built to move people forward.</p></motion.div><div className="work-filters" aria-label="Filter projects">{['All', 'Innovation', 'Business', 'Education'].map(f => <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}{f === 'All' && <span>05</span>}</button>)}<span className="filter-count" role="status">{projects.filter(p => filter === 'All' || p.category === filter).length} projects</span></div><div className="work-grid">{projects.filter(p => filter === 'All' || p.category === filter).map(p => <motion.a {...reveal} key={p.name} className="work-card" href={p.url} target="_blank" rel="noreferrer"><div className="work-image"><div className="browser-chrome"><i /><i /><i /><span>{new URL(p.url).hostname}</span><ArrowUpRight size={13} /></div><img src={asset('assets/images/' + p.image)} alt={`${p.name} website preview`} loading="lazy" /><span className="visit-project">Visit website <ArrowUpRight size={18} /></span></div><div className="work-meta"><span>{p.category}</span><span>0{projects.indexOf(p) + 1}</span></div><h3>{p.name}<ArrowUpRight size={23} /></h3><p>{p.description}</p><small>{p.tech}</small></motion.a>)}</div></section>
      <section className="about-panel content-section" id="about"><motion.div {...reveal} className="about-heading"><p className="section-label">02 / THE PERSON BEHIND THE PIXELS</p><span className="large-asterisk" aria-hidden="true">✳</span><h2>Curious by nature.<br /><em>Builder by choice.</em></h2></motion.div><motion.div {...reveal} className="about-body"><p className="about-lead">I’m Fatima Abdurrahman.<br />You can call me <span>That Tech Lady.</span></p><p>{about.text}</p><div className="about-facts"><div><b>3+</b><span>Years of experience</span></div><div><b>05</b><span>Featured projects</span></div><div><b>∞</b><span>Ideas to explore</span></div></div><span className="role-note">FULL STACK DEVELOPER / UI & UX DESIGNER</span></motion.div></section>
      <section className="toolkit content-section" id="skills"><motion.div {...reveal} className="section-top"><div><p className="section-label">03 / MY TOOLKIT</p><h2>The tools behind<br /><em>the possibilities.</em></h2></div><p>Design thinking meets technical craft.<br />From the first sketch to the final deploy.</p></motion.div><div className="toolkit-grid">{skillCategories.map((c, i) => <motion.div {...reveal} className="toolkit-card" key={c.title}><span>0{i + 1} /</span><h3>{c.title}</h3><div>{c.skills.map(s => <span key={s}>{s}</span>)}</div></motion.div>)}</div></section>
      <section className="contact-stage content-section" id="contact"><p className="section-label">04 / LET’S BUILD SOMETHING INCREDIBLE</p><motion.h2 {...reveal}>Your next idea.<br /><em>Our next project.</em><span>✳</span></motion.h2><div className="contact-row"><a className="contact-email" href="mailto:faatum7@gmail.com">faatum7@gmail.com <ArrowUpRight /></a><button className="copy-email" aria-label={copied ? 'Email copied' : 'Copy email address'} onClick={copyEmail}>{copied ? <Check size={18} /> : <Copy size={18} />}<span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span></button></div><div className="contact-location"><a href="https://www.fatimadev.space/">www.fatimadev.space ↗</a><span>Hodan, Mogadishu, Somalia</span></div></section>
    </main>
    <footer className="site-footer"><a className="footer-brand" href="#home">THAT TECH LADY<span>© 2026 Fatima Abdurrahman</span></a><div className="social-links"><a aria-label="GitHub" href="https://github.com/fatima-abdurahman"><Github size={18} /></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/sor-institute-7a476a347/"><Linkedin size={18} /></a><a href="https://www.facebook.com/profile.php?id=61555144797133">Facebook ↗</a><a href="https://twitter.com/fatima_dev">Twitter ↗</a><a href="https://faatum7.blogspot.com/">Blog ↗</a></div></footer>
    <dialog className="film-dialog" ref={dialog} onCancel={closeFilm} onClick={e => { if (e.target === e.currentTarget) closeFilm() }}><button className="close-film" onClick={closeFilm} aria-label="Close video"><X /></button><video ref={film} controls playsInline preload="none" poster={asset('motion/poster.jpg?v=motion-2')} src={filmUrl}>Your browser does not support video. <a href={filmUrl}>Download the MP4</a>.</video><div><span>THAT TECH LADY / THE BRAND FILM</span><a href={filmUrl} download>Download MP4 ↗</a></div></dialog>
  </div>
}

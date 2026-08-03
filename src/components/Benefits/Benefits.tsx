import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Dumbbell, UserCheck, Users, MapPin, type LucideIcon } from 'lucide-react'
import logo from '../../assets/logo.png'
import './Benefits.css'

gsap.registerPlugin(ScrollTrigger)

interface Stat {
  icon: LucideIcon
  label: string
}

const STATS: Stat[] = [
  { icon: Dumbbell, label: 'Equipamentos modernos' },
  { icon: UserCheck, label: 'Professores qualificados' },
  { icon: Users, label: 'Ambiente familiar' },
  { icon: MapPin, label: 'Fácil acesso no bairro Jaraguá' },
]

/** Logo mark, "years of experience" line and 4 stat badges. Styles in ./Benefits.css. */
export default function Benefits() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.benefits-logo',
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
        },
      )

      gsap.fromTo(
        '.benefits-sub',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
        },
      )

      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-grid', start: 'top 85%' },
        },
      )
    },
    { scope: rootRef },
  )

  return (
    <section ref={rootRef} className="benefits">
      <div className="benefits__glow" />

      <div className="container-xl benefits__inner">
        <img src={logo} alt="BH Sport Fit" className="benefits-logo benefits__logo" />

        <p className="benefits-sub benefits__subtitle">
          Mais de <span className="benefits__subtitle-highlight">7 anos</span> ajudando pessoas a
          conquistarem seus objetivos.
        </p>

        <div className="stats-grid benefits__grid">
          {STATS.map(({ icon: Icon, label }) => (
            <div key={label} className="stat-card benefits__card">
              <span className="benefits__card-icon">
                <Icon size={18} strokeWidth={2.25} />
              </span>
              <span className="benefits__card-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

interface FeatureCard {
  badge: string
  text: string
}

const FEATURES: FeatureCard[] = [
  {
    badge: 'Atendimento Humanizado',
    text: 'Nossa equipe acompanha seu desenvolvimento para que você treine da forma correta e obtenha melhores resultados.',
  },
  {
    badge: 'Estrutura Completa',
    text: 'Equipamentos de musculação, área para cardio e tudo o que você precisa para um treino eficiente.',
  },
  {
    badge: 'Ambiente Motivador',
    text: 'Treine em um espaço organizado, confortável e preparado para receber alunos de todos os níveis.',
  },
  {
    badge: 'Horários Flexíveis',
    text: 'Funcionamos cedo e até a noite para que você consiga encaixar os treinos na sua rotina.',
  },
  {
    badge: 'Estrutura Completa',
    text: 'Equipamentos de musculação, área para cardio e tudo o que você precisa para um treino eficiente.',
  },
  {
    badge: 'Ambiente Motivador',
    text: 'Treine em um espaço organizado, confortável e preparado para receber alunos de todos os níveis.',
  },
]

/** "More than a gym" intro + 6 feature cards. Styles in ./About.css. */
export default function About() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-heading',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: '.about-heading', start: 'top 85%' },
        },
      )
      gsap.fromTo(
        '.about-desc',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          scrollTrigger: { trigger: '.about-heading', start: 'top 85%' },
        },
      )
      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.feature-grid', start: 'top 85%' },
        },
      )
    },
    { scope: rootRef },
  )

  return (
    <section id="about" ref={rootRef} className="about">
      <div className="container-xl">
        <div className="about__header">
          <h2 className="about-heading about__heading">
            Muito mais que uma academia. Um lugar para{' '}
            <em className="about__heading-accent">transformar sua rotina</em>.
          </h2>
          <p className="about-desc about__description">
            Sabemos que começar pode parecer difícil. Por isso criamos um ambiente
            acolhedor, com profissionais que acompanham sua evolução e ajudam você a
            alcançar seus objetivos com segurança.
          </p>
        </div>

        <div className="feature-grid about__grid">
          {FEATURES.map((feature, i) => (
            <div key={`${feature.badge}-${i}`} className="feature-card about__card">
              <span className="about__card-badge">{feature.badge}</span>
              <p className="about__card-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

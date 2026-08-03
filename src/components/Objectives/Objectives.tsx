import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../Button/Button'
import SectionTitle from '../SectionTitle/SectionTitle'
import { WHATSAPP_LINK } from '../../utils/constants'
import { cn } from '../../utils/cn'
import './Objectives.css'

import wellnessImg from '../../assets/lyfefuel-4wtxPhvQZds-unsplash.jpg'
import conditioningImg from '../../assets/sporlab-XiZ7pRvCzro-unsplash.jpg'
import hypertrophyImg from '../../assets/gorilla-freak-wt5jg8_WrJg-unsplash.jpg'
import weightLossImg from '../../assets/i-yunmai-5jctAMjz21A-unsplash.jpg'

gsap.registerPlugin(ScrollTrigger)

interface Objective {
  title: string
  desc: string
  img: string
  titleColor: 'text' | 'primary'
}

const OBJECTIVES: Objective[] = [
  {
    title: 'Saúde e Bem-estar',
    desc: 'Exercícios que ajudam no controle do estresse, aumento da autoestima e mais qualidade de vida.',
    img: wellnessImg,
    titleColor: 'text',
  },
  {
    title: 'Condicionamento Físico',
    desc: 'Melhore sua disposição para o dia a dia com um treinamento adequado.',
    img: conditioningImg,
    titleColor: 'primary',
  },
  {
    title: 'Hipertrofia',
    desc: 'Ganhe força e massa muscular com orientação profissional.',
    img: hypertrophyImg,
    titleColor: 'primary',
  },
  {
    title: 'Emagrecimento',
    desc: 'Treinos eficientes para acelerar seus resultados e melhorar sua qualidade de vida.',
    img: weightLossImg,
    titleColor: 'text',
  },
]

/** "Your goals, our commitment" copy + 2x2 photo grid. Styles in ./Objectives.css. */
export default function Objectives() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.objectives-title',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: '.objectives-title', start: 'top 85%' },
        },
      )
      gsap.fromTo(
        '.objectives-copy',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: '.objectives-copy', start: 'top 85%' },
        },
      )
      gsap.fromTo(
        '.objective-card',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.objectives-grid', start: 'top 85%' },
        },
      )
    },
    { scope: rootRef },
  )

  return (
    <section id="objectives" ref={rootRef} className="objectives">
      <div className="container-xl">
        <SectionTitle
          eyebrow="Objetivo"
          title={
            <>
              Seus Objetivos, nosso <em className="objectives__title-accent">compromisso</em>
            </>
          }
          className="objectives-title objectives__title"
        />

        <div className="objectives__layout">
          <div className="objectives-copy objectives__copy">
            <p className="objectives__lead">
              Independentemente do seu objetivo, nós{' '}
              <em className="objectives__lead-accent">ajudamos</em> você a{' '}
              <em className="objectives__lead-accent">chegar lá</em>.
            </p>
            <Button href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Quero fazer uma aula experimental
            </Button>
          </div>

          <div className="objectives-grid objectives__grid">
            {OBJECTIVES.map((o) => (
              <div key={o.title} className="objective-card objectives__card">
                <img src={o.img} alt={o.title} className="objectives__card-img" />
                <div className="objectives__card-overlay" />
                <div className="objectives__card-content">
                  <h3
                    className={cn(
                      'objectives__card-title',
                      o.titleColor === 'primary' && 'objectives__card-title--primary',
                    )}
                  >
                    {o.title}
                  </h3>
                  <p className="objectives__card-desc">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

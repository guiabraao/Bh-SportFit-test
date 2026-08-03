import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  name: string
  role: string
  quote: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marina Costa',
    role: 'Aluna há 2 anos',
    quote:
      'Emagreci e ganhei disposição sem sentir que aquilo era uma obrigação. Os professores acompanham cada detalhe do treino.',
  },
  {
    name: 'Rafael Andrade',
    role: 'Aluno há 8 meses',
    quote:
      'Estrutura completa e horário flexível, consigo treinar antes do trabalho. O ambiente motiva a evoluir toda semana.',
  },
  {
    name: 'Juliana Prado',
    role: 'Aluna há 1 ano',
    quote:
      'Nunca me senti tão acolhida em uma academia. O acompanhamento humanizado fez toda a diferença nos meus resultados.',
  },
]

/** Testimonials grid. Styles in ./Testimonials.css. */
export default function Testimonials() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%' },
        },
      )
    },
    { scope: rootRef },
  )

  return (
    <section id="testimonials" ref={rootRef} className="testimonials">
      <div className="container-xl">
        <SectionTitle
          eyebrow="Depoimentos"
          title="Quem treina aqui, recomenda"
          className="testimonials__title"
        />

        <div className="testimonials-grid testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card testimonials__card">
              <div>
                <Quote size={22} className="testimonials__quote-icon" strokeWidth={2} />
                <p className="testimonials__quote">{t.quote}</p>
              </div>
              <div className="testimonials__footer">
                <div>
                  <p className="testimonials__name">{t.name}</p>
                  <p className="testimonials__role">{t.role}</p>
                </div>
                <div className="testimonials__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

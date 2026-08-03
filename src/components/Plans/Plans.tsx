import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Check, Star } from 'lucide-react'
import SectionTitle from '../SectionTitle/SectionTitle'
import logo from '../../assets/logo.png'
import { WHATSAPP_LINK } from '../../utils/constants'
import { cn } from '../../utils/cn'
import './Plans.css'

gsap.registerPlugin(ScrollTrigger)

interface Plan {
  name: string
  subtitle: string
  price: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Plano Start',
    subtitle: 'Ideal para quem está começando.',
    price: '89,90',
    features: [
      'Acesso à academia',
      'Treinos de musculação',
      'Avaliação física inicial',
      'Acompanhamento dos professores',
      'Horários flexíveis',
    ],
    cta: 'Começar Agora',
  },
  {
    name: 'Plano Evolution',
    subtitle: 'Evolua com mais acompanhamento e benefícios.',
    price: '119,90',
    features: [
      'Tudo do Plano Start',
      'Reavaliação física periódica',
      'Ficha de treino atualizada',
      'Suporte personalizado dos professores',
      'Prioridade no atendimento',
    ],
    cta: 'Quero Evoluir',
    highlighted: true,
  },
  {
    name: 'Plano Performance',
    subtitle: 'Para quem busca máxima performance e resultados.',
    price: '149,90',
    features: [
      'Tudo do Plano Evolution',
      'Acompanhamento mais próximo da equipe',
      'Reavaliações frequentes',
      'Planejamento contínuo da evolução',
      'Benefícios exclusivos para alunos',
    ],
    cta: 'Começar Agora',
  },
]

/** Pricing section with watermark and 3 plan cards. Styles in ./Plans.css. */
export default function Plans() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.plans-title',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: '.plans-title', start: 'top 85%' },
        },
      )
      gsap.fromTo(
        '.plan-card',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.plans-grid', start: 'top 85%' },
        },
      )
      gsap.to('.plans-watermark', {
        backgroundPosition: '120% 0%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })
    },
    { scope: rootRef },
  )

  return (
    <section id="plans" ref={rootRef} className="plans">
      <span aria-hidden className="plans-watermark plans__watermark">
        Matricule-se já
      </span>

      <div className="container-xl plans__inner">
        <SectionTitle eyebrow="Planos" title="Conheça nossos planos" className="plans-title plans__title" />

        <div className="plans-grid plans__grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn('plan-card', 'plans__card', plan.highlighted && 'plans__card--highlighted')}
            >
              {plan.highlighted && (
                <span className="plans__badge">
                  Mais Escolhido <Star size={12} fill="black" strokeWidth={0} />
                </span>
              )}

              <div className="plans__header">
                <img src={logo} alt="" className="plans__logo" />
                <div>
                  <h3 className="plans__name">{plan.name}</h3>
                  <p className="plans__subtitle">{plan.subtitle}</p>
                </div>
              </div>

              <p className="plans__price">
                A partir de <span className="plans__price-value">R$ {plan.price}</span>
                <span className="plans__price-period">/mês</span>
              </p>

              <ul className="plans__features">
                {plan.features.map((f) => (
                  <li key={f} className="plans__feature">
                    <Check size={15} className="plans__feature-icon" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="plans__cta">
                {plan.cta}
                <span className="plans__cta-icon">
                  <ArrowUpRight size={13} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MessageCircle } from 'lucide-react'
import Button from '../Button/Button'
import heroImg from '../../assets/hero.jpg'
import { WHATSAPP_LINK } from '../../utils/constants'
import './Hero.css'

/** Hero banner: background image, eyebrow, headline and CTAs. Styles in ./Hero.css. */
export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.hero-bg',
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' },
      )
        .fromTo(
          '.hero-eyebrow',
          { opacity: 0, y: 16, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 },
          '-=1.1',
        )
        .fromTo(
          '.hero-line',
          { opacity: 0, y: 30, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.12 },
          '-=0.4',
        )
        .fromTo('.hero-desc', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
          '-=0.35',
        )
    },
    { scope: rootRef },
  )

  return (
    <section id="top" ref={rootRef} className="hero">
      <div className="hero-bg hero__bg">
        <img src={heroImg} alt="" className="hero__bg-img" />
        <div className="hero__bg-gradient" />
        <div className="hero__bg-glow" />
      </div>

      <div className="container-xl hero__content">
        <span className="hero-eyebrow hero__eyebrow">Transformando vidas através do movimento</span>

        <h1 className="hero__title">
          <span className="hero-line hero__title-line">
            Sua <em className="hero__accent hero__accent--medium">melhor versão</em>
          </span>
          <span className="hero-line hero__title-line">
            começa <em className="hero__accent">hoje</em>.
          </span>
        </h1>

        <p className="hero-desc hero__description">
          Treine em uma academia completa, com equipamentos modernos, acompanhamento
          profissional e um ambiente que motiva você a conquistar seus objetivos, seja
          emagrecer, ganhar massa muscular ou viver com mais saúde.
        </p>

        <div className="hero__actions">
          <Button href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hero-cta">
            Quero fazer uma aula experimental
          </Button>
          <Button
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            icon={<MessageCircle size={16} />}
            className="hero-cta"
          >
            Chamar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

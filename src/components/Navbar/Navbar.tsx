import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import Button from '../Button/Button'
import logo from '../../assets/logo.png'
import { WHATSAPP_LINK } from '../../utils/constants'
import { cn } from '../../utils/cn'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Objetivos', href: '#objectives' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Planos', href: '#plans' },
]

/** Fixed header with logo, nav links, CTA and a mobile menu. Styles in ./Navbar.css. */
export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.2 },
    )
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={navRef} className={cn('navbar', scrolled && 'navbar--scrolled')}>
      <div className="container-xl navbar__row">
        <a href="#top" className="navbar__brand">
          <img src={logo} alt="BH Sport Fit" className="navbar__logo" />
        </a>

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" size="sm">
            Quero fazer uma aula experimental
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((v) => !v)}
          className="navbar__toggle"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          <nav className="container-xl navbar__mobile-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="navbar__mobile-link"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="navbar__mobile-cta"
            >
              Quero fazer uma aula experimental
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

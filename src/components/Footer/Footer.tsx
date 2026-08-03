import { MapPin, Phone, Clock } from 'lucide-react'
import logo from '../../assets/logo.png'
import { WHATSAPP_LINK } from '../../utils/constants'
import './Footer.css'

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const LINKS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Objetivos', href: '#objectives' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Planos', href: '#plans' },
]

/** Site footer: brand blurb, nav, contact and hours. Styles in ./Footer.css. */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-xl">
        <div className="footer__grid">
          <div>
            <img src={logo} alt="BH Sport Fit" className="footer__logo" />
            <p className="footer__about">
              Sua melhor versão começa hoje. Academia completa no bairro Jaraguá, com
              equipamentos modernos e acompanhamento profissional.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer__social"
            >
              <InstagramIcon />
            </a>
          </div>

          <div>
            <h4 className="footer__heading">Navegação</h4>
            <ul className="footer__list">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Contato</h4>
            <ul className="footer__list">
              <li className="footer__list-item">
                <MapPin size={16} className="footer__list-icon" />
                <span>Bairro Jaraguá, Belo Horizonte – MG</span>
              </li>
              <li className="footer__list-item">
                <Phone size={16} className="footer__list-icon" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footer__link">
                  (31) 99999-9999
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Funcionamento</h4>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Clock size={16} className="footer__list-icon" />
                <span>Seg – Sex: 06h às 22h</span>
              </li>
              <li className="footer__list-item">
                <Clock size={16} className="footer__list-icon" />
                <span>Sáb: 08h às 14h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} BH Sport Fit. Todos os direitos reservados.</p>
          <p>Feito com foco em resultados.</p>
        </div>
      </div>
    </footer>
  )
}

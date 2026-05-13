import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Crown, Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin, ArrowUp, Star } from 'lucide-react'

const quickLinks = [
  { label: 'Início', section: 'inicio' },
]

const pageLinks = [
  { label: 'Sobre Nós', to: '/sobre' },
  { label: 'Quartos', to: '/quartos' },
  { label: 'Restaurante', to: '/restaurante' },
  { label: 'Eventos & Reuniões', to: '/eventos' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Contactos', to: '/contactos' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const isRoomsPage = location.pathname === '/quartos'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (section) => {
    if (isRoomsPage) {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(section)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-njinga-charcoal border-t border-gold/15 relative">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gold
                   flex items-center justify-center hover:bg-gold-dark transition-colors duration-300
                   shadow-lg shadow-gold/20"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={17} className="text-njinga-black" />
      </button>

      {/* Pre-footer CTA strip */}
      <div className="border-b border-gold/10 bg-njinga-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-playfair text-xl font-bold text-njinga-white mb-1">
                Pronto para visitar Luanda?
              </p>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
                <span className="font-inter text-sm text-njinga-white/50 ml-1">4.9 — 200+ avaliações</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contactos" className="btn-gold py-3 px-8 text-xs">
                Reserve Agora
              </Link>
              <a href="tel:+244923456789" className="btn-outline-gold py-3 px-8 text-xs">
                Ligar para o Hotel
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Crown size={22} className="text-gold" />
              <div className="leading-tight">
                <p className="font-playfair text-lg font-bold text-gold">Hotel Rainha</p>
                <p className="font-playfair text-sm font-medium text-gold/65 tracking-[0.2em] uppercase">
                  Njinga
                </p>
              </div>
            </div>
            <p className="font-inter text-sm text-njinga-white/45 leading-relaxed mb-6">
              Inspirado pela grandeza da Rainha Njinga Mbande. Elegância, conforto e a
              hospitalidade angolana no coração de Luanda.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-njinga-gray/50 border border-njinga-gray hover:border-gold/50
                             flex items-center justify-center hover:bg-gold/10
                             transition-all duration-300 group"
                >
                  <social.icon
                    size={14}
                    className="text-njinga-white/40 group-hover:text-gold transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-5 pb-3 border-b border-gold/15">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.section)}
                    className="font-inter text-sm text-njinga-white/50 hover:text-gold transition-colors duration-200
                               flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </button>
                </li>
              ))}
              {pageLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-inter text-sm text-njinga-white/50 hover:text-gold transition-colors duration-200
                               flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-5 pb-3 border-b border-gold/15">
              Serviços
            </h4>
            <ul className="space-y-3">
              {['Restaurante & Bar', 'Quartos & Suites', 'Sala de Reuniões', 'Ginásio', 'Lavandaria', 'Estacionamento'].map((s) => (
                <li key={s}>
                  <span className="font-inter text-sm text-njinga-white/45">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-5 pb-3 border-b border-gold/15">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={14} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <p className="font-inter text-sm text-njinga-white/50 leading-relaxed">
                  Bairro Morro Bento, Rua dos Generais S/N,
                  Luanda, Angola
                </p>
              </li>
              <li className="flex gap-3">
                <Phone size={14} className="text-gold/60 flex-shrink-0" />
                <a href="tel:+244923456789" className="font-inter text-sm text-njinga-white/50 hover:text-gold transition-colors duration-200">
                  +244 923 456 789
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={14} className="text-gold/60 flex-shrink-0" />
                <a href="mailto:reservas@hotelrainhanjinga.ao" className="font-inter text-sm text-njinga-white/50 hover:text-gold transition-colors duration-200 break-all">
                  reservas@hotelrainhanjinga.ao
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-njinga-gray/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-njinga-white/30 text-center sm:text-left">
            © 2026 Hotel Rainha Njinga. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {['Política de Privacidade', 'Termos e Condições', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-inter text-xs text-njinga-white/30 hover:text-gold/60 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Developer credit */}
        <p className="font-inter text-[11px] text-njinga-white/20 text-center mt-4">
          Developed by <span className="text-gold/40">Bit &amp; Brush</span>
        </p>
      </div>
    </footer>
  )
}

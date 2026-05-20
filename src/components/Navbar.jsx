import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Crown } from 'lucide-react'

const sectionLinks = [
  { label: 'Início', section: 'inicio' },
]

const pageLinks = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Quartos', to: '/quartos' },
  { label: 'Restaurante', to: '/restaurante' },
  { label: 'Eventos', to: '/eventos' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Contactos', to: '/contactos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const location = useLocation()
  const navigate = useNavigate()
  const isSubPage = location.pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      if (!isSubPage) {
        const sections = sectionLinks.map((l) => l.section)
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i])
          if (el && window.scrollY >= el.offsetTop - 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isSubPage])

  const scrollToSection = (section) => {
    setMenuOpen(false)
    if (isSubPage) {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-njinga-black/95 backdrop-blur-md shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <Crown
              size={22}
              className="text-gold transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-playfair text-base lg:text-lg font-bold text-gold tracking-wide">
                Hotel Rainha
              </span>
              <span className="font-playfair text-xs lg:text-sm font-medium text-gold/80 tracking-[0.2em] uppercase">
                Njinga
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {sectionLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className={`font-inter text-sm tracking-wider uppercase transition-all duration-300 relative group ${
                  !isSubPage && activeSection === link.section
                    ? 'text-gold'
                    : 'text-njinga-white/80 hover:text-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    !isSubPage && activeSection === link.section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}

            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`font-inter text-sm tracking-wider uppercase transition-all duration-300 relative group ${
                  location.pathname === link.to ? 'text-gold' : 'text-njinga-white/80 hover:text-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}

            <Link
              to="/contactos"
              onClick={() => setMenuOpen(false)}
              className="btn-gold text-xs py-2 px-5 ml-1"
            >
              Reserve
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold p-2 focus:outline-none shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-njinga-black/98 backdrop-blur-md px-6 pt-4 pb-8 border-t border-gold/20 mt-3">
          {sectionLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              className={`block w-full text-left font-inter text-base tracking-wider uppercase py-4 border-b border-njinga-gray/30 transition-colors duration-200 ${
                !isSubPage && activeSection === link.section
                  ? 'text-gold'
                  : 'text-njinga-white/80 hover:text-gold'
              }`}
            >
              {link.label}
            </button>
          ))}

          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left font-inter text-base tracking-wider uppercase py-4 border-b border-njinga-gray/30 transition-colors duration-200 ${
                location.pathname === link.to ? 'text-gold' : 'text-njinga-white/80 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contactos"
            onClick={() => setMenuOpen(false)}
            className="btn-gold block w-full text-center mt-6 py-3"
          >
            Reserve Agora
          </Link>
        </nav>
      </div>
    </header>
  )
}

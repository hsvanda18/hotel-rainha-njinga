import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Shield, Clock, Award } from 'lucide-react'
import homeData from '../data/home.json'

const ICON_MAP = { MapPin, Shield, Clock, Award }
const { features } = homeData.about

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={ref} className="py-24 lg:py-32 bg-njinga-black bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-subtitle mb-4">✦ Sobre Nós ✦</p>
          <h2 className="section-title mb-6">
            Uma Experiência{' '}
            <span className="text-gold italic">Inolvidável</span>
          </h2>
          <div className="section-divider">
            <span className="gold-diamond">◆</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Outer wrapper for the decorative offset border trick */}
            <div className="relative">
              {/* Decorative gold border offset behind the image */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-gold/25 pointer-events-none" />

              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&auto=format&fit=crop"
                  alt="Hotel Rainha Njinga - Lobby"
                  className="w-full h-80 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-njinga-black/50 via-transparent to-transparent" />
              </div>

              {/* Award badge */}
              <div className="absolute top-6 right-6 bg-gold text-njinga-black p-4 text-center shadow-xl shadow-gold/20">
                <Award size={22} className="mx-auto mb-1" />
                <p className="font-playfair font-bold text-xl leading-none">3</p>
                <p className="font-inter text-[10px] uppercase tracking-widest font-bold mt-0.5">Estrelas</p>
              </div>

              {/* Bottom left label */}
              <div className="absolute bottom-6 left-6 glass-card px-4 py-2">
                <p className="font-inter text-xs text-gold tracking-widest uppercase">Morro Bento, Luanda</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div
            className={`transition-all duration-700 delay-400 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p className="section-subtitle mb-4">Hotel Rainha Njinga</p>
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-njinga-white mb-6 leading-snug">
              O coração de{' '}
              <span className="text-gold">Luanda</span>{' '}
              à sua disposição
            </h3>

            <p className="font-inter text-njinga-white/65 text-base leading-relaxed mb-5">
              Inspirado na grandeza da Rainha Njinga Mbande, figura icónica da resistência angolana,
              o Hotel Rainha Njinga combina a rica herança cultural de Angola com o conforto moderno
              e a hospitalidade que nos define.
            </p>

            <p className="font-inter text-njinga-white/65 text-base leading-relaxed mb-8">
              Com <strong className="text-gold font-semibold">52 quartos</strong> elegantemente decorados,
              distribuídos por <strong className="text-gold font-semibold">3 pisos</strong>, oferecemos uma
              experiência única a viajantes de negócios e lazer. Situado no prestigiado bairro
              de Morro Bento, somos a escolha ideal para quem visita Luanda.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-0 py-6 border-y border-gold/20">
              {[
                { n: '52', l: 'Quartos' },
                { n: '3', l: 'Pisos' },
                { n: '12+', l: 'Serviços' },
              ].map((s, i) => (
                <div key={s.l} className={`text-center ${i < 2 ? 'border-r border-gold/20' : ''}`}>
                  <p className="font-playfair text-3xl font-bold text-gold">{s.n}</p>
                  <p className="font-inter text-[11px] uppercase tracking-widest text-njinga-white/50 mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap mt-8">
              <Link to="/sobre" className="btn-gold">
                Saber Mais Sobre Nós
              </Link>
              <Link to="/quartos" className="btn-outline-gold">
                Ver Quartos
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = ICON_MAP[f.icon]
            return (
            <div
              key={f.title}
              className={`group bg-njinga-charcoal border border-njinga-gray hover:border-gold/40 p-8
                         card-hover transition-all duration-700 text-center relative overflow-hidden ${
                           visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                         }`}
              style={{ transitionDelay: `${600 + i * 150}ms` }}
            >
              {/* Subtle gold accent top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <Icon size={28} className="text-gold" />
              </div>
              <h4 className="font-playfair text-xl font-semibold text-njinga-white mb-3">
                {f.title}
              </h4>
              <p className="font-inter text-njinga-white/55 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

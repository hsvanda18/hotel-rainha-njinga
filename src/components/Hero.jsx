import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Star } from 'lucide-react'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80&auto=format&fit=crop',
    alt: 'Hotel Rainha Njinga - Vista exterior',
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80&auto=format&fit=crop',
    alt: 'Hotel Rainha Njinga - Piscina e jardins',
  },
  {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80&auto=format&fit=crop',
    alt: 'Hotel Rainha Njinga - Suite de luxo',
  },
]

const stats = [
  { value: '52', label: 'Quartos' },
  { value: '3', label: 'Pisos' },
  { value: '24h', label: 'Serviço' },
  { value: '100%', label: 'Satisfação' },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === currentSlide ? 1 : 0,
            transition: 'opacity 1500ms ease-in-out',
          }}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
            style={{
              transform: i === currentSlide ? 'scale(1)' : 'scale(1.05)',
              transition: 'transform 8000ms ease-out',
            }}
          />
        </div>
      ))}

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-njinga-black/60 via-njinga-black/40 to-njinga-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-njinga-black/50 via-transparent to-njinga-black/50" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div
          className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="h-px w-8 bg-gold/50" />
          {[...Array(3)].map((_, i) => (
            <Star key={i} size={13} className="text-gold fill-gold" />
          ))}
          <span className="h-px w-8 bg-gold/50" />
        </div>
        <p
          className={`section-subtitle mb-6 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          ✦ Luanda, Angola ✦
        </p>

        <h1
          className={`font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-njinga-white leading-tight mb-6 text-shadow-gold transition-all duration-700 delay-[350ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Bem-vindo ao{' '}
          <span className="text-gold italic block sm:inline">
            Hotel Rainha Njinga
          </span>
        </h1>

        <div
          className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="h-px w-16 bg-gold/50" />
          <p className="font-inter text-njinga-white/80 text-base sm:text-lg font-light tracking-wide">
            A sua casa em Luanda, no coração de Morro Bento
          </p>
          <span className="h-px w-16 bg-gold/50" />
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link to="/contactos" className="btn-gold text-sm py-4 px-10">
            Reserve Agora
          </Link>
          <Link to="/quartos" className="btn-outline-gold text-sm py-4 px-10">
            Ver Quartos
          </Link>
        </div>

        {/* Stats strip */}
        <div
          className={`mt-16 transition-all duration-700 delay-[900ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-0 glass-card px-6 py-4 mx-auto">
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="text-center px-6">
                  <p className="font-playfair text-2xl font-bold text-gold leading-none">{stat.value}</p>
                  <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-njinga-white/50 mt-1.5">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && <span className="stat-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? 'w-8 h-2 bg-gold'
                : 'w-2 h-2 bg-njinga-white/30 hover:bg-njinga-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors duration-300 animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}

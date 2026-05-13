import React, { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Mendonça',
    role: 'Empresário, Lisboa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
    rating: 5,
    text: 'Uma estadia absolutamente memorável. O staff é incrivelmente atencioso e os quartos superam todas as expectativas. A localização em Morro Bento é perfeita para quem vem a negócios. Certamente voltarei nas próximas visitas a Luanda.',
    date: 'Março 2025',
  },
  {
    name: 'Amélia Fernandes',
    role: 'Consultora, Luanda',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
    rating: 5,
    text: 'O Hotel Rainha Njinga tem um charme único que mistura modernidade com a essência cultural angolana. O restaurante serve pratos deliciosos e o bar tem os melhores cocktails da cidade. Uma joia no coração de Luanda!',
    date: 'Janeiro 2025',
  },
  {
    name: 'Jean-Pierre Moreau',
    role: 'Turista, Paris',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
    rating: 5,
    text: 'My first visit to Angola and the Hotel Rainha Njinga made it unforgettable. The team speaks multiple languages and the breakfast was exceptional. The hotel perfectly blends Angolan culture with modern comfort. Highly recommended!',
    date: 'Fevereiro 2025',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold fill-gold' : 'text-njinga-gray'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
      }}
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-subtitle mb-4">✦ Testemunhos ✦</p>
          <h2 className="section-title mb-4">
            O Que Dizem os{' '}
            <span className="text-gold italic">Nossos Hóspedes</span>
          </h2>
          <div className="section-divider mt-8">
            <span className="gold-diamond">◆</span>
          </div>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-njinga-charcoal border p-8 relative transition-all duration-700 ${
                i === active ? 'border-gold/50 shadow-lg shadow-gold/10' : 'border-njinga-gray/50'
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
              onClick={() => setActive(i)}
            >
              <Quote
                size={32}
                className="text-gold/20 absolute top-6 right-6"
              />

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <p className="font-playfair font-semibold text-njinga-white text-base">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-njinga-white/50 mt-0.5">{t.role}</p>
                  <StarRating rating={t.rating} />
                </div>
              </div>

              <p className="font-inter text-njinga-white/70 text-sm leading-relaxed italic">
                "{t.text}"
              </p>

              <p className="font-inter text-xs text-gold/50 mt-4">{t.date}</p>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="bg-njinga-charcoal border border-gold/30 p-8 relative">
            <Quote size={32} className="text-gold/20 absolute top-6 right-6" />

            <div className="flex items-center gap-4 mb-5">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
              />
              <div>
                <p className="font-playfair font-semibold text-njinga-white text-base">
                  {testimonials[active].name}
                </p>
                <p className="font-inter text-xs text-njinga-white/50 mt-0.5">
                  {testimonials[active].role}
                </p>
                <StarRating rating={testimonials[active].rating} />
              </div>
            </div>

            <p className="font-inter text-njinga-white/70 text-sm leading-relaxed italic">
              "{testimonials[active].text}"
            </p>
            <p className="font-inter text-xs text-gold/50 mt-4">{testimonials[active].date}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-njinga-gray hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall rating */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 px-8 py-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="font-playfair text-2xl font-bold text-gold">4.9</span>
            <span className="font-inter text-sm text-njinga-white/60">/ 5.0 — 200+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  )
}

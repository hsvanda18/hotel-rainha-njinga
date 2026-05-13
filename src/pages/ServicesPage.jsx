import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, ArrowRight, Phone, Check } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { serviceCategories } from '../data/services'

function useVisible(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function ServiceCard({ service, index, visible }) {
  const Icon = service.icon
  return (
    <div
      className={`group bg-njinga-black border border-njinga-gray/40 hover:border-gold/40 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div className="p-7 relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
            <Icon size={22} className="text-gold" />
          </div>
          <div>
            <h3 className="font-playfair text-lg font-bold text-njinga-white leading-snug">
              {service.name}
            </h3>
          </div>
        </div>

        <p className="font-inter text-njinga-white/50 text-sm leading-relaxed mb-5">
          {service.desc}
        </p>

        <ul className="space-y-1.5 mb-5">
          {service.details.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <Check size={11} className="text-gold mt-0.5 flex-shrink-0" />
              <span className="font-inter text-xs text-njinga-white/45">{d}</span>
            </li>
          ))}
        </ul>

        {service.link && (
          <Link
            to={service.link}
            className="inline-flex items-center gap-1.5 font-inter text-xs text-gold/70 hover:text-gold tracking-wider uppercase transition-colors duration-200"
          >
            {service.linkLabel}
            <ChevronRight size={12} />
          </Link>
        )}
      </div>
    </div>
  )
}

function CategorySection({ category, index }) {
  const [ref, visible] = useVisible(0.08)
  const isEven = index % 2 === 0

  return (
    <section
      ref={ref}
      id={category.id}
      className={`py-20 ${isEven ? 'bg-njinga-black' : 'bg-njinga-charcoal'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category header with image */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${!isEven ? 'lg:flex lg:flex-row-reverse' : ''}`}>
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative overflow-hidden">
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-njinga-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-gold/15" />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px flex-1 max-w-8 bg-gold/40" />
              <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60">
                {String(index + 1).padStart(2, '0')}
              </p>
            </div>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-njinga-white mb-4 leading-tight">
              {category.label}
            </h2>
            <p className="font-inter text-njinga-white/50 text-sm leading-relaxed">
              {category.desc}
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className={`grid sm:grid-cols-2 ${
          category.services.length >= 4 ? 'lg:grid-cols-4' :
          category.services.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
        } gap-5`}>
          {category.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const navigate = useNavigate()
  const [heroRef, heroVisible] = useVisible(0.1)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const totalServices = serviceCategories.reduce((sum, c) => sum + c.services.length, 0)

  const scrollToCategory = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-njinga-black text-njinga-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80&auto=format&fit=crop"
            alt="Serviços do Hotel Rainha Njinga"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 40px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-njinga-black/70 via-njinga-black/50 to-njinga-black" />
        </div>

        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-subtitle mb-4">✦ O Que Oferecemos ✦</p>
            <h1
              className={`font-playfair text-5xl lg:text-7xl font-bold text-njinga-white mb-5 leading-tight transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Serviços &{' '}
              <span className="text-gold italic">Comodidades</span>
            </h1>
            <p
              className={`font-inter text-njinga-white/60 text-base leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-150 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {totalServices} serviços pensados para que cada detalhe da sua estadia
              seja perfeito — do check-in ao check-out.
            </p>

            {/* Category quick-nav */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className="font-inter text-xs tracking-wider uppercase px-4 py-2 border border-njinga-gray/50 text-njinga-white/50 hover:border-gold/50 hover:text-gold transition-all duration-200 flex items-center gap-1.5"
                >
                  {cat.label}
                  <ChevronRight size={11} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary bar */}
      <div className="bg-njinga-charcoal border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-njinga-gray/30">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className="group text-center px-6 py-2 hover:bg-gold/5 transition-colors duration-200"
              >
                <p className="font-playfair text-2xl font-bold text-gold">
                  {cat.services.length}
                </p>
                <p className="font-inter text-[10px] uppercase tracking-widest text-njinga-white/40 mt-0.5 group-hover:text-gold/60 transition-colors duration-200">
                  {cat.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category sections */}
      {serviceCategories.map((category, i) => (
        <CategorySection key={category.id} category={category} index={i} />
      ))}

      {/* CTA */}
      <section className="py-20 bg-njinga-charcoal">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="section-subtitle mb-4">✦ Pronto para Reservar? ✦</p>
          <h2 className="font-playfair text-4xl font-bold text-njinga-white mb-4">
            Todos estes serviços{' '}
            <span className="text-gold italic">incluídos</span>
          </h2>
          <p className="font-inter text-njinga-white/45 text-sm mb-8">
            Reserve já a sua estadia e desfrute de todos os serviços do Hotel Rainha Njinga.
            Para pedidos especiais, contacte-nos directamente.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/contactos')}
              className="btn-gold text-xs py-3 px-10 flex items-center gap-2"
            >
              Fazer Reserva
              <ArrowRight size={14} />
            </button>
            <a
              href="tel:+244923456789"
              className="btn-outline-gold text-xs py-3 px-10 flex items-center gap-2"
            >
              <Phone size={14} />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

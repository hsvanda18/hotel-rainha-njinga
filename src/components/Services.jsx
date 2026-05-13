import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Utensils, Wine, Wifi, Car, CreditCard, BellRing,
  Dumbbell, Presentation, Shirt, Clock, Lock, ArrowUp
} from 'lucide-react'

const services = [
  { icon: Utensils, name: 'Restaurante', desc: 'Culinária angolana e internacional' },
  { icon: Wine, name: 'Bar & Lounge', desc: 'Bebidas e cocktails exclusivos' },
  { icon: Wifi, name: 'Wi-Fi Grátis', desc: 'Alta velocidade em todo o hotel' },
  { icon: Car, name: 'Estacionamento', desc: 'Parque privativo seguro' },
  { icon: CreditCard, name: 'ATM', desc: 'Multibanco no hotel' },
  { icon: BellRing, name: 'Room Service', desc: 'Serviço de quartos disponível' },
  { icon: Dumbbell, name: 'Ginásio', desc: 'Equipamento moderno' },
  { icon: Presentation, name: 'Sala de Reuniões', desc: 'Espaços para eventos' },
  { icon: Shirt, name: 'Lavandaria', desc: 'Lavagem e engomagem' },
  { icon: Clock, name: 'Receção 24h', desc: 'Sempre disponíveis para si' },
  { icon: Lock, name: 'Cofre', desc: 'Segurança para os seus bens' },
  { icon: ArrowUp, name: 'Elevador', desc: 'Acesso fácil a todos os pisos' },
]

export default function Services() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={ref} className="py-24 lg:py-32 bg-njinga-black relative overflow-hidden">
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-subtitle mb-4">✦ O Que Oferecemos ✦</p>
          <h2 className="section-title mb-4">
            Serviços &{' '}
            <span className="text-gold italic">Comodidades</span>
          </h2>
          <p className="font-inter text-njinga-white/55 max-w-xl mx-auto text-base">
            Tudo o que precisa para uma estadia perfeita, disponível no Hotel Rainha Njinga.
          </p>
          <div className="section-divider mt-8">
            <span className="gold-diamond">◆</span>
          </div>
        </div>

        {/* 3-col mobile, 4-col sm+, 6-col lg+ */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`group bg-njinga-charcoal border border-njinga-gray/40
                         hover:border-gold/50 p-5 text-center cursor-default relative overflow-hidden
                         transition-all duration-500 hover:-translate-y-1
                         hover:shadow-xl hover:shadow-gold/10 ${
                           visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                         }`}
              style={{ transitionDelay: `${Math.floor(i / 6) * 100 + (i % 6) * 50}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />

              <div className="w-11 h-11 bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                <service.icon
                  size={20}
                  className="text-gold transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="font-playfair text-sm font-semibold text-njinga-white mb-1 leading-tight">
                {service.name}
              </h4>
              <p className="font-inter text-[11px] text-njinga-white/45 leading-relaxed hidden sm:block">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/servicos" className="btn-outline-gold text-xs py-2.5 px-8">
            Ver Todos os Serviços em Detalhe
          </Link>
        </div>

        <div className="section-divider mt-12">
          <span className="gold-diamond">◆</span>
        </div>
      </div>
    </section>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BedDouble, Users, Maximize2, Wifi, ChevronRight, Check } from 'lucide-react'
import { rooms } from '../data/rooms'

function RoomCard({ room, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`group relative bg-njinga-charcoal overflow-hidden transition-all duration-700 ${
        room.featured
          ? 'border-2 border-gold/60 shadow-xl shadow-gold/10'
          : 'border border-njinga-gray hover:border-gold/30'
      } card-hover ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {room.badge && (
        <div className={`absolute top-4 left-4 z-20 text-xs font-inter font-bold px-3 py-1.5 tracking-wider uppercase ${
          room.featured
            ? 'bg-gold text-njinga-black'
            : 'bg-njinga-black/80 text-gold border border-gold/50'
        }`}>
          {room.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-njinga-charcoal via-njinga-charcoal/20 to-transparent" />

        {/* Price overlay */}
        <div className="absolute bottom-4 right-4 text-right">
          <p className="font-inter text-[10px] text-njinga-white/60 uppercase tracking-wider mb-0.5">A partir de</p>
          <p className="font-playfair text-3xl font-bold text-gold leading-none drop-shadow-lg">
            ${room.price}
            <span className="font-inter text-sm font-normal text-njinga-white/50">/noite</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">
            {room.type}
          </p>
          <h3 className="font-playfair text-2xl font-bold text-njinga-white">
            {room.name}
          </h3>
        </div>

        {/* Quick specs */}
        <div className="flex items-center gap-5 mb-4 py-3 border-y border-njinga-gray/40">
          <div className="flex items-center gap-1.5 text-njinga-white/60">
            <Maximize2 size={13} className="text-gold/60" />
            <span className="font-inter text-xs">{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5 text-njinga-white/60">
            <Users size={13} className="text-gold/60" />
            <span className="font-inter text-xs">{room.guests} pessoa{room.guests !== '1' ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1.5 text-njinga-white/60">
            <Wifi size={13} className="text-gold/60" />
            <span className="font-inter text-xs">Wi-Fi grátis</span>
          </div>
        </div>

        <p className="font-inter text-njinga-white/55 text-sm leading-relaxed mb-5">
          {room.desc}
        </p>

        {/* Features checklist */}
        <div className="grid grid-cols-2 gap-1.5 mb-6">
          {room.features.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <Check size={12} className="text-gold flex-shrink-0" />
              <span className="font-inter text-xs text-njinga-white/60">{f}</span>
            </div>
          ))}
        </div>

        <a
          href="#contactos"
          className={`group/btn flex items-center justify-between w-full py-3 px-5 font-inter font-semibold text-sm tracking-wider uppercase transition-all duration-300 ${
            room.featured
              ? 'bg-gold text-njinga-black hover:bg-gold-dark hover:text-njinga-white'
              : 'border border-gold text-gold hover:bg-gold hover:text-njinga-black'
          }`}
        >
          <span>Reservar Quarto</span>
          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </div>
  )
}

export default function Rooms() {
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
    <section id="quartos" ref={ref} className="py-24 lg:py-32 bg-njinga-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-subtitle mb-4">✦ Acomodação ✦</p>
          <h2 className="section-title mb-4">
            Os Nossos{' '}
            <span className="text-gold italic">Quartos</span>
          </h2>
          <p className="font-inter text-njinga-white/55 max-w-xl mx-auto text-base">
            Cada quarto foi cuidadosamente decorado para proporcionar o máximo conforto
            e refletir a elegância da cultura angolana.
          </p>
          <div className="section-divider mt-8">
            <span className="gold-diamond">◆</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-inter text-njinga-white/40 text-sm mb-5">
            Tarifas especiais disponíveis para estadias prolongadas e grupos
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/quartos" className="btn-gold">
              Ver Todos os Quartos
            </Link>
            <a href="#contactos" className="btn-outline-gold">
              Solicitar Cotação Especial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

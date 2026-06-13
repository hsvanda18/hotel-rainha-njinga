import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  BedDouble, Users, Maximize2, Wifi, Check, ChevronLeft,
  ChevronRight, Star, Shield, Clock, ArrowRight, Phone,
} from 'lucide-react'
import { rooms } from '../data/rooms.json'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const FILTER_OPTIONS = [
  { label: 'Todos', value: 'all' },
  { label: 'Suite Premium', value: 'suite' },
  { label: 'Quarto Duplo', value: 'double' },
  { label: 'Quarto Individual', value: 'single' },
]

const AMENITY_LABELS = {
  quarto: 'Quarto',
  banheiro: 'Casa de Banho',
  tecnologia: 'Tecnologia',
  servicos: 'Serviços',
}

function ImageCarousel({ images, name }) {
  const [current, setCurrent] = useState(0)

  const prev = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }
  const next = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }

  return (
    <div className="relative h-72 lg:h-80 overflow-hidden group/carousel">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${name} - foto ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-njinga-charcoal/80 via-transparent to-transparent" />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-njinga-black/60 hover:bg-gold text-white hover:text-njinga-black p-2 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-njinga-black/60 hover:bg-gold text-white hover:text-njinga-black p-2 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              i === current ? 'bg-gold w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function AmenitiesGrid({ amenities }) {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      {Object.entries(amenities).map(([key, items]) => (
        <div key={key}>
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/70 mb-2">
            {AMENITY_LABELS[key]}
          </p>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={11} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-inter text-xs text-njinga-white/60">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function RoomCard({ room }) {
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()

  const scrollToContact = () => {
    navigate('/contactos')
  }

  return (
    <div
      className={`bg-njinga-charcoal overflow-hidden transition-all duration-500 ${
        room.featured
          ? 'border-2 border-gold/60 shadow-xl shadow-gold/10'
          : 'border border-njinga-gray/50 hover:border-gold/30'
      }`}
    >
      <ImageCarousel images={room.images} name={room.name} />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">
              {room.type}
            </p>
            <h3 className="font-playfair text-2xl font-bold text-njinga-white">
              {room.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="font-inter text-[10px] text-njinga-white/40 uppercase tracking-wider">A partir de</p>
            <p className="font-playfair text-3xl font-bold text-gold leading-none">
              Kz {room.price}
              <span className="font-inter text-xs font-normal text-njinga-white/40">/noite</span>
            </p>
          </div>
        </div>

        {room.badge && (
          <span className={`inline-block text-xs font-inter font-bold px-3 py-1 tracking-wider uppercase mb-4 ${
            room.featured
              ? 'bg-gold text-njinga-black'
              : 'border border-gold/50 text-gold'
          }`}>
            {room.badge}
          </span>
        )}

        {/* Specs */}
        <div className="flex items-center gap-6 py-3 border-y border-njinga-gray/30 mb-4">
          <div className="flex items-center gap-1.5 text-njinga-white/50">
            <Maximize2 size={13} className="text-gold/60" />
            <span className="font-inter text-xs">{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5 text-njinga-white/50">
            <Users size={13} className="text-gold/60" />
            <span className="font-inter text-xs">
              {room.guests} pessoa{room.guests !== '1' ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-njinga-white/50">
            <Wifi size={13} className="text-gold/60" />
            <span className="font-inter text-xs">Wi-Fi grátis</span>
          </div>
        </div>

        <p className="font-inter text-njinga-white/50 text-sm leading-relaxed mb-5">
          {room.desc}
        </p>

        {/* Quick features */}
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {room.features.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <Check size={11} className="text-gold flex-shrink-0" />
              <span className="font-inter text-xs text-njinga-white/55">{f}</span>
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-inter text-xs text-gold/70 hover:text-gold tracking-wider uppercase flex items-center gap-1.5 mb-5 transition-colors duration-200"
        >
          {expanded ? 'Ocultar detalhes' : 'Ver todos os detalhes'}
          <ChevronRight
            size={13}
            className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}
          />
        </button>

        {/* Expanded amenities */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <AmenitiesGrid amenities={room.amenities} />

          {/* Policies */}
          <div className="mt-6 pt-5 border-t border-njinga-gray/30 space-y-2">
            <div className="flex items-start gap-2 text-njinga-white/50">
              <Clock size={13} className="text-gold/60 mt-0.5 flex-shrink-0" />
              <span className="font-inter text-xs">Check-in: {room.checkin} · Check-out: {room.checkout}</span>
            </div>
            <div className="flex items-start gap-2 text-njinga-white/50">
              <Shield size={13} className="text-gold/60 mt-0.5 flex-shrink-0" />
              <span className="font-inter text-xs">{room.cancelPolicy}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={scrollToContact}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 font-inter font-semibold text-sm tracking-wider uppercase transition-all duration-300 ${
              room.featured
                ? 'bg-gold text-njinga-black hover:bg-gold-dark'
                : 'border border-gold text-gold hover:bg-gold hover:text-njinga-black'
            }`}
          >
            Reservar
            <ArrowRight size={15} />
          </button>
          <a
            href="tel:+244923456789"
            className="flex items-center justify-center gap-2 py-3 px-4 border border-njinga-gray/40 text-njinga-white/50 hover:border-gold/30 hover:text-gold font-inter text-sm transition-all duration-300"
          >
            <Phone size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function RoomsPage() {
  const [filter, setFilter] = useState('all')
  const [sortByPrice, setSortByPrice] = useState('asc')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filtered = rooms
    .filter((r) => filter === 'all' || r.id === filter)
    .sort((a, b) =>
      sortByPrice === 'asc'
        ? Number(a.price) - Number(b.price)
        : Number(b.price) - Number(a.price)
    )

  return (
    <div className="min-h-screen bg-njinga-black text-njinga-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-njinga-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80&auto=format&fit=crop"
            alt="Quartos do hotel"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-njinga-black/60 via-njinga-charcoal/80 to-njinga-charcoal" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-subtitle mb-4">✦ Acomodação ✦</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-njinga-white mb-5 leading-tight">
              Os Nossos{' '}
              <span className="text-gold italic">Quartos</span>
            </h1>
            <p className="font-inter text-njinga-white/55 max-w-xl text-base mb-8">
              {rooms.length} tipos de acomodação cuidadosamente decorados para proporcionar
              o máximo conforto com a elegância da cultura angolana.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              {[
                { icon: Star, label: '4.9 / 5 avaliações' },
                { icon: Shield, label: 'Cancelamento gratuito' },
                { icon: Clock, label: 'Check-in às 14h' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-njinga-white/50">
                  <Icon size={14} className="text-gold" />
                  <span className="font-inter text-xs tracking-wide">{label}</span>
                </div>
              ))}
            </div>

            <div className="section-divider mt-10">
              <span className="gold-diamond">◆</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-40 bg-njinga-black/95 backdrop-blur-md border-b border-njinga-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-4 flex-wrap">
            {/* Type filter */}
            <div className="flex gap-2 flex-wrap">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`font-inter text-xs tracking-wider uppercase px-4 py-2 transition-all duration-200 ${
                    filter === opt.value
                      ? 'bg-gold text-njinga-black font-semibold'
                      : 'border border-njinga-gray/50 text-njinga-white/50 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="font-inter text-xs text-njinga-white/30 uppercase tracking-wider">Ordenar:</span>
              <button
                onClick={() => setSortByPrice((s) => (s === 'asc' ? 'desc' : 'asc'))}
                className="font-inter text-xs text-gold/70 hover:text-gold tracking-wider uppercase flex items-center gap-1.5 transition-colors duration-200"
              >
                Preço {sortByPrice === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-njinga-white/40 font-inter py-20">
              Nenhum quarto encontrado.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-20 py-12 border-t border-njinga-gray/20">
            <p className="font-inter text-njinga-white/40 text-sm mb-3">
              Grupo ou estadia prolongada? Temos tarifas especiais.
            </p>
            <p className="font-inter text-njinga-white/25 text-xs mb-6">
              Contacte-nos directamente para obter a melhor oferta personalizada.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="tel:+244923456789" className="btn-gold text-xs py-3 px-8">
                Ligar Agora
              </a>
              <Link to="/" className="btn-outline-gold text-xs py-3 px-8">
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Briefcase, Mic, Heart, PartyPopper, Users, Maximize2,
  Check, ChevronRight, ArrowRight, Phone, Star, Calendar,
  Monitor, Wifi, Volume2, Video, Lightbulb, PenLine, Headphones,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { spaces, eventTypes, equipment, packages } from '../data/events'

const EVENT_ICONS = { Briefcase, Mic, Heart, PartyPopper }

const EQUIP_ICONS = [Monitor, Maximize2, Volume2, Video, Wifi, Lightbulb, PenLine, Headphones]

const CAPACITY_LABELS = {
  teatro: 'Teatro',
  banquete: 'Banquete',
  cocktail: 'Cocktail',
  escola: 'Escola',
}

function SpaceCard({ space, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full transition-all duration-300 border p-5 ${
        active
          ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
          : 'border-njinga-gray/40 hover:border-gold/40 bg-njinga-charcoal'
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className={`font-playfair text-lg font-bold leading-snug ${active ? 'text-gold' : 'text-njinga-white'}`}>
          {space.name}
        </h3>
        <span className={`font-inter text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 flex-shrink-0 ${
          active ? 'bg-gold text-njinga-black' : 'border border-gold/40 text-gold/70'
        }`}>
          {space.badge}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-njinga-white/40">
          <Maximize2 size={11} className="text-gold/50" />
          <span className="font-inter text-xs">{space.size}</span>
        </div>
        <div className="flex items-center gap-1.5 text-njinga-white/40">
          <Users size={11} className="text-gold/50" />
          <span className="font-inter text-xs">
            até {Math.max(...Object.values(space.capacity).filter(Boolean))} pessoas
          </span>
        </div>
      </div>
    </button>
  )
}

function SpaceDetail({ space }) {
  return (
    <div className="bg-njinga-charcoal border border-njinga-gray/30 overflow-hidden">
      <div className="relative h-72 lg:h-80 overflow-hidden">
        <img
          src={space.image}
          alt={space.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-njinga-charcoal via-njinga-charcoal/20 to-transparent" />
        <div className="absolute bottom-5 left-6">
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/70 mb-1">Espaço</p>
          <h3 className="font-playfair text-3xl font-bold text-njinga-white">{space.name}</h3>
        </div>
      </div>

      <div className="p-7">
        <p className="font-inter text-njinga-white/50 text-sm leading-relaxed mb-6">
          {space.desc}
        </p>

        {/* Capacity grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {Object.entries(space.capacity).map(([key, val]) =>
            val ? (
              <div key={key} className="bg-njinga-black/50 border border-njinga-gray/20 p-3 text-center">
                <p className="font-playfair text-2xl font-bold text-gold">{val}</p>
                <p className="font-inter text-[10px] text-njinga-white/35 uppercase tracking-wider mt-0.5">
                  {CAPACITY_LABELS[key]}
                </p>
              </div>
            ) : null
          )}
        </div>

        {/* Features */}
        <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3">
          Equipamento & Características
        </p>
        <div className="grid grid-cols-2 gap-2">
          {space.features.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <Check size={12} className="text-gold mt-0.5 flex-shrink-0" />
              <span className="font-inter text-xs text-njinga-white/55">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function EventsPage() {
  const [activeSpace, setActiveSpace] = useState(spaces[0].id)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const selectedSpace = spaces.find((s) => s.id === activeSpace)

  return (
    <div className="min-h-screen bg-njinga-black text-njinga-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80&auto=format&fit=crop"
            alt="Eventos & Reuniões"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-njinga-black/70 via-njinga-black/60 to-njinga-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-subtitle mb-4">✦ Espaços & Eventos ✦</p>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-njinga-white mb-5 leading-tight">
              Eventos &{' '}
              <span className="text-gold italic">Reuniões</span>
            </h1>
            <p className="font-inter text-njinga-white/60 text-base leading-relaxed mb-8 max-w-lg">
              Espaços versáteis e equipados para os seus momentos mais importantes.
              Do encontro executivo à celebração que nunca será esquecida.
            </p>

            <div className="flex items-center gap-6 flex-wrap mb-10">
              {[
                { icon: Users, label: 'Até 250 pessoas' },
                { icon: Star, label: '3 espaços distintos' },
                { icon: Calendar, label: 'Coordenação incluída' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-njinga-white/50">
                  <Icon size={14} className="text-gold" />
                  <span className="font-inter text-xs tracking-wide">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate('/contactos')}
                className="btn-gold text-xs py-3 px-8 flex items-center gap-2"
              >
                Solicitar Proposta
                <ArrowRight size={14} />
              </button>
              <a href="tel:+244923456789" className="btn-outline-gold text-xs py-3 px-8 flex items-center gap-2">
                <Phone size={14} />
                Falar Connosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces selector */}
      <section className="py-20 bg-njinga-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">✦ Os Nossos Espaços ✦</p>
            <h2 className="section-title mb-4">
              Escolha o{' '}
              <span className="text-gold italic">Espaço Ideal</span>
            </h2>
            <p className="font-inter text-njinga-white/50 max-w-lg mx-auto text-sm">
              Cada espaço foi concebido para diferentes tipos de evento, com toda a flexibilidade
              e equipamento que necessita.
            </p>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Space selector (left column on desktop, top on mobile) */}
            <div className="space-y-3 lg:col-span-1">
              {spaces.map((space) => (
                <SpaceCard
                  key={space.id}
                  space={space}
                  active={activeSpace === space.id}
                  onClick={() => setActiveSpace(space.id)}
                />
              ))}

              {/* Quick contact */}
              <div className="bg-gold/5 border border-gold/20 p-5 mt-4">
                <p className="font-inter text-xs text-njinga-white/50 leading-relaxed mb-3">
                  Precisa de uma configuração personalizada ou tem dúvidas sobre os espaços?
                </p>
                <a
                  href="tel:+244923456789"
                  className="font-inter text-xs text-gold hover:text-gold-light flex items-center gap-2 transition-colors duration-200"
                >
                  <Phone size={12} />
                  +244 923 456 789
                </a>
              </div>
            </div>

            {/* Space detail (right/main area) */}
            <div className="lg:col-span-2">
              <SpaceDetail space={selectedSpace} />
            </div>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="py-20 bg-njinga-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">✦ Tipos de Evento ✦</p>
            <h2 className="section-title mb-4">
              O Que{' '}
              <span className="text-gold italic">Organizamos</span>
            </h2>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type) => {
              const Icon = EVENT_ICONS[type.icon]
              return (
                <div
                  key={type.id}
                  className="group bg-njinga-charcoal border border-njinga-gray/40 hover:border-gold/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10"
                >
                  <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-njinga-white mb-3 leading-snug">
                    {type.name}
                  </h3>
                  <p className="font-inter text-xs text-njinga-white/45 leading-relaxed mb-5">
                    {type.desc}
                  </p>
                  <ul className="space-y-2">
                    {type.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check size={11} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-[11px] text-njinga-white/50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-njinga-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-4">✦ Tecnologia ✦</p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-njinga-white mb-5 leading-tight">
                Equipamento{' '}
                <span className="text-gold italic">Profissional</span>
              </h2>
              <p className="font-inter text-njinga-white/50 text-sm leading-relaxed mb-8">
                Todos os nossos espaços estão equipados com tecnologia de ponta para garantir
                que a sua apresentação, reunião ou evento decorra sem contratempos.
                O nosso técnico de audiovisual está disponível durante todo o evento.
              </p>
              <button
                onClick={() => navigate('/contactos')}
                className="btn-outline-gold text-xs py-3 px-8 flex items-center gap-2 w-fit"
              >
                Verificar Disponibilidade
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {equipment.map((item, i) => {
                const Icon = EQUIP_ICONS[i % EQUIP_ICONS.length]
                return (
                  <div
                    key={item.name}
                    className="bg-njinga-black/50 border border-njinga-gray/30 hover:border-gold/30 p-5 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={16} className="text-gold/70 group-hover:text-gold transition-colors duration-200 flex-shrink-0" />
                      <p className="font-inter font-semibold text-sm text-njinga-white">
                        {item.name}
                      </p>
                    </div>
                    <p className="font-inter text-[11px] text-njinga-white/35 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-njinga-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">✦ Pacotes ✦</p>
            <h2 className="section-title mb-4">
              Pacotes &{' '}
              <span className="text-gold italic">Preços</span>
            </h2>
            <p className="font-inter text-njinga-white/50 max-w-lg mx-auto text-sm">
              Soluções pensadas para diferentes necessidades. Todos os pacotes incluem
              coordenação, estacionamento e suporte técnico.
            </p>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col border transition-all duration-300 ${
                  pkg.highlight
                    ? 'border-gold/60 bg-gold/5 shadow-xl shadow-gold/10'
                    : 'border-njinga-gray/40 bg-njinga-charcoal hover:border-gold/30'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-njinga-black font-inter font-bold text-[10px] tracking-wider uppercase px-4 py-1">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1">
                  <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">
                    {pkg.unit}
                  </p>
                  <h3 className="font-playfair text-2xl font-bold text-njinga-white mb-1">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    {pkg.price === 'Sob consulta' ? (
                      <p className="font-playfair text-2xl font-bold text-gold">Sob consulta</p>
                    ) : (
                      <>
                        <p className="font-inter text-xs text-njinga-white/35">A partir de</p>
                        <p className="font-playfair text-3xl font-bold text-gold">${pkg.price}</p>
                      </>
                    )}
                  </div>

                  <p className="font-inter text-xs text-njinga-white/45 mb-6 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="border-t border-njinga-gray/20 pt-5">
                    <p className="font-inter text-[10px] tracking-[0.15em] uppercase text-gold/50 mb-3">
                      Inclui
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check size={12} className="text-gold mt-0.5 flex-shrink-0" />
                          <span className="font-inter text-xs text-njinga-white/55">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <button
                    onClick={() => navigate('/contactos')}
                    className={`w-full flex items-center justify-center gap-2 py-3 font-inter font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                      pkg.highlight
                        ? 'bg-gold text-njinga-black hover:bg-gold-dark'
                        : 'border border-gold text-gold hover:bg-gold hover:text-njinga-black'
                    }`}
                  >
                    {pkg.price === 'Sob consulta' ? 'Pedir Proposta' : 'Reservar Agora'}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="font-inter text-[11px] text-njinga-white/25 text-center mt-8">
            Preços em USD, sujeitos a IVA. Pacotes personalizados disponíveis mediante consulta.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-njinga-charcoal">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="section-subtitle mb-4">✦ Fale Connosco ✦</p>
          <h2 className="font-playfair text-4xl font-bold text-njinga-white mb-4">
            Vamos planear o seu{' '}
            <span className="text-gold italic">evento</span>
          </h2>
          <p className="font-inter text-njinga-white/45 text-sm mb-8">
            A nossa equipa de coordenação está disponível para criar uma proposta
            personalizada para o seu evento.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/contactos')}
              className="btn-gold text-xs py-3 px-10 flex items-center gap-2"
            >
              Solicitar Proposta
              <ArrowRight size={14} />
            </button>
            <Link to="/" className="btn-outline-gold text-xs py-3 px-10">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

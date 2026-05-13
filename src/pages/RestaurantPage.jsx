import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Utensils, Wine, Clock, Users, ChevronRight, Star,
  Phone, ArrowRight, Leaf, Flame, Coffee,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { menu, hours, highlights } from '../data/restaurant'

const TABS = [
  { key: 'entradas', label: 'Entradas', icon: Utensils },
  { key: 'principais', label: 'Pratos Principais', icon: Flame },
  { key: 'sobremesas', label: 'Sobremesas', icon: Coffee },
  { key: 'cocktails', label: 'Bar & Cocktails', icon: Wine },
]

const BADGE_STYLES = {
  'Tradicional': 'bg-gold/15 text-gold border border-gold/30',
  'Vegetariano': 'bg-green-900/30 text-green-400 border border-green-700/40',
  'Sem Glúten': 'bg-blue-900/30 text-blue-400 border border-blue-700/40',
  'Premium': 'bg-purple-900/30 text-purple-400 border border-purple-700/40',
  'Assinatura': 'bg-gold/15 text-gold border border-gold/30',
  'Sem Álcool': 'bg-green-900/30 text-green-400 border border-green-700/40',
}

function Badge({ label }) {
  return (
    <span className={`font-inter text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 ${BADGE_STYLES[label] || 'bg-njinga-gray/40 text-njinga-white/50 border border-njinga-gray/50'}`}>
      {label}
    </span>
  )
}

function MenuItem({ item }) {
  return (
    <div className={`group flex items-start justify-between gap-4 py-5 border-b border-njinga-gray/20 last:border-0 transition-all duration-200 hover:pl-2 ${item.featured ? 'pl-2 border-l-2 border-l-gold/50' : ''}`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <h4 className={`font-playfair font-bold text-base leading-snug ${item.featured ? 'text-gold' : 'text-njinga-white'}`}>
            {item.name}
          </h4>
          {item.featured && (
            <span className="font-inter text-[10px] font-bold tracking-wider uppercase bg-gold text-njinga-black px-2 py-0.5">
              Chef's Choice
            </span>
          )}
        </div>
        <p className="font-inter text-xs text-njinga-white/45 leading-relaxed mb-2">
          {item.desc}
        </p>
        {item.badges?.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {item.badges.map((b) => <Badge key={b} label={b} />)}
          </div>
        )}
      </div>
      <p className="font-playfair text-lg font-bold text-gold flex-shrink-0 pt-0.5">
        ${item.price}
      </p>
    </div>
  )
}

export default function RestaurantPage() {
  const [activeTab, setActiveTab] = useState('principais')
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const items = menu[activeTab] || []

  return (
    <div className="min-h-screen bg-njinga-black text-njinga-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop"
            alt="Restaurante Njinga"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-njinga-black/70 via-njinga-black/60 to-njinga-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-subtitle mb-4">✦ Gastronomia ✦</p>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-njinga-white mb-5 leading-tight">
              Restaurante{' '}
              <span className="text-gold italic">Njinga</span>
            </h1>
            <p className="font-inter text-njinga-white/60 text-base leading-relaxed mb-8 max-w-lg">
              Uma viagem pelos sabores autênticos de Angola e do mundo. Cozinha contemporânea
              que honra as raízes e celebra a cultura angolana.
            </p>

            <div className="flex items-center gap-6 flex-wrap mb-10">
              {[
                { icon: Star, label: '4.8 / 5 — Restaurante' },
                { icon: Users, label: '80 lugares' },
                { icon: Clock, label: 'Aberto todos os dias' },
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
                Reservar Mesa
                <ArrowRight size={14} />
              </button>
              <a href="tel:+244923456789" className="btn-outline-gold text-xs py-3 px-8 flex items-center gap-2">
                <Phone size={14} />
                Ligar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights + Hours */}
      <section className="bg-njinga-charcoal border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info cards */}
            <div>
              <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-5">
                O Espaço
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlights.map((h) => (
                  <div key={h.label} className="bg-njinga-black/40 border border-njinga-gray/30 p-5">
                    <p className="font-inter text-[10px] tracking-[0.15em] uppercase text-njinga-white/35 mb-1">
                      {h.label}
                    </p>
                    <p className="font-playfair text-lg font-bold text-njinga-white">
                      {h.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-njinga-black/40 border border-gold/15 p-6">
                <div className="flex items-start gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&q=80&auto=format&fit=crop"
                    alt="Chef João Kimbembe"
                    className="w-16 h-16 object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">
                      Chef Executivo
                    </p>
                    <p className="font-playfair text-lg font-bold text-njinga-white mb-1">
                      João Kimbembe
                    </p>
                    <p className="font-inter text-xs text-njinga-white/45 leading-relaxed">
                      Formado em Paris, especialista em cozinha angolana contemporânea com 15 anos de experiência
                      em restaurantes de referência em Lisboa e Luanda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-5">
                Horários
              </p>
              <div className="space-y-0">
                {hours.map((h, i) => (
                  <div
                    key={h.meal}
                    className={`flex items-center justify-between py-4 border-b border-njinga-gray/20 ${i === 0 ? 'border-t border-njinga-gray/20' : ''}`}
                  >
                    <div>
                      <p className="font-inter font-semibold text-sm text-njinga-white">
                        {h.meal}
                      </p>
                      <p className="font-inter text-[11px] text-njinga-white/35">{h.days}</p>
                    </div>
                    <p className="font-playfair text-base text-gold font-bold">
                      {h.time}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gold/5 border border-gold/20 p-5">
                <p className="font-inter text-xs text-njinga-white/50 leading-relaxed">
                  <span className="text-gold font-semibold">Reservas recomendadas</span> para jantar.
                  Para grupos de 8 ou mais pessoas, contacte-nos com antecedência mínima de 48h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">✦ Ementa ✦</p>
            <h2 className="section-title mb-4">
              A Nossa{' '}
              <span className="text-gold italic">Ementa</span>
            </h2>
            <p className="font-inter text-njinga-white/50 max-w-lg mx-auto text-sm">
              Ingredientes frescos, fornecedores locais angolanos e receitas que atravessam gerações.
            </p>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex gap-2 flex-wrap justify-center mb-12">
            {TABS.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 font-inter text-xs tracking-wider uppercase px-5 py-3 transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-gold text-njinga-black font-semibold'
                      : 'border border-njinga-gray/50 text-njinga-white/50 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  <Icon size={13} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Menu items grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            <div>
              {items.slice(0, Math.ceil(items.length / 2)).map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
            <div>
              {items.slice(Math.ceil(items.length / 2)).map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <p className="font-inter text-[11px] text-njinga-white/25 text-center mt-10">
            Os preços estão em USD e não incluem IVA. Ementa sujeita a alterações sazonais.
          </p>
        </div>
      </section>

      {/* Bar & Lounge photo strip */}
      <section className="bg-njinga-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle mb-4">✦ Ambiente ✦</p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-njinga-white mb-5 leading-tight">
                Bar &{' '}
                <span className="text-gold italic">Lounge</span>
              </h2>
              <p className="font-inter text-njinga-white/50 text-sm leading-relaxed mb-6">
                O coração social do Hotel Rainha Njinga. Um espaço íntimo com vista para a cidade
                onde a música ao vivo, os cocktails de autor e a companhia certa se encontram
                todas as noites.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Cocktails de autor com ingredientes angolanos',
                  'Música ao vivo às Sextas e Sábados (21h–00h)',
                  'Seleção de vinhos e espumantes importados',
                  'Happy Hour das 18h às 20h com 20% de desconto',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0">◆</span>
                    <span className="font-inter text-sm text-njinga-white/55">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { setActiveTab('cocktails'); window.scrollTo({ top: document.querySelector('#menu-section')?.offsetTop - 100 || 600, behavior: 'smooth' }) }}
                className="btn-outline-gold text-xs py-3 px-8 flex items-center gap-2 w-fit"
              >
                Ver Cocktails
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&q=80&auto=format&fit=crop"
                alt="Bar do hotel"
                className="w-full h-56 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80&auto=format&fit=crop"
                alt="Cocktails do bar"
                className="w-full h-56 object-cover mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80&auto=format&fit=crop"
                alt="Interior do restaurante"
                className="w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop"
                alt="Prato do restaurante"
                className="w-full h-48 object-cover mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-njinga-black">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="section-subtitle mb-4">✦ Reserve já ✦</p>
          <h2 className="font-playfair text-4xl font-bold text-njinga-white mb-4">
            Uma experiência{' '}
            <span className="text-gold italic">inesquecível</span>
          </h2>
          <p className="font-inter text-njinga-white/45 text-sm mb-8">
            Reserve a sua mesa ou ligue-nos para grupos e eventos especiais.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/contactos')}
              className="btn-gold text-xs py-3 px-10 flex items-center gap-2"
            >
              Reservar Mesa
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

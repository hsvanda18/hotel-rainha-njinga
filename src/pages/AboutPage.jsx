import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  MapPin, Shield, Clock, Award, Heart, Star, Users,
  ArrowRight, Quote, Leaf, Lightbulb, Handshake,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutData from '../data/about.json'

const { milestones, team, stats, mission, vision, values } = aboutData
const ICON_MAP = { Shield, Lightbulb, Handshake, Award, Heart, Leaf, MapPin, Clock, Star, Users }

function useVisible(threshold = 0.15) {
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

export default function AboutPage() {
  const navigate = useNavigate()
  const [heroRef, heroVisible] = useVisible(0.1)
  const [storyRef, storyVisible] = useVisible(0.1)
  const [njingaRef, njingaVisible] = useVisible(0.1)
  const [valuesRef, valuesVisible] = useVisible(0.1)
  const [timelineRef, timelineVisible] = useVisible(0.05)
  const [teamRef, teamVisible] = useVisible(0.05)
  const [statsRef, statsVisible] = useVisible(0.1)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-njinga-black text-njinga-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hotel/IMG_8977.jpeg"
            alt="Hotel Rainha Njinga"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-njinga-black/70 via-njinga-black/50 to-njinga-black" />
        </div>

        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-subtitle mb-4">✦ Sobre Nós ✦</p>
            <h1
              className={`font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-njinga-white mb-5 leading-tight transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A Nossa{' '}
              <span className="text-gold italic">História</span>
            </h1>
            <p
              className={`font-inter text-njinga-white/60 text-base leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-150 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Inspirados pela grandeza da Rainha Njinga Mbande, combinamos a rica herança cultural
              de Angola com o conforto moderno e a hospitalidade que nos define desde 2016.
            </p>

            <div
              className={`flex items-center gap-6 flex-wrap transition-all duration-700 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                { icon: Star, label: '3 Estrelas' },
                { icon: Award, label: 'Desde 2016' },
                { icon: MapPin, label: 'Morro Bento, Luanda' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-njinga-white/50">
                  <Icon size={14} className="text-gold" />
                  <span className="font-inter text-xs tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section ref={statsRef} className="bg-njinga-charcoal border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center py-4 transition-all duration-700 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${i < stats.length - 1 ? 'border-r border-njinga-gray/30' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-playfair text-3xl lg:text-4xl font-bold text-gold">{s.value}</p>
                <p className="font-inter text-[10px] uppercase tracking-widest text-njinga-white/40 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História */}
      <section ref={storyRef} className="py-24 bg-njinga-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div
              className={`transition-all duration-700 ${
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative">
                <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-gold/20 pointer-events-none" />
                <div className="relative overflow-hidden">
                  <img
                    src="/images/hotel/IMG_8986.jpeg"
                    alt="Lobby do Hotel Rainha Njinga"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-njinga-black/50 via-transparent to-transparent" />
                </div>
                <div className="absolute top-6 right-6 bg-gold text-njinga-black p-4 text-center shadow-xl shadow-gold/20">
                  <Award size={22} className="mx-auto mb-1" />
                  <p className="font-playfair font-bold text-xl leading-none">3</p>
                  <p className="font-inter text-[10px] uppercase tracking-widest font-bold mt-0.5">Estrelas</p>
                </div>
                <div className="absolute bottom-6 left-6 glass-card px-4 py-2">
                  <p className="font-inter text-xs text-gold tracking-widest uppercase">Morro Bento, Luanda</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div
              className={`transition-all duration-700 delay-200 ${
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <p className="section-subtitle mb-4">✦ A Nossa História ✦</p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-njinga-white mb-6 leading-tight">
                O coração de{' '}
                <span className="text-gold">Luanda</span>{' '}
                à sua disposição
              </h2>
              <p className="font-inter text-njinga-white/60 text-base leading-relaxed mb-5">
                Fundado a <strong className="text-gold font-semibold">23 de maio de 2016</strong>, o Hotel Rainha Njinga nasceu com a missão de proporcionar serviços de hotelaria com excelência de qualidade, no Bairro Morro Bento, Distrito do Samba, Luanda. O nome homenageia a Rainha Njinga Mbande, símbolo de força, diplomacia e identidade angolana.
              </p>
              <p className="font-inter text-njinga-white/60 text-base leading-relaxed mb-8">
                Ao longo de 10 anos, crescemos e consolidámos a nossa posição no mercado, com{' '}
                <strong className="text-gold font-semibold">32 profissionais</strong> dedicados e uma oferta completa que inclui restaurante, bar, sala de eventos e serviços de excelência para hóspedes de negócios e lazer.
              </p>

              <div className="grid grid-cols-3 gap-0 py-6 border-y border-gold/20 mb-8">
                {[
                  { n: '52', l: 'Quartos' },
                  { n: '3', l: 'Pisos' },
                  { n: '12+', l: 'Serviços' },
                ].map((s, i) => (
                  <div key={s.l} className={`text-center ${i < 2 ? 'border-r border-gold/20' : ''}`}>
                    <p className="font-playfair text-3xl font-bold text-gold">{s.n}</p>
                    <p className="font-inter text-[11px] uppercase tracking-widest text-njinga-white/50 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('/contactos')}
                className="btn-gold flex items-center gap-2 w-fit"
              >
                Fazer uma Reserva
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rainha Njinga */}
      <section ref={njingaRef} className="py-24 bg-njinga-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div
              className={`transition-all duration-700 ${
                njingaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="section-subtitle mb-4">✦ A Nossa Inspiração ✦</p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-njinga-white mb-6 leading-tight">
                Rainha{' '}
                <span className="text-gold italic">Njinga Mbande</span>
              </h2>

              <div className="relative mb-6">
                <Quote size={36} className="text-gold/20 absolute -top-2 -left-2" />
                <p className="font-playfair text-lg text-njinga-white/80 italic leading-relaxed pl-6">
                  "Uma mulher de extraordinária habilidade política, diplomática e militar,
                  cujo legado moldou a identidade angolana para sempre."
                </p>
              </div>

              <p className="font-inter text-njinga-white/60 text-base leading-relaxed mb-5">
                Njinga Mbande (c. 1583–1663) foi rainha dos reinos Ndongo e Matamba, no actual território
                de Angola. Reconhecida internacionalmente pela sua inteligência diplomática, coragem
                e visão estratégica, tornou-se um dos maiores símbolos de resistência e liderança feminina
                em África.
              </p>
              <p className="font-inter text-njinga-white/60 text-base leading-relaxed mb-5">
                O nosso hotel homenageia este legado extraordinário. Tal como a Rainha Njinga soube
                navegar entre culturas, tradições e modernidade, também nós procuramos criar uma
                ponte entre a identidade cultural angolana e a hospitalidade contemporânea.
              </p>
              <p className="font-inter text-njinga-white/60 text-base leading-relaxed">
                Cada detalhe do hotel — da decoração aos nomes dos pratos do restaurante,
                da suite principal aos coquetéis do bar — é uma homenagem à sua memória
                e ao povo angolano.
              </p>
            </div>

            {/* Image */}
            <div
              className={`transition-all duration-700 delay-200 ${
                njingaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gold/20 pointer-events-none" />
                <img
                  src="/images/hotel/IMG_8987.jpeg"
                  alt="Decoração angolana no Hotel Rainha Njinga"
                  className="w-full h-[480px] object-cover relative"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-njinga-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 bg-gold/10 border border-gold/30 backdrop-blur-sm px-5 py-4 max-w-[220px]">
                  <p className="font-inter text-[10px] text-gold/70 uppercase tracking-widest mb-1">Símbolo de</p>
                  <p className="font-playfair text-njinga-white font-bold text-lg leading-snug">
                    Força, Diplomacia & Identidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section ref={valuesRef} className="py-24 bg-njinga-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">✦ Quem Somos ✦</p>
            <h2 className="section-title mb-4">
              Missão, Visão &{' '}
              <span className="text-gold italic">Valores</span>
            </h2>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          {/* Missão & Visão */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { label: 'Missão', text: mission },
              { label: 'Visão', text: vision },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`bg-njinga-charcoal border border-njinga-gray/40 p-8 transition-all duration-700 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                  {item.label}
                </p>
                <p className="font-playfair text-lg text-njinga-white leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = ICON_MAP[v.icon]
              return (
                <div
                  key={v.title}
                  className={`group bg-njinga-charcoal border border-njinga-gray/40 hover:border-gold/40 p-8 text-center relative overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 ${
                    valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-14 h-14 bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h4 className="font-playfair text-lg font-bold text-njinga-white mb-3">{v.title}</h4>
                  <p className="font-inter text-njinga-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 bg-njinga-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">✦ Cronologia ✦</p>
            <h2 className="section-title mb-4">
              10 Anos de{' '}
              <span className="text-gold italic">Excelência</span>
            </h2>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div
                    key={m.year}
                    className={`relative flex items-start gap-8 md:gap-0 transition-all duration-700 ${
                      timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 md:w-[calc(50%-2rem)] pl-16 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">{m.year}</p>
                      <h4 className="font-playfair text-xl font-bold text-njinga-white mb-2">{m.title}</h4>
                      <p className="font-inter text-njinga-white/50 text-sm leading-relaxed">{m.desc}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-2 border-njinga-charcoal shadow-lg shadow-gold/30 flex-shrink-0 mt-1" />

                    {/* Empty half for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section ref={teamRef} className="py-24 bg-njinga-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">✦ As Pessoas ✦</p>
            <h2 className="section-title mb-4">
              A Nossa{' '}
              <span className="text-gold italic">Equipa</span>
            </h2>
            <p className="font-inter text-njinga-white/50 max-w-lg mx-auto text-sm">
              32 profissionais dedicados a fazer de cada estadia uma experiência única.
              Conheça quem lidera o Hotel Rainha Njinga.
            </p>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`group transition-all duration-700 ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative overflow-hidden mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-njinga-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-all duration-300 pointer-events-none" />
                </div>
                <div>
                  <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">
                    {member.role}
                  </p>
                  <h4 className="font-playfair text-lg font-bold text-njinga-white mb-2">
                    {member.name}
                  </h4>
                  <p className="font-inter text-njinga-white/45 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="py-24 bg-njinga-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-4">✦ Porquê Nós ✦</p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-njinga-white mb-6 leading-tight">
                Por que escolher o{' '}
                <span className="text-gold italic">Hotel Rainha Njinga?</span>
              </h2>
              <p className="font-inter text-njinga-white/55 text-sm leading-relaxed mb-8">
                Mais do que um hotel, somos uma experiência cultural. Cada detalhe foi pensado
                para que sinta a alma de Angola ao mesmo tempo que desfruta de todo o conforto moderno.
              </p>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: 'Localização Privilegiada', desc: 'No coração de Morro Bento, a 20 minutos do aeroporto e próximo dos centros de negócios.' },
                  { icon: Shield, title: 'Segurança & Conforto', desc: '52 quartos com segurança 24h, cofre individual e todas as comodidades para uma estadia tranquila.' },
                  { icon: Clock, title: 'Serviço 24 Horas', desc: 'Recepção, room service e assistência disponíveis a qualquer hora do dia ou da noite.' },
                  { icon: Users, title: 'Equipa Dedicada', desc: '32 colaboradores formados para oferecer um serviço personalizado e caloroso.' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-bold text-njinga-white mb-1">{item.title}</h4>
                        <p className="font-inter text-njinga-white/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="/images/hotel/IMG_8982.jpeg"
                alt="Suite Premium — Hotel Rainha Njinga"
                className="w-full h-56 object-cover"
              />
              <img
                src="/images/hotel/IMG_8981.jpeg"
                alt="Restaurante Njinga"
                className="w-full h-56 object-cover mt-8"
              />
              <img
                src="/images/hotel/IMG_8983.jpeg"
                alt="Bar do Hotel Rainha Njinga"
                className="w-full h-48 object-cover"
              />
              <img
                src="/images/hotel/IMG_8990.jpeg"
                alt="Sala de Eventos — Hotel Rainha Njinga"
                className="w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-njinga-black">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="section-subtitle mb-4">✦ Venha Conhecer-nos ✦</p>
          <h2 className="font-playfair text-4xl font-bold text-njinga-white mb-4">
            A sua estadia{' '}
            <span className="text-gold italic">começa aqui</span>
          </h2>
          <p className="font-inter text-njinga-white/45 text-sm mb-8">
            Reserve o seu quarto ou contacte-nos para qualquer informação.
            Teremos muito gosto em recebê-lo.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/contactos')}
              className="btn-gold text-xs py-3 px-10 flex items-center gap-2"
            >
              Fazer Reserva
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

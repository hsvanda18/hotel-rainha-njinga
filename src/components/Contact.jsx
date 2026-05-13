import React, { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Morada',
    lines: [
      'Bairro Morro Bento, Rua dos Generais S/N',
      'Paralela à Av. Pedro de Castro Van-Dúnen "Loy"',
      'Luanda, Angola',
    ],
  },
  {
    icon: Phone,
    title: 'Telefone',
    lines: ['+244 923 456 789', '+244 222 345 678'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['reservas@hotelrainhanjinga.ao', 'info@hotelrainhanjinga.ao'],
  },
  {
    icon: Clock,
    title: 'Horário de Receção',
    lines: ['Aberto 24 horas', '7 dias por semana'],
  },
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', checkin: '', checkout: '', guests: '1', message: '',
  })
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
    setForm({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: '1', message: '' })
  }

  const inputClass = `input-gold`

  return (
    <section id="contactos" ref={ref} className="py-24 lg:py-32 bg-njinga-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-subtitle mb-4">✦ Contactos ✦</p>
          <h2 className="section-title mb-4">
            Entre em{' '}
            <span className="text-gold italic">Contacto</span>
          </h2>
          <p className="font-inter text-njinga-white/55 max-w-xl mx-auto text-base">
            A nossa equipa está disponível 24 horas por dia para ajudar na sua reserva
            ou responder a qualquer questão.
          </p>
          <div className="section-divider mt-8">
            <span className="gold-diamond">◆</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info + quick contact + Map */}
          <div
            className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Contact info cards */}
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex gap-4 bg-njinga-charcoal border border-njinga-gray/50 p-5 group hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                  <info.icon size={17} className="text-gold" />
                </div>
                <div>
                  <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">
                    {info.title}
                  </p>
                  {info.lines.map((line, i) => (
                    <p key={i} className="font-inter text-sm text-njinga-white/75 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp quick contact */}
            <a
              href="https://wa.me/244923456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 p-5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/30 transition-colors duration-300">
                <MessageCircle size={17} className="text-[#25D366]" />
              </div>
              <div>
                <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#25D366]/70 mb-1">
                  WhatsApp
                </p>
                <p className="font-inter text-sm text-njinga-white/75">Mensagem rápida via WhatsApp</p>
              </div>
            </a>

            {/* Stylized map */}
            <div className="relative h-44 bg-njinga-charcoal border border-njinga-gray/50 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px)
                  `,
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/20" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold/20" />
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gold/08" style={{ transform: 'rotate(-3deg)' }} />
              <div className="absolute top-3/4 left-0 right-0 h-px bg-gold/08" style={{ transform: 'rotate(2deg)' }} />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/40 animate-pulse">
                  <MapPin size={16} className="text-njinga-black" />
                </div>
                <div className="mt-2 bg-njinga-black/90 border border-gold/40 px-3 py-1.5 text-center">
                  <p className="font-playfair text-xs text-gold font-semibold">Hotel Rainha Njinga</p>
                  <p className="font-inter text-[10px] text-njinga-white/55 mt-0.5">Morro Bento, Luanda</p>
                </div>
              </div>

              <div className="absolute top-3 left-3 bg-njinga-black/80 border border-gold/20 px-2 py-1">
                <p className="font-inter text-[10px] text-gold/60 tracking-wider uppercase">Localização</p>
              </div>
            </div>
          </div>

          {/* Right: Reservation form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-njinga-charcoal border border-njinga-gray/50 p-8 lg:p-10">
              <h3 className="font-playfair text-2xl font-bold text-njinga-white mb-1">
                Pedido de Reserva
              </h3>
              <p className="font-inter text-sm text-njinga-white/45 mb-8">
                Preencha o formulário e entraremos em contacto em menos de 24 horas.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                    <CheckCircle size={36} className="text-gold" />
                  </div>
                  <h4 className="font-playfair text-2xl font-bold text-njinga-white mb-3">
                    Mensagem Enviada!
                  </h4>
                  <p className="font-inter text-njinga-white/55 text-sm max-w-xs">
                    Obrigado pelo seu contacto. A nossa equipa responderá em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="O seu nome"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@exemplo.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+244 9XX XXX XXX"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                        Nº de Hóspedes
                      </label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className={inputClass + ' cursor-pointer'}
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n} className="bg-njinga-charcoal">
                            {n} {n === 1 ? 'hóspede' : 'hóspedes'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                        Check-in
                      </label>
                      <input
                        type="date"
                        name="checkin"
                        value={form.checkin}
                        onChange={handleChange}
                        className={inputClass + ' [color-scheme:dark]'}
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                        Check-out
                      </label>
                      <input
                        type="date"
                        name="checkout"
                        value={form.checkout}
                        onChange={handleChange}
                        className={inputClass + ' [color-scheme:dark]'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Pedidos especiais, tipo de quarto preferido..."
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full flex items-center justify-center gap-3 py-4 text-base"
                  >
                    <Send size={15} />
                    Enviar Pedido de Reserva
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

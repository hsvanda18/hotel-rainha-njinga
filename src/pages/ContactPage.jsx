import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  MessageCircle, ChevronDown, ChevronUp, ArrowRight,
  Utensils, Users, BedDouble, Info,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Morada',
    lines: ['Bairro Morro Bento, Rua dos Generais S/N', 'Paralela à Av. Pedro de Castro Van-Dúnen "Loy"', 'Luanda, Angola'],
    action: null,
  },
  {
    icon: Phone,
    title: 'Telefone',
    lines: ['+244 923 456 789', '+244 222 345 678'],
    action: { href: 'tel:+244923456789', label: 'Ligar agora' },
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['reservas@hotelrainhanjinga.ao', 'info@hotelrainhanjinga.ao'],
    action: { href: 'mailto:reservas@hotelrainhanjinga.ao', label: 'Enviar email' },
  },
  {
    icon: Clock,
    title: 'Recepção',
    lines: ['Aberta 24 horas', '7 dias por semana'],
    action: null,
  },
]

const departments = [
  {
    icon: BedDouble,
    name: 'Reservas',
    email: 'reservas@hotelrainhanjinga.ao',
    phone: '+244 923 456 789',
    desc: 'Reservas de quartos, estadias prolongadas e tarifas especiais.',
  },
  {
    icon: Users,
    name: 'Eventos & Reuniões',
    email: 'eventos@hotelrainhanjinga.ao',
    phone: '+244 923 456 790',
    desc: 'Conferências, casamentos, eventos corporativos e propostas personalizadas.',
  },
  {
    icon: Utensils,
    name: 'Restaurante',
    email: 'restaurante@hotelrainhanjinga.ao',
    phone: '+244 923 456 791',
    desc: 'Reservas de mesa, menus de grupo e pedidos especiais de catering.',
  },
  {
    icon: Info,
    name: 'Informações Gerais',
    email: 'info@hotelrainhanjinga.ao',
    phone: '+244 222 345 678',
    desc: 'Questões gerais, sugestões, reclamações e parcerias comerciais.',
  },
]

const faqs = [
  {
    q: 'A que horas são o check-in e check-out?',
    a: 'O check-in é às 14:00 e o check-out às 12:00. Para chegadas antecipadas ou saídas tardias, contacte-nos com antecedência — faremos o possível para acomodar o seu pedido sujeito a disponibilidade.',
  },
  {
    q: 'O hotel tem estacionamento?',
    a: 'Sim, o Hotel Rainha Njinga dispõe de parque de estacionamento privativo e vigiado com câmeras 24h, disponível gratuitamente para todos os hóspedes. Serviço de valet parking também disponível.',
  },
  {
    q: 'O Wi-Fi é gratuito?',
    a: 'Sim, o Wi-Fi de alta velocidade (fibra óptica) está disponível gratuitamente em todo o hotel — quartos, restaurante, bar, lobby e espaços de reunião.',
  },
  {
    q: 'O hotel aceita animais de estimação?',
    a: 'De momento o hotel não aceita animais de estimação nas instalações. Para casos especiais, contacte-nos directamente antes da sua chegada.',
  },
  {
    q: 'Fazem transfer do aeroporto?',
    a: 'Sim, disponibilizamos serviço de transfer entre o Aeroporto Internacional 4 de Fevereiro e o hotel. É necessário reservar com pelo menos 24h de antecedência. Consulte os preços na recepção ou por telefone.',
  },
  {
    q: 'Qual é a política de cancelamento?',
    a: 'Para os quartos Duplo e Individual, o cancelamento é gratuito até 24h antes da chegada. Para a Suite Njinga, até 48h antes. Para grupos ou estadias prolongadas, as condições são definidas no momento da reserva.',
  },
]

const INQUIRY_TYPES = [
  { value: 'reserva', label: 'Reserva de Quarto' },
  { value: 'evento', label: 'Evento ou Reunião' },
  { value: 'restaurante', label: 'Reserva no Restaurante' },
  { value: 'informacao', label: 'Pedido de Informação' },
  { value: 'outro', label: 'Outro Assunto' },
]

function FAQ({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-njinga-gray/30 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className={`font-inter text-sm font-medium transition-colors duration-200 ${open ? 'text-gold' : 'text-njinga-white/80 group-hover:text-gold'}`}>
          {item.q}
        </span>
        {open
          ? <ChevronUp size={16} className="text-gold flex-shrink-0 mt-0.5" />
          : <ChevronDown size={16} className="text-njinga-white/40 flex-shrink-0 mt-0.5 group-hover:text-gold transition-colors duration-200" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="font-inter text-sm text-njinga-white/50 leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', checkin: '', checkout: '',
    guests: '1', type: 'reserva', message: '',
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
    setForm({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: '1', type: 'reserva', message: '' })
  }

  return (
    <div className="min-h-screen bg-njinga-black text-njinga-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1600&q=80&auto=format&fit=crop"
            alt="Contactos"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-njinga-black/80 via-njinga-black/70 to-njinga-black" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-subtitle mb-4">✦ Contactos ✦</p>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-njinga-white mb-5 leading-tight">
              Entre em{' '}
              <span className="text-gold italic">Contacto</span>
            </h1>
            <p className="font-inter text-njinga-white/55 max-w-xl text-base mb-8">
              A nossa equipa está disponível 24 horas por dia para ajudar na sua reserva,
              organizar o seu evento ou responder a qualquer questão.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <a href="tel:+244923456789" className="btn-gold text-xs py-3 px-8 flex items-center gap-2">
                <Phone size={14} />
                Ligar Agora
              </a>
              <a
                href="https://wa.me/244923456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs py-3 px-8 flex items-center gap-2"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
            <div className="section-divider mt-10">
              <span className="gold-diamond">◆</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards + Form */}
      <section className="py-16 bg-njinga-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left: info + map */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex gap-4 bg-njinga-charcoal border border-njinga-gray/50 hover:border-gold/30 p-5 group transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <info.icon size={17} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">
                      {info.title}
                    </p>
                    {info.lines.map((line, i) => (
                      <p key={i} className="font-inter text-sm text-njinga-white/75 leading-relaxed">{line}</p>
                    ))}
                    {info.action && (
                      <a
                        href={info.action.href}
                        className="inline-flex items-center gap-1 font-inter text-xs text-gold/60 hover:text-gold mt-2 transition-colors duration-200"
                      >
                        {info.action.label}
                        <ArrowRight size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/244923456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 p-5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#25D366]/20 group-hover:bg-[#25D366]/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <MessageCircle size={17} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#25D366]/70 mb-1">WhatsApp</p>
                  <p className="font-inter text-sm text-njinga-white/75">Mensagem rápida via WhatsApp</p>
                  <p className="font-inter text-xs text-njinga-white/35 mt-0.5">Resposta em minutos</p>
                </div>
              </a>

              {/* Stylised map */}
              <div className="relative h-48 bg-njinga-charcoal border border-njinga-gray/50 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/20" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold/20" />
                <div className="absolute top-1/4 left-0 right-0 h-px bg-gold/06" style={{ transform: 'rotate(-3deg)' }} />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-gold/06" style={{ transform: 'rotate(2deg)' }} />
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

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-njinga-charcoal border border-njinga-gray/50 p-8 lg:p-10">
                <h3 className="font-playfair text-2xl font-bold text-njinga-white mb-1">
                  Envie-nos uma Mensagem
                </h3>
                <p className="font-inter text-sm text-njinga-white/45 mb-8">
                  Preencha o formulário e entraremos em contacto em menos de 24 horas.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                      <CheckCircle size={36} className="text-gold" />
                    </div>
                    <h4 className="font-playfair text-2xl font-bold text-njinga-white mb-3">Mensagem Enviada!</h4>
                    <p className="font-inter text-njinga-white/55 text-sm max-w-xs">
                      Obrigado pelo seu contacto. A nossa equipa responderá em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Tipo de consulta */}
                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                        Tipo de Consulta *
                      </label>
                      <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="input-gold cursor-pointer"
                      >
                        {INQUIRY_TYPES.map((t) => (
                          <option key={t.value} value={t.value} className="bg-njinga-charcoal">
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                          Nome Completo *
                        </label>
                        <input type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder="O seu nome" required className="input-gold" />
                      </div>
                      <div>
                        <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                          Email *
                        </label>
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="email@exemplo.com" required className="input-gold" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                          Telefone
                        </label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+244 9XX XXX XXX" className="input-gold" />
                      </div>
                      <div>
                        <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                          Nº de Hóspedes
                        </label>
                        <select name="guests" value={form.guests} onChange={handleChange}
                          className="input-gold cursor-pointer">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n} className="bg-njinga-charcoal">
                              {n} {n === 1 ? 'hóspede' : 'hóspedes'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Datas só para reservas */}
                    {(form.type === 'reserva' || form.type === 'evento') && (
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                            {form.type === 'evento' ? 'Data do Evento' : 'Check-in'}
                          </label>
                          <input type="date" name="checkin" value={form.checkin} onChange={handleChange}
                            className="input-gold [color-scheme:dark]" />
                        </div>
                        <div>
                          <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                            {form.type === 'evento' ? 'Fim do Evento' : 'Check-out'}
                          </label>
                          <input type="date" name="checkout" value={form.checkout} onChange={handleChange}
                            className="input-gold [color-scheme:dark]" />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">
                        Mensagem
                      </label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        rows={4} placeholder="Descreva o seu pedido, preferências ou questões..."
                        className="input-gold resize-none" />
                    </div>

                    <button type="submit"
                      className="btn-gold w-full flex items-center justify-center gap-3 py-4 text-base">
                      <Send size={15} />
                      Enviar Mensagem
                    </button>

                    <p className="font-inter text-[11px] text-njinga-white/25 text-center">
                      Os seus dados são tratados com total confidencialidade.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-njinga-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">✦ Departamentos ✦</p>
            <h2 className="section-title mb-4">
              Fale com o{' '}
              <span className="text-gold italic">Departamento Certo</span>
            </h2>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon
              return (
                <div
                  key={dept.name}
                  className="group bg-njinga-black border border-njinga-gray/40 hover:border-gold/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10"
                >
                  <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-njinga-white mb-2">{dept.name}</h3>
                  <p className="font-inter text-xs text-njinga-white/45 leading-relaxed mb-5">{dept.desc}</p>
                  <div className="space-y-2 pt-4 border-t border-njinga-gray/30">
                    <a href={`mailto:${dept.email}`}
                      className="flex items-center gap-2 font-inter text-xs text-njinga-white/50 hover:text-gold transition-colors duration-200 truncate">
                      <Mail size={11} className="text-gold/50 flex-shrink-0" />
                      {dept.email}
                    </a>
                    <a href={`tel:${dept.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 font-inter text-xs text-njinga-white/50 hover:text-gold transition-colors duration-200">
                      <Phone size={11} className="text-gold/50 flex-shrink-0" />
                      {dept.phone}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-njinga-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">✦ Perguntas Frequentes ✦</p>
            <h2 className="section-title mb-4">
              Perguntas{' '}
              <span className="text-gold italic">Frequentes</span>
            </h2>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>

          <div className="bg-njinga-charcoal border border-njinga-gray/40 px-8 py-4">
            {faqs.map((faq) => (
              <FAQ key={faq.q} item={faq} />
            ))}
          </div>

          <p className="font-inter text-xs text-njinga-white/30 text-center mt-6">
            Não encontrou resposta?{' '}
            <a href="mailto:info@hotelrainhanjinga.ao" className="text-gold/60 hover:text-gold transition-colors duration-200">
              Envie-nos um email
            </a>
            {' '}ou ligue para a recepção 24h.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-njinga-charcoal border-t border-gold/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-njinga-white mb-4">
            Pronto para a sua{' '}
            <span className="text-gold italic">visita?</span>
          </h2>
          <p className="font-inter text-njinga-white/45 text-sm mb-8">
            Explore os nossos quartos, restaurante e serviços enquanto planeia a sua estadia.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/quartos" className="btn-gold text-xs py-3 px-8 flex items-center gap-2">
              Ver Quartos
              <ArrowRight size={14} />
            </Link>
            <Link to="/" className="btn-outline-gold text-xs py-3 px-8">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

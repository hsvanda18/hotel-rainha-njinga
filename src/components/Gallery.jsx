import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop',
    alt: 'Vista de Luanda ao pôr do sol',
    span: 'col-span-2 row-span-2',
    label: 'Luanda ao Pôr do Sol',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format&fit=crop',
    alt: 'Quarto de luxo',
    span: '',
    label: 'Suite Njinga',
  },
  {
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80&auto=format&fit=crop',
    alt: 'Restaurante do hotel',
    span: '',
    label: 'Restaurante',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop',
    alt: 'Gastronomia angolana',
    span: '',
    label: 'Gastronomia Local',
  },
  {
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80&auto=format&fit=crop',
    alt: 'Vista noturna de Luanda',
    span: '',
    label: 'Luanda by Night',
  },
  {
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80&auto=format&fit=crop',
    alt: 'Banheiro de luxo',
    span: '',
    label: 'Banheiro Premium',
  },
  {
    src: 'https://images.unsplash.com/photo-1603512500383-3f000ce4b3e0?w=600&q=80&auto=format&fit=crop',
    alt: 'Bar do hotel',
    span: '',
    label: 'Bar & Lounge',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop',
    alt: 'Sala de reuniões',
    span: '',
    label: 'Sala de Eventos',
  },
]

export default function Gallery() {
  const [visible, setVisible] = useState(false)
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight' && lightbox !== null)
        setLightbox((prev) => (prev + 1) % images.length)
      if (e.key === 'ArrowLeft' && lightbox !== null)
        setLightbox((prev) => (prev - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  const goNext = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev + 1) % images.length)
  }
  const goPrev = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="galeria" ref={ref} className="py-24 lg:py-32 bg-njinga-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-subtitle mb-4">✦ Galeria ✦</p>
          <h2 className="section-title mb-4">
            O Hotel em{' '}
            <span className="text-gold italic">Imagens</span>
          </h2>
          <p className="font-inter text-njinga-white/55 max-w-xl mx-auto text-base">
            Descubra os espaços que tornam a sua estadia no Hotel Rainha Njinga uma experiência única.
          </p>
          <div className="section-divider mt-8">
            <span className="gold-diamond">◆</span>
          </div>
        </div>

        {/* Link to full gallery */}
        <div
          className={`flex justify-center mb-10 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link to="/galeria" className="btn-outline-gold text-xs py-2.5 px-7">
            Ver Galeria Completa ({22} fotos)
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer group ${img.span} ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } transition-all duration-700`}
              style={{ transitionDelay: `${i * 75}ms` }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-njinga-black/0 group-hover:bg-njinga-black/55 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-center">
                  <div className="w-12 h-12 bg-gold/20 border border-gold/60 flex items-center justify-center mx-auto mb-2">
                    <ZoomIn size={20} className="text-gold" />
                  </div>
                  <p className="font-inter text-njinga-white text-sm font-medium tracking-wide">
                    {img.label}
                  </p>
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-njinga-black/97 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-njinga-gray/50 hover:border-gold/50 text-njinga-white/60 hover:text-gold transition-all duration-200"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[88vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src.replace('w=600', 'w=1400').replace('w=800', 'w=1400')}
              alt={images[lightbox].alt}
              className="w-full h-full object-contain max-h-[80vh] mx-auto block"
            />
            {/* Caption */}
            <div className="mt-4 flex items-center justify-between px-2">
              <p className="font-playfair text-njinga-white text-lg">{images[lightbox].label}</p>
              <p className="font-inter text-njinga-white/40 text-xs tracking-widest">
                {lightbox + 1} / {images.length}
              </p>
            </div>

            {/* Thumbnail dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
                  className={`transition-all duration-200 rounded-full ${
                    i === lightbox ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-njinga-gray hover:bg-gold/50'
                  }`}
                  aria-label={`Imagem ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Prev button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-njinga-gray/40 hover:border-gold/60 text-njinga-white/60 hover:text-gold transition-all duration-200 hover:bg-gold/10"
            onClick={goPrev}
            aria-label="Anterior"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-njinga-gray/40 hover:border-gold/60 text-njinga-white/60 hover:text-gold transition-all duration-200 hover:bg-gold/10"
            onClick={goNext}
            aria-label="Próximo"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  )
}

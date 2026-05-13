import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { galleryImages, categories } from '../data/gallery'

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onNext, onPrev])

  return (
    <div
      className="fixed inset-0 z-50 bg-njinga-black/97 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-njinga-gray/50 hover:border-gold/50 text-njinga-white/60 hover:text-gold transition-all duration-200"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X size={20} />
      </button>

      <div
        className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[78vh] max-w-full object-contain mx-auto block"
        />

        <div className="mt-4 flex items-center justify-between w-full px-2">
          <div>
            <p className="font-playfair text-njinga-white text-lg">{img.label}</p>
            <p className="font-inter text-njinga-white/30 text-[11px] uppercase tracking-wider mt-0.5">
              {categories.find((c) => c.key === img.category)?.label}
            </p>
          </div>
          <p className="font-inter text-njinga-white/35 text-xs tracking-widest">
            {index + 1} / {images.length}
          </p>
        </div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-1.5 mt-4 flex-wrap max-w-2xl">
          {images.map((im, i) => (
            <button
              key={im.id}
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className={`transition-all duration-200 rounded-full ${
                i === index ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-njinga-gray hover:bg-gold/50'
              }`}
              aria-label={`Imagem ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-njinga-gray/40 hover:border-gold/60 text-njinga-white/60 hover:text-gold transition-all duration-200 hover:bg-gold/10"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Anterior"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-njinga-gray/40 hover:border-gold/60 text-njinga-white/60 hover:text-gold transition-all duration-200 hover:bg-gold/10"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Próximo"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filtered = activeCategory === 'todos'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goPrev = useCallback(() => setLightboxIndex((p) => (p - 1 + filtered.length) % filtered.length), [filtered.length])
  const goNext = useCallback(() => setLightboxIndex((p) => (p + 1) % filtered.length), [filtered.length])

  return (
    <div className="min-h-screen bg-njinga-black text-njinga-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop"
            alt="Galeria"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-njinga-black/70 via-njinga-black/60 to-njinga-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-subtitle mb-4">✦ Galeria ✦</p>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-njinga-white mb-5 leading-tight">
              O Hotel em{' '}
              <span className="text-gold italic">Imagens</span>
            </h1>
            <p className="font-inter text-njinga-white/55 max-w-xl text-base mb-6">
              Descubra os espaços, a gastronomia e os momentos que tornam a sua estadia
              no Hotel Rainha Njinga uma experiência única.
            </p>
            <div className="flex items-center gap-2 text-njinga-white/35">
              <Images size={14} className="text-gold/60" />
              <span className="font-inter text-xs tracking-wider">{galleryImages.length} fotografias</span>
            </div>
            <div className="section-divider mt-8">
              <span className="gold-diamond">◆</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar — sticky */}
      <div className="sticky top-0 z-40 bg-njinga-black/95 backdrop-blur-md border-b border-njinga-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const count = cat.key === 'todos'
                ? galleryImages.length
                : galleryImages.filter((i) => i.category === cat.key).length
              return (
                <button
                  key={cat.key}
                  onClick={() => { setActiveCategory(cat.key); setLightboxIndex(null) }}
                  className={`flex items-center gap-2 font-inter text-xs tracking-wider uppercase px-4 py-2 flex-shrink-0 transition-all duration-200 ${
                    activeCategory === cat.key
                      ? 'bg-gold text-njinga-black font-semibold'
                      : 'border border-njinga-gray/50 text-njinga-white/50 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {cat.label}
                  <span className={`font-inter text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.key ? 'bg-njinga-black/20 text-njinga-black' : 'bg-njinga-gray/40 text-njinga-white/30'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-njinga-white/30 font-inter py-24">
              Sem fotografias nesta categoria.
            </p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
              {filtered.map((img, i) => (
                <div
                  key={img.id}
                  className="break-inside-avoid relative overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-njinga-black/0 group-hover:bg-njinga-black/55 transition-all duration-300 flex items-end justify-between p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <p className="font-inter text-[10px] tracking-[0.15em] uppercase text-gold/80 mb-0.5">
                        {categories.find((c) => c.key === img.category)?.label}
                      </p>
                      <p className="font-playfair text-njinga-white text-base font-semibold leading-snug">
                        {img.label}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="w-9 h-9 bg-gold/20 border border-gold/60 flex items-center justify-center">
                        <ZoomIn size={16} className="text-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Featured badge */}
                  {img.featured && (
                    <div className="absolute top-3 left-3 bg-gold text-njinga-black font-inter font-bold text-[10px] tracking-wider uppercase px-2 py-0.5">
                      Destaque
                    </div>
                  )}

                  {/* Border on hover */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          )}

          {/* Bottom */}
          <div className="text-center mt-20 pt-12 border-t border-njinga-gray/20">
            <p className="font-inter text-njinga-white/30 text-xs mb-6">
              Interessado em visitar o hotel? Reserve a sua estadia.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/quartos" className="btn-gold text-xs py-3 px-8">
                Ver Quartos
              </Link>
              <Link to="/" className="btn-outline-gold text-xs py-3 px-8">
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}

      <Footer />
    </div>
  )
}

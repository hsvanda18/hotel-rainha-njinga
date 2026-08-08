import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const RoomsPage = lazy(() => import('./pages/RoomsPage'))
const RestaurantPage = lazy(() => import('./pages/RestaurantPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function PageFallback() {
  return <div className="min-h-screen bg-njinga-black" />
}

function HomePage() {
  return (
    <div className="min-h-screen bg-njinga-black text-njinga-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quartos" element={<RoomsPage />} />
          <Route path="/restaurante" element={<RestaurantPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/contactos" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Analytics />
    </BrowserRouter>
  )
}

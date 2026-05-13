import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RoomsPage from './pages/RoomsPage'
import RestaurantPage from './pages/RestaurantPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

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
    </BrowserRouter>
  )
}

import { useEffect, useState } from 'react'
import { Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/70 shadow-sm' : 'backdrop-blur-0 bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-200 to-pink-400 shadow-inner" />
          <div className="leading-tight">
            <div className="text-xl font-semibold tracking-wide text-gray-900">Alankritha Naturals</div>
            <div className="text-xs text-gray-500">Beauty Parlour & Boutique</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#services" className="hover:text-pink-600 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-pink-600 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+910000000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/60 hover:bg-white/90 text-gray-800 shadow-sm transition"> 
            <Phone className="h-4 w-4" /> <span className="font-medium">Call</span>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 text-white shadow-sm hover:shadow-pink-200/80 hover:-translate-y-0.5 transition-all">
            <Mail className="h-4 w-4" /> <span className="font-semibold">Book</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

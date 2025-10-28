import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import ContactBooking from './components/ContactBooking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/40 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <ContactBooking />
      </main>
      <Footer />
    </div>
  )
}

export default App

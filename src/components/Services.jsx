import { Scissors, Sparkles, Brush, Droplet, Heart, Gem } from 'lucide-react'
import { useRef } from 'react'
import Reveal from './Reveal'

const services = [
  { title: 'Hair Styling', desc: 'Precision cuts and soft, wearable styles.', price: '₹800 – ₹2,500', icon: Scissors },
  { title: 'Facials', desc: 'Botanical facials tailored to your skin.', price: '₹1,200 – ₹3,500', icon: Sparkles },
  { title: 'Manicure', desc: 'Neat, glossy and nourished hands.', price: '₹600 – ₹1,500', icon: Brush },
  { title: 'Pedicure', desc: 'Relaxing care for beautifully soft feet.', price: '₹800 – ₹1,800', icon: Heart },
  { title: 'Bridal Makeup', desc: 'Timeless looks for your special day.', price: '₹8,000 – ₹25,000', icon: Gem },
  { title: 'Skincare', desc: 'Curated regimes for a lasting glow.', price: '₹1,000 – ₹4,000', icon: Droplet },
]

function TiltCard({ children }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateX = ((y - midY) / midY) * -5
    const rotateY = ((x - midX) / midX) * 5
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const reset = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 will-change-transform"
      style={{ transform: 'perspective(800px)' }}
    >
      {children}
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Signature Services</h2>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <TiltCard>
                <div className="group rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm ring-1 ring-pink-100 hover:shadow-pink-200/60 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shadow-sm">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.desc}</p>
                  <div className="mt-4 text-sm font-medium text-pink-600">{s.price}</div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

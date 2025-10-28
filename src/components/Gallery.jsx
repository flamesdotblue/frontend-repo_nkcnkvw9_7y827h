import { useState } from 'react'
import Reveal from './Reveal'

const images = [
  'https://images.unsplash.com/photo-1512203492609-8f7f05a84b9f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514846117827-513efb7fbb50?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515468381879-40d0ded81016?q=80&w=1000&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-b from-pink-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Gallery</h2>
        </Reveal>
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <Reveal key={src} delay={i * 0.05}>
              <button onClick={() => setActive(src)} className="block w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400">
                <img src={src} loading="lazy" alt="Salon work" className="w-full h-auto rounded-2xl hover:scale-[1.02] transition-transform" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div role="dialog" aria-modal className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setActive(null)}>
          <img src={active} alt="Expanded view" className="max-h-[85vh] rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  )
}

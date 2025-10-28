import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr,0.8fr] gap-12">
        <Reveal>
          <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm ring-1 ring-pink-100">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Alankritha Naturals, we celebrate the elegance that already exists within you. Our signature treatments blend gentle, high-performing botanicals with thoughtful techniques to deliver a calm, luxurious experience — every time.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              From tailored skincare to meticulous hair artistry and bridal looks, our expert team provides care that is refined, kind, and distinctly you.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-pink-100 flex items-center gap-6">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" alt="Founder portrait" className="h-20 w-20 rounded-full object-cover" />
            <div>
              <div className="text-lg font-semibold text-gray-900">Ananya — Founder</div>
              <p className="text-gray-600 text-sm mt-1">“Thank you for trusting us with your glow. We’re here to make you feel elegantly yourself.”</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import Spline from '@splinetool/react-spline'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background particles / accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-pink-700 text-xs font-medium mb-4 shadow-sm">Feminine • Minimal • Luxurious</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Enhance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400">Natural Beauty</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Beauty parlour and Boutique. Where modern elegance meets mindful care — crafted treatments, serene spaces, and a gentle, luxurious experience.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-pink-500 text-white px-6 py-3 shadow-lg shadow-pink-200/70 hover:-translate-y-0.5 hover:shadow-pink-300/80 transition will-change-transform">
              <span className="font-semibold">Book Appointment</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            {!prefersReduced && (
              <motion.div
                className="w-10 h-10 rounded-full border-2 border-pink-300 flex items-center justify-center text-pink-500"
                animate={{ boxShadow: ["0 0 0 0 rgba(236,72,153,0.45)", "0 0 0 14px rgba(236,72,153,0)"] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              >
                <div className="w-2 h-2 rounded-full bg-pink-500" />
              </motion.div>
            )}
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl bg-white/60">
          <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay to match brand */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-100/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

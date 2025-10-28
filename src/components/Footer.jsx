import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-lg font-semibold text-gray-900">Alankritha Naturals</div>
          <p className="mt-2 text-sm text-gray-600">A premium beauty parlour & boutique — refined, gentle, and beautifully you.</p>
          <div className="mt-4 flex items-center gap-3 text-gray-600">
            <a aria-label="Instagram" href="#" className="p-2 rounded-full hover:bg-pink-50 text-pink-600"><Instagram className="h-5 w-5"/></a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full hover:bg-pink-50 text-pink-600"><Facebook className="h-5 w-5"/></a>
            <a aria-label="YouTube" href="#" className="p-2 rounded-full hover:bg-pink-50 text-pink-600"><Youtube className="h-5 w-5"/></a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Hours</div>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Mon – Fri: 10:00 AM – 8:00 PM</li>
            <li>Sat: 10:00 AM – 8:00 PM</li>
            <li>Sun: 11:00 AM – 6:00 PM</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Newsletter</div>
          <p className="mt-2 text-sm text-gray-600">Receive curated beauty tips and offers.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
            <input type="email" required placeholder="Your email" className="flex-1 rounded-xl border-gray-200 focus:ring-pink-400 focus:border-pink-400" />
            <button className="rounded-xl bg-pink-500 text-white px-4 py-2 hover:bg-pink-600 transition">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-gray-500">© {new Date().getFullYear()} Alankritha Naturals. All rights reserved.</div>
    </footer>
  )
}

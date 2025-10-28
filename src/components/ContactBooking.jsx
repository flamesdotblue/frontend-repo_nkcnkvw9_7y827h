import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle2, XCircle, Loader2, Calendar } from 'lucide-react'
import Reveal from './Reveal'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function ContactBooking() {
  const [status, setStatus] = useState('idle') // idle | pending | success | error
  const [message, setMessage] = useState('')
  const [icsData, setIcsData] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('pending')
    setMessage('Sending your booking…')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      preferred_datetime: new Date(`${data.date}T${data.time}`)?.toISOString(),
      notes: data.notes || '',
    }

    try {
      const res = await fetch(`${API_BASE}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      const json = await res.json()
      setStatus('success')
      setMessage(json.message || 'Appointment confirmed — we’ll call to confirm the time.')
      setIcsData(json.ics || '')
      form.reset()
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again or contact us via phone or email.')
    }
  }

  const downloadIcs = () => {
    if (!icsData) return
    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'alankritha-appointment.ics'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-sm ring-1 ring-pink-100">
            <h2 className="text-3xl font-semibold text-gray-900">Book an Appointment</h2>
            <p className="mt-2 text-gray-600">We’ll reach out to confirm your slot and suggest the best preparation for your service.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required name="name" className="mt-1 w-full rounded-xl border-gray-200 focus:ring-pink-400 focus:border-pink-400" placeholder="Your full name" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input required name="phone" className="mt-1 w-full rounded-xl border-gray-200 focus:ring-pink-400 focus:border-pink-400" placeholder="Phone number" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-xl border-gray-200 focus:ring-pink-400 focus:border-pink-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Service</label>
                <select required name="service" className="mt-1 w-full rounded-xl border-gray-200 focus:ring-pink-400 focus:border-pink-400">
                  <option>Hair Styling</option>
                  <option>Facials</option>
                  <option>Manicure</option>
                  <option>Pedicure</option>
                  <option>Bridal Makeup</option>
                  <option>Skincare</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input required type="date" name="date" className="mt-1 w-full rounded-xl border-gray-200 focus:ring-pink-400 focus:border-pink-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <input required type="time" name="time" className="mt-1 w-full rounded-xl border-gray-200 focus:ring-pink-400 focus:border-pink-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <textarea name="notes" rows="3" className="mt-1 w-full rounded-xl border-gray-200 focus:ring-pink-400 focus:border-pink-400" placeholder="Anything we should know?" />
              </div>
              <div className="sm:col-span-2 flex items-center gap-4 mt-2">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-pink-500 text-white px-6 py-3 shadow-lg shadow-pink-200/70 hover:-translate-y-0.5 hover:shadow-pink-300/80 transition">
                  {status === 'pending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Calendar className="h-4 w-4" />} 
                  <span className="font-semibold">Confirm Booking</span>
                </button>
                {status === 'success' && (
                  <button type="button" onClick={downloadIcs} className="text-pink-600 hover:text-pink-700 underline">
                    Download Calendar (.ics)
                  </button>
                )}
              </div>
            </form>

            {status !== 'idle' && (
              <div className={`mt-4 rounded-xl p-4 border ${status === 'success' ? 'bg-green-50 border-green-200 text-green-700' : status === 'error' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-pink-50 border-pink-200 text-pink-700'}`}>
                <div className="flex items-center gap-2">
                  {status === 'success' && <CheckCircle2 className="h-5 w-5" />}
                  {status === 'error' && <XCircle className="h-5 w-5" />}
                  {status === 'pending' && <Loader2 className="h-5 w-5 animate-spin" />}
                  <p className="font-medium">{message}</p>
                </div>
              </div>
            )}

            {status === 'success' && (
              <div className="relative mt-4">
                {/* simple confetti */}
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span key={i} className="absolute inline-block h-2 w-2 rounded-full bg-pink-400 animate-bounce" style={{ left: `${(i*37)%100}%`, top: `${(i*19)%100}%`, animationDelay: `${i*40}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-6">
            <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm ring-1 ring-pink-100">
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <div className="mt-3 space-y-2 text-gray-700">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-pink-500"/> +91 90000 00000</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-pink-500"/> hello@alankritha.in</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-pink-500"/> Banjara Hills, Hyderabad</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-pink-100">
              <iframe title="Location map" className="w-full h-[320px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.620848399289!2d78.434!3d17.427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91!2sBanjara%20Hills!5e0!3m2!1sen!2sin!4v1700000000000"></iframe>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

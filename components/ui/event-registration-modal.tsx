'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'

type Props = {
  eventTitle: string
}

export default function EventRegisterModal({ eventTitle }: Props) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, eventTitle: eventTitle }),
    })

    const data = await res.json()
    if (res.ok) {
      alert('You are registered!')
      setForm({ name: '', email: '', phone: '' }) // Reset form
      setOpen(false)
    } else {
      alert('Failed: ' + data.error?.detail)
    }
  }


  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Register
      </Button>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-4">Register for {eventTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded px-3 py-2"
              />
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

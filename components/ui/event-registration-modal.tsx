'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

type Props = {
  eventTitle: string
}

export default function EventRegisterModal({ eventTitle }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Register
      </Button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Register for {eventTitle}</h3>
            <p className="mb-4">We’ll be adding real registration soon. For now, just imagine you're signed up 😉</p>
            <div className="flex justify-end">
              <Button
                onClick={() => setOpen(false)}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

import { getEventBySlug } from '@/app/services/events-service'
import { notFound } from 'next/navigation'

type EventPageProps = {
  params: { slug: string }
}

export default async function EventPage({ params }: EventPageProps) {
  const event = await getEventBySlug(params.slug)

  if (!event) return notFound()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page content */}
      <main className="flex-grow max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-600 mb-2">📅 {event.date} | 📍 {event.location}</p>
        <p>{event.description}</p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Group Name. All rights reserved.
      </footer>
    </div>
  )
}
import { getEventBySlug } from '@/app/services/events-service'
import { notFound } from 'next/navigation'
import EventRegisterModal from '@/components/ui/event-registration-modal'

type EventPageProps = {
  params: { slug: string }
}

export default async function EventPage({ params }: EventPageProps) {
  const event = await getEventBySlug(params.slug)

  if (!event) return notFound()

  return (
    <main className="flex-grow bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>

        <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
        <p className="text-gray-600 mb-2">📅 {event.date} | 📍 {event.location}</p>
        <p className="text-lg text-gray-800 mb-6">{event.description}</p>

        {/* Modal trigger button */}
        <EventRegisterModal eventTitle={event.title} />
      </div>
    </main>
  )
}

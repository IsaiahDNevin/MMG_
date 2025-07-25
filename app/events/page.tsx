import { getEvents } from '@/app/services/events-service'
import { EventCard } from '@/components/ui/event-card'

export const metadata = {
  title: 'Mountain Men of God - Events',
  description: 'Mountain Men of God - Where faith meets adventure in God\'s creation',
};

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Events to be had</h1>
      <div className="space-y-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
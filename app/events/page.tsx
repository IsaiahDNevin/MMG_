import { getEvents } from '../services/events-service'

import { EventCard } from '@/components/ui/event-card'

export default async function Page() {
  const events = await getEvents()

  return (
    <div className="space-y-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

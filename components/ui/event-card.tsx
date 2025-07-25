import { Event } from '@/app/models/event'
import { Button } from './button'
import { Card, CardContent } from './card'

export function EventCard({ event }: { event: Event }) {
  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="font-semibold">{event.title}</h3>
          <div className="flex items-center text-gray-600 text-sm space-x-4 my-2">
            <span>📅 {event.date}</span>
            <span>📍 {event.location}</span>
          </div>
          <p className="text-gray-600">{event.description}</p>
        </div>
        <Button href={`/events/${event.slug}`} className="mt-4 md:mt-0 bg-gray-900 text-white px-6 py-2">
          {event.cta}
        </Button>
      </CardContent>
    </Card>
  )
}

import { getEventById } from '@/app/services/events-service'
import { EventCard } from '@/components/ui/event-card'

export default async function EventPage({
  params,         // your dynamic route params
  searchParams,   // your query string key/values
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const {id} = searchParams

  const event = await getEventById(id as string)

  if (!event) {
    // TOODO: redirect to 404 page
    return <p>Event not found</p>
  }

  return (
    <pre>{JSON.stringify(event, null, 2)}</pre>
  )
}
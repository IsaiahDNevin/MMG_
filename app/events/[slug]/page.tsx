import { getEventById } from '@/app/services/events-service'

export default async function EventPage({
  searchParams,   // your query string key/values
}: {
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
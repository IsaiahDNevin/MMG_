import { PageProps } from '@/.next/types/app/layout'
import { getEventById } from '@/app/services/events-service'

export default async function EventPage({
  params,
  searchParams,   // your query string key/values
}: PageProps) {
  const {id} = await searchParams
  const {slug} = await params

  const event = await getEventById(id as string)

  if (!event) {
    // TOODO: redirect to 404 page
    return <p>Event not found</p>
  }

  return (
    <>
    <h1>{slug}</h1>
    <pre>{JSON.stringify(event, null, 2)}</pre>
    </>
  )
}
import { getEventById } from '@/app/services/events-service'

type EventPageProps = {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function EventPage(props: EventPageProps) {
  const { params, searchParams } = props
  const slug = (await params).slug
  const id = (await searchParams)?.id as string

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
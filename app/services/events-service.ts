import fs from 'fs/promises'
import path from 'path'

import { Event } from '../models/event'

export async function getEvents(): Promise<Event[]> {
  const filePath = path.join(process.cwd(), 'data', 'events.json')
  const json = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(json)
}

export async function getNEvents(n: number): Promise<Event[]> {
  const events = await getEvents()
  return events.slice(0, n)
}

export async function getEventById(id: string): Promise<Event | null> {
  const events = await getEvents()
  return events.find(event => event.id === parseInt(id)) || null
}

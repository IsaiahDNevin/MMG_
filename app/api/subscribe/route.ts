// app/api/subscribe/route.ts (App Router)
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, name, phone, eventTitle } = await req.json()

  console.log('Received data:', { email, name, phone, eventTitle })

  // const API_KEY = process.env.MAILCHIMP_API_KEY
  // const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  // const DATACENTER = API_KEY?.split('-')[1]

//   const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       Authorization: `apikey ${API_KEY}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email_address: email,
//       status: 'subscribed',
//       merge_fields: {
//         FNAME: name,
//         PHONE: phone,
//       },
//     }),
//   })

//   if (response.ok) {
    return NextResponse.json({ message: 'Success' })
//   } else {
//     const error = await response.json()
//     return NextResponse.json({ error }, { status: 400 })
//   }
}

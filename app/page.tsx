import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import Section from '@/components/ui/section'
import { getNEvents } from './services/events-service'
import { EventCard } from '@/components/ui/event-card'
import { withRepoPrefix } from './utils/with-repo-prefix'

export const metadata = {
  title: 'Mountain Men of God',
  description: 'Mountain Men of God - Where faith meets adventure in God\'s creation',
};

export default async function MMGLandingPage() {
  const events = await getNEvents(3);

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero */}
      <header
        className="relative h-[550px] bg-cover bg-center"
        style={{ backgroundImage: `url(${withRepoPrefix('/hero-bg.jpg')})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Mountain Men of God</h1>
          <p className="text-white text-lg md:text-2xl mb-8">Where faith meets adventure in God&#39;s creation</p>
          <div className="space-x-4">
            {/* <Button className="bg-white text-gray-900 px-6 py-3">Join Our Brotherhood</Button> */}
            <Button href="#upcoming-events" className="bg-white text-gray-900 px-4 py-2">Check out our next Adventure!</Button>
          </div>
        </div>
      </header>

      {/* Mission */}
      <Section
        id="mission"
        title="Our Mission"
        spule="MMG brings together men of faith who share a passion for outdoor adventure. We believe God's creation
            is the perfect backdrop for building stronger relationships with Him and with each other through
            challenging outdoor experiences."
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adventure */}
            <div>
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" fill="none" stroke="#181828" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M3 20l7-12 4 7 3-5 4 10z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-black">Adventure</h3>
              <p className="text-lg text-gray-500">
                Challenging outdoor experiences that push boundaries
              </p>
            </div>
            {/* Faith */}
            <div>
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" fill="none" stroke="#181828" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-black">Faith</h3>
              <p className="text-lg text-gray-500">
                Growing closer to God through His creation
              </p>
            </div>
            {/* Brotherhood */}
            <div>
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" fill="none" stroke="#181828" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-black">Brotherhood</h3>
              <p className="text-lg text-gray-500">
                Building lasting friendships and accountability
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Adventures */}
      <Section id="adventures" title="Our Adventures" spule="Experience God’s creation through challenging outdoor activities" classes={['bg-gray-50']}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Skiing", img: withRepoPrefix('/skiing.jpg'), desc: "We ski a lot" },
            { title: "Running", img: withRepoPrefix('/running1.jpg'), desc: "Carry the Boats!" },
            { title: "Wilderness Camping", img: withRepoPrefix('/camping.jpg'), desc: "Connect with God and nature under the stars" },
            { title: "Fishing Expeditions", img: withRepoPrefix('/fishing.jpg'), desc: "We all love to wet a line!" },
            { title: "Backpacking", img: withRepoPrefix('/backpacking.jpg'), desc: "Multi-day adventures in God’s wilderness" },
            { title: "Mountain Biking", img: withRepoPrefix('/mountain-biking.jpg'), desc: "Exploring God's world on a high-speed adventure" },
          ].map((adv) => (
            <Card key={adv.title}>
              <Image
                src={adv.img}
                alt={adv.title}
                width={400}
                height={192}
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <CardContent>
                <h3 className="font-semibold">{adv.title}</h3>
                <p className="text-sm text-gray-600">{adv.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Community */}
      <Section id="community" title="Our Community" spule="Meet the men who make MMG a true brotherhood.">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/community.jpeg"
              alt="Community"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-2xl mr-3">👥</span><div><h4 className="font-semibold">Strong Brotherhood</h4><p className="text-gray-600">Deep friendships forged through shared adventures</p></div></li>
              <li className="flex items-start"><span className="text-2xl mr-3">📖</span><div><h4 className="font-semibold">Spiritual Growth</h4><p className="text-gray-600">Bible studies and devotions in God’s creation</p></div></li>
              <li className="flex items-start"><span className="text-2xl mr-3">🛠️</span><div><h4 className="font-semibold">Outdoor Skills</h4><p className="text-gray-600">Hands-on training for wilderness challenges</p></div></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section id="events" title="Upcoming Events" spule="Join us for these exciting upcoming events" classes={['bg-gray-50']}>
        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((adv) => (
            <EventCard key={adv.title} event={adv} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/events" className="mt-4 md:mt-0 bg-gray-900 text-white px-6 py-2">
            View All Events
          </Button>
        </div>
      </Section>
      {/* <section id="events" className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Upcoming Adventures</h2>
          <p className="text-gray-600">Join us for these exciting upcoming events</p>
        </div>
      </section> */}

      {/* CTA */}
      {/** TODO */}
      {/* <Section title='Ready to Join the Adventure?' spule='Connect with God and brothers in the great outdoors'>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-white text-gray-900 px-6 py-3">Join MMG Today</Button>
          <input type="email" placeholder="Your email" className="px-4 py-3 rounded-lg text-gray-900" />
        </div>
      </Section> */}
    </div>
  )
}

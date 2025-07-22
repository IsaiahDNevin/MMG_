import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function MMGLandingPage() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <nav className="bg-white py-6 px-32 shadow-md flex items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl">MMG</span>
          <span className="text-gray-600 text-base md:text-lg">Mountain Men of God</span>
        </div>
        <div className="flex-1" />
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-gray-700">About</a>
          <a href="#activities" className="hover:text-gray-700">Activities</a>
          <a href="#community" className="hover:text-gray-700">Community</a>
          <a href="#events" className="hover:text-gray-700">Events</a>
          <Button className="bg-gray-900 text-white px-3 py-1 text-sm ml-4">Join Us</Button>
        </div>
        <div className="md:hidden ml-auto">
          <button aria-label="Open menu">☰</button>
        </div>
      </nav>

      {/* Hero */}
      <header
        className="relative h-[550px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Mountain Men of God</h1>
          <p className="text-white text-lg md:text-2xl mb-8">Where faith meets adventure in God&apos;s creation</p>
          <div className="space-x-4">
            <Button className="bg-white text-gray-900 px-6 py-3">Join Our Brotherhood</Button>
            <Button className="bg-transparent border border-white text-white px-6 py-3">Learn Our Story</Button>
          </div>
        </div>
      </header>

      {/* Mission */}
      <section
        id="about"
        className="h-[550px] bg-white flex flex-col justify-center items-center px-4 text-center"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Plus Icon */}
          <div className="flex justify-center mb-4">
            <svg width="56" height="56" fill="none" stroke="#181828" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            MMG brings together men of faith who share a passion for outdoor adventure. We believe God&apos;s creation
            is the perfect backdrop for building stronger relationships with Him and with each other through
            challenging outdoor experiences.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adventure */}
            <div>
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" fill="none" stroke="#181828" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M3 20l7-12 4 7 3-5 4 10z" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-black">Brotherhood</h3>
              <p className="text-lg text-gray-500">
                Building lasting friendships and accountability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Adventures */}
      <section id="activities" className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Our Adventures</h2>
          <p className="text-gray-600 mt-5">Experience God’s creation through challenging outdoor activities</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Mountain Hiking", img: "/mountain.jpg", desc: "Explore God's majesty through challenging mountain trails" },
            { title: "Rock Climbing", img: "/rock.jpg", desc: "Test your limits while trusting in His strength" },
            { title: "Wilderness Camping", img: "/camping.jpg", desc: "Connect with God and nature under the stars" },
            { title: "Fishing Expeditions", img: "/fishing.jpg", desc: "Find peace and fellowship by the water" },
            { title: "Backpacking", img: "/backpacking.jpg", desc: "Multi-day adventures in God’s wilderness" },
            { title: "Survival Training", img: "/survival.jpg", desc: "Learn essential skills with Biblical wisdom" },
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
      </section>

      {/* Our Community */}
      <section id="community" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/community.jpg"
              alt="Community"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Community</h2>
            <p className="text-gray-600 mb-6">Meet the men who make MMG a true brotherhood.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-2xl mr-3">👥</span><div><h4 className="font-semibold">Strong Brotherhood</h4><p className="text-gray-600">Deep friendships forged through shared adventures</p></div></li>
              <li className="flex items-start"><span className="text-2xl mr-3">📖</span><div><h4 className="font-semibold">Spiritual Growth</h4><p className="text-gray-600">Bible studies and devotions in God’s creation</p></div></li>
              <li className="flex items-start"><span className="text-2xl mr-3">🛠️</span><div><h4 className="font-semibold">Outdoor Skills</h4><p className="text-gray-600">Hands-on training for wilderness challenges</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming Adventures */}
      <section id="events" className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Upcoming Adventures</h2>
          <p className="text-gray-600">Join us for these exciting upcoming events</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="font-semibold">Mount Washington Expedition</h3>
                <div className="flex items-center text-gray-600 text-sm space-x-4 my-2">
                  <span>📅 March 15-17, 2025</span>
                  <span>📍 New Hampshire</span>
                </div>
                <p className="text-gray-600">Challenge yourself with a winter ascent of Mount Washington, followed by evening devotions around the campfire.</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-gray-900 text-white px-6 py-2">Register Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="font-semibold">Monthly Men’s Breakfast</h3>
                <div className="flex items-center text-gray-600 text-sm space-x-4 my-2">
                  <span>🍳 Every 1st Saturday</span>
                  <span>⛪ Local Church</span>
                </div>
                <p className="text-gray-600">Join us for fellowship, food, and planning our next outdoor adventures.</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-white text-gray-900 border border-gray-900 px-6 py-2">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join the Adventure?</h2>
        <p className="text-lg mb-6">Connect with like-minded men who share your passion for faith and outdoor adventure</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-white text-gray-900 px-6 py-3">Join MMG Today</Button>
          <input type="email" placeholder="Your email" className="px-4 py-3 rounded-lg text-gray-900" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">MMG</h3>
            <p>Mountain Men of God – Where faith meets adventure in God’s creation.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1"><li>About</li><li>Activities</li><li>Community</li><li>Events</li></ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p>Email: info@mmg.org</p>
            <p>Phone: (555) 123-4567</p>
            <p>Location: [Your City]</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Follow Us</h3>
            <p>Facebook</p><p>Instagram</p>
          </div>
        </div>
        <div className="text-center text-sm mt-8">© 2025 Mountain Men of God. All rights reserved.</div>
      </footer>
    </div>
  );
}

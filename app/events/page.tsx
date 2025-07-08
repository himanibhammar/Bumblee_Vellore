"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import FloatingBees from "@/components/FloatingBees"
import CloudBackground from "@/components/CloudBackground"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "March 15, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "School Playground",
      description: "Fun-filled sports activities, races, and team games for all age groups!",
      emoji: "🏃‍♂️",
      color: "bg-soft-yellow",
      participants: "All Students",
    },
    {
      id: 2,
      title: "Art & Craft Exhibition",
      date: "March 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Hall",
      description: "Showcase of beautiful artwork created by our talented little artists!",
      emoji: "🎨",
      color: "bg-pink-100",
      participants: "All Students & Parents",
    },
    {
      id: 3,
      title: "Spring Garden Party",
      date: "April 5, 2024",
      time: "11:00 AM - 2:00 PM",
      location: "School Garden",
      description: "Celebrate spring with flower planting, nature walks, and outdoor fun!",
      emoji: "🌸",
      color: "bg-green-100",
      participants: "Families Welcome",
    },
    {
      id: 4,
      title: "Science Discovery Day",
      date: "April 12, 2024",
      time: "9:30 AM - 11:30 AM",
      location: "Science Lab",
      description: "Amazing experiments and discoveries that will spark curiosity!",
      emoji: "🔬",
      color: "bg-sky-blue-100",
      participants: "UKG Students",
    },
    {
      id: 5,
      title: "Music & Dance Recital",
      date: "April 20, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Auditorium",
      description: "Our little performers showcase their musical and dance talents!",
      emoji: "🎵",
      color: "bg-purple-100",
      participants: "All Students",
    },
    {
      id: 6,
      title: "Grandparents Day",
      date: "May 3, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Entire Campus",
      description: "Special day to honor and celebrate our beloved grandparents!",
      emoji: "👴👵",
      color: "bg-orange-100",
      participants: "Students & Grandparents",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-sky-blue-50 to-cream-100">
      <Navigation />
      <CloudBackground />
      <FloatingBees />

      <section className="pt-24 pb-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-black-accent mb-6"
              animate={{
                textShadow: ["0 0 0px #FFD54F", "0 0 20px #FFD54F", "0 0 0px #FFD54F"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Our <span className="text-soft-yellow">Exciting Events</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                🎉
              </motion.span>
            </motion.h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join us for magical moments, celebrations, and learning adventures throughout the year!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${event.color}`}
              >
                <h3 className="text-xl font-bold text-black-accent mb-2 flex items-center space-x-2">
                  <span>{event.title}</span>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {event.emoji}
                  </motion.span>
                </h3>
                <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                <div className="text-sm text-gray-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-soft-yellow" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-soft-yellow" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-soft-yellow" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-soft-yellow" />
                    <span>{event.participants}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

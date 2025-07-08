"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import FloatingBees from "@/components/FloatingBees"
import CloudBackground from "@/components/CloudBackground"
import { Heart, Award, Users, BookOpen } from "lucide-react"

export default function AboutPage() {
  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Bumblebee Vellore was founded with a dream to create a magical learning space for children.",
      icon: "🌱",
    },
    {
      year: "2019",
      title: "First Milestone",
      description: "We welcomed our first batch of 50 little learners and their families.",
      icon: "🎉",
    },
    {
      year: "2020",
      title: "Innovation During Challenges",
      description: "Adapted to virtual learning while maintaining our caring approach.",
      icon: "💻",
    },
    {
      year: "2021",
      title: "Recognition",
      description: "Awarded 'Best Kindergarten in Vellore' for our innovative teaching methods.",
      icon: "🏆",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Opened our beautiful new campus with state-of-the-art facilities.",
      icon: "🏫",
    },
    {
      year: "2024",
      title: "Today",
      description: "Proudly serving 200+ families with love, care, and excellence.",
      icon: "🌟",
    },
  ]

  const staff = [
    {
      name: "Ms. Priya Sharma",
      role: "Principal",
      bio: "20+ years in early childhood education. Loves storytelling and gardening.",
      avatar: "👩‍🏫",
      color: "bg-soft-yellow",
    },
    {
      name: "Ms. Kavitha Raj",
      role: "Head Teacher",
      bio: "Expert in play-based learning. Enjoys painting and music with children.",
      avatar: "👩‍🎨",
      color: "bg-sky-blue-100",
    },
    {
      name: "Mr. Arjun Kumar",
      role: "Activity Coordinator",
      bio: "Sports enthusiast who makes physical education fun and engaging.",
      avatar: "👨‍🏃",
      color: "bg-green-100",
    },
    {
      name: "Ms. Lakshmi Devi",
      role: "Counselor",
      bio: "Child psychologist who ensures every child feels heard and valued.",
      avatar: "👩‍⚕️",
      color: "bg-pink-100",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Love & Care",
      description: "Every child is treated with unconditional love and individual attention.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships between children, families, and teachers.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Making education joyful, meaningful, and age-appropriate.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-sky-blue-50 to-cream-100">
      <Navigation />
      <CloudBackground />
      <FloatingBees />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-black-accent mb-6">
              About <span className="text-soft-yellow">Bumblebee Vellore</span> 🐝
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our story began with a simple belief: every child deserves a magical start to their educational journey.
              Today, we're proud to be Vellore's most loved kindergarten, where little minds take flight every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">Our Journey 📖</h2>
            <p className="text-lg text-gray-700">From a small dream to a thriving community of learners</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-soft-yellow hidden md:block"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{item.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-soft-yellow">{item.year}</h3>
                        <h4 className="text-xl font-semibold text-black-accent">{item.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    className="w-6 h-6 bg-soft-yellow rounded-full border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">Our Values 💎</h2>
            <p className="text-lg text-gray-700">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  className="w-16 h-16 bg-soft-yellow rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon size={32} className="text-black-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-black-accent mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">Meet Our Amazing Team 👥</h2>
            <p className="text-lg text-gray-700">Dedicated educators who make magic happen every day</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 text-4xl`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {member.avatar}
                </motion.div>
                <h3 className="text-xl font-bold text-black-accent mb-1">{member.name}</h3>
                <p className="text-soft-yellow font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-soft-yellow/20 to-sky-blue-50 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-6">Want to Be Part of Our Story? 📚</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join hundreds of families who have chosen Bumblebee Vellore for their child's first steps in education.
            </p>

            <motion.button
              className="bg-soft-yellow hover:bg-yellow-400 text-black-accent font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 213, 79, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule a Visit</span>
              <span>🏫</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

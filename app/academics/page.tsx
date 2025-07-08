"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/Navigation"
import FloatingBees from "@/components/FloatingBees"
import CloudBackground from "@/components/CloudBackground"
import { BookOpen, Palette, Music, Users, Zap, Heart } from "lucide-react"

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("honey-cubs")

  const programs = {
    "honey-cubs": {
      title: "Honey Cubs",
      subtitle: "Nursery (2-3 years)",
      description: "Our youngest learners begin their journey with gentle care and playful exploration.",
      icon: "🍯",
      color: "bg-soft-yellow",
      features: [
        { icon: Heart, title: "Gentle Transition", desc: "Smooth separation from parents with loving care" },
        { icon: Users, title: "Social Skills", desc: "Learning to play and share with friends" },
        { icon: BookOpen, title: "Story Time", desc: "Daily storytelling to develop language skills" },
        { icon: Music, title: "Rhyme & Song", desc: "Musical activities for cognitive development" },
      ],
      activities: ["Sensory Play", "Art & Craft", "Circle Time", "Free Play", "Snack Time", "Outdoor Fun"],
    },
    "flower-buds": {
      title: "Flower Buds",
      subtitle: "LKG (3-4 years)",
      description: "Building confidence and curiosity through structured play and early learning concepts.",
      icon: "🌸",
      color: "bg-pink-200",
      features: [
        { icon: BookOpen, title: "Pre-Reading", desc: "Letter recognition and phonics introduction" },
        { icon: Zap, title: "Number Fun", desc: "Basic counting and number recognition" },
        { icon: Palette, title: "Creative Arts", desc: "Drawing, coloring, and craft activities" },
        { icon: Users, title: "Group Activities", desc: "Collaborative learning and teamwork" },
      ],
      activities: [
        "Alphabet Games",
        "Number Play",
        "Science Experiments",
        "Drama & Role Play",
        "Garden Time",
        "Library Visit",
      ],
    },
    "bumble-explorers": {
      title: "Bumble Explorers",
      subtitle: "UKG (4-5 years)",
      description: "Preparing for primary school with advanced skills and independent learning.",
      icon: "🔍",
      color: "bg-sky-blue-200",
      features: [
        { icon: BookOpen, title: "Reading Ready", desc: "Simple word reading and comprehension" },
        { icon: Zap, title: "Math Concepts", desc: "Addition, subtraction, and problem solving" },
        { icon: Palette, title: "Project Work", desc: "Independent and group project completion" },
        { icon: Users, title: "Leadership", desc: "Taking responsibility and helping others" },
      ],
      activities: [
        "Writing Practice",
        "Math Puzzles",
        "Science Projects",
        "Public Speaking",
        "Computer Basics",
        "Field Trips",
      ],
    },
  }

  const tabs = [
    { id: "honey-cubs", label: "Honey Cubs", icon: "🍯" },
    { id: "flower-buds", label: "Flower Buds", icon: "🌸" },
    { id: "bumble-explorers", label: "Bumble Explorers", icon: "🔍" },
  ]

  const currentProgram = programs[activeTab]

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
              Our <span className="text-soft-yellow">Academic Programs</span> 📚
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate learning experiences designed to nurture every child's unique potential through play,
              exploration, and joyful discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="py-8 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? "bg-soft-yellow text-black-accent shadow-lg scale-105"
                    : "bg-white/70 text-gray-700 hover:bg-white hover:shadow-md"
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-8 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Program Header */}
              <div className="text-center mb-12">
                <motion.div
                  className="text-8xl mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {currentProgram.icon}
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-black-accent mb-2">{currentProgram.title}</h2>
                <p className="text-xl text-soft-yellow font-semibold mb-4">{currentProgram.subtitle}</p>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">{currentProgram.description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {currentProgram.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <motion.div
                      className={`w-16 h-16 ${currentProgram.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon size={32} className="text-black-accent" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-black-accent mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Daily Activities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/70 rounded-3xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-black-accent mb-6">Daily Activities 🎯</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {currentProgram.activities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`${currentProgram.color} rounded-2xl p-4 font-semibold text-black-accent shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      {activity}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Bees Animation */}
              <div className="relative mt-8">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: "50%",
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, -10, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    🐝
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">Our Learning Approach 🎨</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We believe in learning through play, exploration, and hands-on experiences that make education joyful and
              meaningful.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Play-Based Learning",
                description:
                  "Children learn best when they're having fun! Our curriculum integrates play into every lesson.",
                icon: "🎮",
                color: "bg-soft-yellow",
              },
              {
                title: "Individual Attention",
                description: "Small class sizes ensure every child receives personalized care and attention.",
                icon: "👥",
                color: "bg-sky-blue-100",
              },
              {
                title: "Holistic Development",
                description: "We focus on cognitive, social, emotional, and physical development equally.",
                icon: "🌟",
                color: "bg-green-100",
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  className={`w-20 h-20 ${approach.color} rounded-full flex items-center justify-center mx-auto mb-6 text-4xl`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {approach.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-black-accent mb-4">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-soft-yellow/20 to-sky-blue-50 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-6">
              Ready to Start Your Child's Learning Journey? 🚀
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Schedule a visit to see our programs in action and meet our wonderful teachers!
            </p>

            <motion.button
              className="bg-soft-yellow hover:bg-yellow-400 text-black-accent font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 213, 79, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book a School Tour</span>
              <span>🏫</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

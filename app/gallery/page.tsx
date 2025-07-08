"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/Navigation"
import FloatingBees from "@/components/FloatingBees"
import CloudBackground from "@/components/CloudBackground"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const images = [
  {
    id: 1,
    src: "/art.jpg",
    title: "Art & Craft Time",
    category: "activities",
    description: "Children creating beautiful masterpieces with colors and imagination!",
    emoji: "🎨",
  },
  {
    id: 2,
    src: "/playground.jpg",
    title: "Playground Fun",
    category: "outdoor",
    description: "Laughter and joy fill the air during outdoor playtime!",
    emoji: "🛝",
  },
  {
    id: 3,
    src: "/story.jpg",
    title: "Story Circle",
    category: "learning",
    description: "Magical storytelling sessions that spark imagination!",
    emoji: "📚",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    title: "Music & Dance",
    category: "activities",
    description: "Little ones expressing themselves through rhythm and movement!",
    emoji: "🎵",
  },
  {
    id: 5,
    src: "/garden.jpg",
    title: "Garden Exploration",
    category: "outdoor",
    description: "Discovering nature's wonders in our beautiful garden!",
    emoji: "🌱",
  },
  {
    id: 6,
    src: "/science.jpg",
    title: "Science Experiments",
    category: "learning",
    description: "Young scientists making amazing discoveries!",
    emoji: "🔬",
  },
  {
    id: 7,
    src: "/cooking.jpg",
    title: "Cooking Class",
    category: "activities",
    description: "Little chefs learning to make healthy snacks!",
    emoji: "👨‍🍳",
  },
  {
    id: 8,
    src: "/sports.jpg",
    title: "Sports Day",
    category: "events",
    description: "Annual sports day filled with excitement and teamwork!",
    emoji: "🏃‍♂️",
  },
  {
    id: 9,
    src: "/birthday.jpg",
    title: "Birthday Celebrations",
    category: "events",
    description: "Making every birthday special with friends and cake!",
    emoji: "🎂",
  },
];

  const categories = [
    { id: "all", label: "All Photos", emoji: "📸" },
    { id: "activities", label: "Activities", emoji: "🎨" },
    { id: "outdoor", label: "Outdoor Fun", emoji: "🌳" },
    { id: "learning", label: "Learning", emoji: "📚" },
    { id: "events", label: "Events", emoji: "🎉" },
  ]

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-sky-blue-50 to-cream-100">
      <Navigation />
      <CloudBackground />
      <FloatingBees />

      {/* Hero Section */}
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
              Our <span className="text-soft-yellow">Gallery</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                📸
              </motion.span>
            </motion.h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Take a peek into our magical world of learning, playing, and growing together! Every moment is a precious
              memory in the making. ✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-2 ${
                  filter === category.id
                    ? "bg-soft-yellow text-black-accent shadow-lg scale-105"
                    : "bg-white/70 text-gray-700 hover:bg-white hover:shadow-md"
                }`}
                whileHover={{ scale: filter === category.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={filter === category.id ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  {category.emoji}
                </motion.span>
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: Math.random() * 6 - 3,
                    y: -10,
                  }}
                  className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                  onClick={() => setSelectedImage(image.id)}
                >
                  {/* Polaroid style border */}
                  <div className="bg-white p-2 rounded-2xl shadow-inner">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-48 "
                      />

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-soft-yellow/20 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="text-4xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                        >
                          {image.emoji}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Image info */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-black-accent mb-2 flex items-center justify-center space-x-2">
                      <span>{image.title}</span>
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {image.emoji}
                      </motion.span>
                    </h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>

                  {/* Floating hearts on hover */}
                  <motion.div
                    className="absolute top-2 right-2 text-pink-400"
                    whileHover={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    💕
                  </motion.div>

                  {/* Sparkle effect */}
                  {Array.from({ length: 3 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-yellow-300"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X size={20} />
              </button>

              {(() => {
                const image = images.find((img) => img.id === selectedImage)
                if (!image) return null

                return (
                  <div className="text-center">
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {image.emoji}
                    </motion.div>
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-64 object-cover rounded-2xl mb-4"
                    />
                    <h3 className="text-2xl font-bold text-black-accent mb-2">{image.title}</h3>
                    <p className="text-gray-600">{image.description}</p>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fun Stats */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">
              Our Happy Moments
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                📊
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Photos", emoji: "📸", color: "bg-soft-yellow" },
              { number: "200+", label: "Smiling Faces", emoji: "😊", color: "bg-pink-100" },
              { number: "50+", label: "Fun Activities", emoji: "🎨", color: "bg-sky-blue-100" },
              { number: "365", label: "Days of Joy", emoji: "🌟", color: "bg-green-100" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`${stat.color} rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                >
                  {stat.emoji}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-black-accent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import FloatingBees from "@/components/FloatingBees"
import CloudBackground from "@/components/CloudBackground"
import { ArrowRight, Heart, Shield, Users, Star } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Heart,
      title: "Loving Care",
      description: "Every child receives individual attention and care from our dedicated teachers.",
      emoji: "💕",
      color: "bg-pink-100",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "A secure and nurturing space where children can explore and learn freely.",
      emoji: "🛡️",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Small Classes",
      description: "Low teacher-to-student ratios ensure personalized learning experiences.",
      emoji: "👥",
      color: "bg-blue-100",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Award-winning curriculum designed to bring out the best in every child.",
      emoji: "⭐",
      color: "bg-yellow-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-sky-blue-50 to-cream-100">
      <Navigation />
      <CloudBackground />
      <FloatingBees />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-black-accent mb-6 leading-tight"
                animate={{
                  textShadow: ["0 0 0px #FFD54F", "0 0 20px #FFD54F", "0 0 0px #FFD54F"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Welcome to <span className="text-soft-yellow">Bumblebee Vellore</span>
                <br />
                <motion.span
                  className="text-2xl md:text-3xl inline-flex items-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Where Little Minds Take Flight!
                  <motion.span
                    className="ml-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ✈️
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Join our magical learning journey where every child discovers their unique potential through play,
                creativity, and endless possibilities! 🌟✨
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <motion.button
                    className="honeycomb bg-soft-yellow hover:bg-yellow-400 text-black-accent font-bold py-4 px-8 text-lg transition-all duration-300 flex items-center justify-center space-x-2 min-w-[200px] h-16 relative overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(255, 213, 79, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-200, 200] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <span>Take a Tour</span>
                    <ArrowRight size={20} />
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      🎯
                    </motion.span>
                  </motion.button>
                </Link>

                <Link href="/gallery">
                  <motion.button
                    className="honeycomb bg-sky-blue-100 hover:bg-sky-blue-200 text-black-accent font-bold py-4 px-8 text-lg transition-all duration-300 flex items-center justify-center space-x-2 min-w-[200px] h-16"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(227, 242, 253, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Gallery</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      📸
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="text-9xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  🐝
                </motion.div>

                {/* Sparkles around the bee */}
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      left: `${50 + 60 * Math.cos((i * Math.PI * 2) / 8)}px`,
                      top: `${50 + 60 * Math.sin((i * Math.PI * 2) / 8)}px`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  >
                    ✨
                  </motion.div>
                ))}

                <motion.div
                  className="absolute -bottom-4 -left-4 text-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  🌸
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Parents Love Us */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-black-accent mb-4"
              animate={{
                color: ["#333333", "#FFD54F", "#333333"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Why Parents Love Us
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                💕
              </motion.span>
            </motion.h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover what makes Bumblebee Vellore the perfect place for your little one to grow and thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className={`${feature.color} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden`}
              >
                <motion.div
                  className="absolute top-2 right-2 text-4xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {feature.emoji}
                </motion.div>

                <motion.div
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon size={32} className="text-black-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-black-accent mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Mascot */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-6">
                Meet Buzzy!
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  🐝
                </motion.span>
                <br />
                <span className="text-2xl text-soft-yellow">Our Friendly Mascot</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Buzzy the Bee is always here to guide your little ones on their learning adventure! With a heart full of
                curiosity and wings ready for exploration, Buzzy makes every day at Bumblebee Vellore magical and
                memorable.
              </p>
              <motion.div
                className="inline-flex items-center space-x-2 bg-soft-yellow/20 rounded-full px-6 py-3 relative"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255, 213, 79, 0.3)",
                    "0 0 20px rgba(255, 213, 79, 0.6)",
                    "0 0 0px rgba(255, 213, 79, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="text-lg font-medium text-black-accent">"Let's learn and play together!"</span>
                <motion.span
                  className="text-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  💭
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <motion.div
                className="text-8xl md:text-9xl relative"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.2 }}
              >
                🐝{/* Heart trail */}
                <motion.div
                  className="absolute -top-4 -right-4 text-2xl"
                  animate={{
                    scale: [0, 1, 0],
                    y: [0, -20, -40],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                >
                  💕
                </motion.div>
              </motion.div>

              {/* Floating flowers around Buzzy */}
              {["🌸", "🌺", "🌻", "🌷"].map((flower, i) => (
                <motion.div
                  key={i}
                  className="absolute text-3xl"
                  style={{
                    left: `${20 + i * 25}%`,
                    top: `${20 + (i % 2) * 60}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                >
                  {flower}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-soft-yellow/20 to-sky-blue-50 relative z-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-black-accent mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Ready to Join Our Buzzing Community?
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                🎉
              </motion.span>
            </motion.h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Give your child the gift of joyful learning in a nurturing environment where every day is an adventure!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <motion.button
                  className="bg-soft-yellow hover:bg-yellow-400 text-black-accent font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 min-w-[200px] relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(255, 213, 79, 0.3)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-200, 200] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span>Apply Now</span>
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🚀
                  </motion.span>
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  className="bg-white hover:bg-gray-50 text-black-accent font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 min-w-[200px] border-2 border-soft-yellow"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule Visit</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    📅
                  </motion.span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Floating confetti */}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                rotate: [0, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
              }}
            >
              {["🎊", "🎉", "✨", "🌟", "💫"][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import FloatingBees from "@/components/FloatingBees"
import CloudBackground from "@/components/CloudBackground"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 via-sky-blue-50 to-cream-100 flex items-center justify-center">
        <Navigation />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
          className="text-center p-8 bg-white rounded-3xl shadow-2xl max-w-md mx-4"
        >
          <motion.div
            className="text-8xl mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            📧
          </motion.div>
          <h2 className="text-3xl font-bold text-black-accent mb-4">Message Sent!</h2>
          <p className="text-gray-700 mb-6">
            Thank you for reaching out! We'll get back to you within 24 hours with a buzzing response! 🐝
          </p>
          <motion.button
            onClick={() => setSubmitted(false)}
            className="bg-soft-yellow hover:bg-yellow-400 text-black-accent font-bold py-3 px-6 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </div>
    )
  }

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
              Get in <span className="text-soft-yellow">Touch</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                📞
              </motion.span>
            </motion.h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions, want to schedule a visit, or just want to say
              hello, we're here to help! 💕
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 98765 43210",
                subInfo: "Mon-Fri: 8AM-6PM",
                emoji: "📞",
                color: "bg-soft-yellow",
                description: "Speak with our friendly team",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "hello@bumblebeevellore.com",
                subInfo: "We reply within 24 hours",
                emoji: "📧",
                color: "bg-sky-blue-100",
                description: "Send us your questions",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Learning Street",
                subInfo: "Vellore, Tamil Nadu 632001",
                emoji: "📍",
                color: "bg-pink-100",
                description: "Come see our campus",
              },
              {
                icon: Clock,
                title: "School Hours",
                info: "8:00 AM - 4:00 PM",
                subInfo: "Monday to Friday",
                emoji: "🕐",
                color: "bg-green-100",
                description: "When we're buzzing with activity",
              },
            ].map((contact, index) => (
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
                className={`${contact.color} rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <motion.div
                  className="absolute top-2 right-2 text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                >
                  {contact.emoji}
                </motion.div>

                <motion.div
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <contact.icon size={32} className="text-black-accent" />
                </motion.div>

                <h3 className="text-xl font-bold text-black-accent mb-2">{contact.title}</h3>
                <p className="text-black-accent font-semibold mb-1">{contact.info}</p>
                <p className="text-gray-600 text-sm mb-2">{contact.subInfo}</p>
                <p className="text-gray-600 text-xs">{contact.description}</p>

                {/* Floating sparkles */}
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-yellow-300 text-sm"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${15 + i * 25}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3 + i * 0.5,
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">
              Find Us on the Map
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                🗺️
              </motion.span>
            </h2>
            <p className="text-lg text-gray-700">
              Located in the heart of Vellore, easy to reach from anywhere in the city!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Animated bee flying to location */}
            <motion.div
              className="absolute top-4 left-4 text-3xl z-10"
              animate={{
                x: [0, 100, 200, 300],
                y: [0, -20, 20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🐝
            </motion.div>

            {/* Map placeholder */}
            <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="text-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  📍
                </motion.div>
                <h3 className="text-2xl font-bold text-black-accent mb-2">Bumblebee Vellore</h3>
                <p className="text-gray-700">123 Learning Street, Vellore</p>
                <motion.button
                  className="mt-4 bg-soft-yellow hover:bg-yellow-400 text-black-accent font-bold py-2 px-6 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions 🧭
                </motion.button>
              </motion.div>

              {/* Floating location markers */}
              {Array.from({ length: 5 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                >
                  {["🏫", "🌳", "🚗", "🚌", "⛽"][i]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Animated bee watching */}
            <motion.div
              className="absolute top-4 right-4 text-4xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              🐝
            </motion.div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black-accent mb-4">
                Send Us a Message
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  💌
                </motion.span>
              </h2>
              <p className="text-gray-700">
                We'd love to hear from you! Drop us a line and we'll buzz back to you soon! 🐝
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <span>Your Name</span>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      👋
                    </motion.span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                    placeholder="Enter your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <span>Email Address</span>
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      📧
                    </motion.span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <span>Phone Number</span>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      📱
                    </motion.span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>

                {/* Subject */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <span>Subject</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      📝
                    </motion.span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                  <span>Your Message</span>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    💭
                  </motion.span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50 resize-none"
                  placeholder="Tell us how we can help you... 🌟"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div className="text-center pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-soft-yellow hover:bg-yellow-400 disabled:bg-gray-300 text-black-accent font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-3 mx-auto relative overflow-hidden"
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.05,
                    boxShadow: "0 10px 25px rgba(255, 213, 79, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-200, 200] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}

                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      >
                        🐝
                      </motion.div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      >
                        🚀
                      </motion.span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>

            {/* Floating elements */}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl opacity-20"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
              >
                {["💌", "📮", "✉️", "📬", "📭", "📪"][i]}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">
              Frequently Asked Questions
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                ❓
              </motion.span>
            </h2>
            <p className="text-lg text-gray-700">Quick answers to common questions from our buzzing community!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your school hours?",
                answer: "We're open Monday to Friday, 8:00 AM to 4:00 PM. Extended care is available until 6:00 PM.",
                emoji: "🕐",
              },
              {
                question: "What age groups do you accept?",
                answer:
                  "We welcome children from 2 to 5 years old across our three programs: Honey Cubs, Flower Buds, and Bumble Explorers.",
                emoji: "👶",
              },
              {
                question: "Do you provide meals?",
                answer: "Yes! We provide healthy, nutritious meals and snacks prepared fresh daily in our kitchen.",
                emoji: "🍎",
              },
              {
                question: "What's your teacher-to-student ratio?",
                answer:
                  "We maintain small class sizes with a 1:8 teacher-to-student ratio to ensure personalized attention.",
                emoji: "👩‍🏫",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="text-3xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {faq.emoji}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-black-accent mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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

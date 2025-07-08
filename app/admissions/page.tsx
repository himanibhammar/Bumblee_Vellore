"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import FloatingBees from "@/components/FloatingBees"
import CloudBackground from "@/components/CloudBackground"
import { Send, User, Mail, Phone, Calendar, Heart } from "lucide-react"

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    email: "",
    phone: "",
    childAge: "",
    program: "",
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
            🎉
          </motion.div>
          <h2 className="text-3xl font-bold text-black-accent mb-4">Application Submitted!</h2>
          <p className="text-gray-700 mb-6">
            Thank you for choosing Bumblebee Vellore! We'll contact you within 24 hours to schedule a visit.
          </p>
          <motion.button
            onClick={() => setSubmitted(false)}
            className="bg-soft-yellow hover:bg-yellow-400 text-black-accent font-bold py-3 px-6 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Another Application
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
              Join Our <span className="text-soft-yellow">Buzzing Family</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                🐝
              </motion.span>
            </motion.h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Start your child's magical learning journey with us! Fill out the form below and let's create beautiful
              memories together. ✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">
              Simple Admission Process
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                📋
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Apply Online",
                description: "Fill out our simple application form",
                emoji: "📝",
                color: "bg-soft-yellow",
              },
              {
                step: "2",
                title: "Schedule Visit",
                description: "We'll arrange a campus tour for you",
                emoji: "🏫",
                color: "bg-sky-blue-100",
              },
              {
                step: "3",
                title: "Meet & Greet",
                description: "Your child meets our teachers and friends",
                emoji: "👋",
                color: "bg-pink-100",
              },
              {
                step: "4",
                title: "Welcome Home",
                description: "Join our happy Bumblebee family!",
                emoji: "🎉",
                color: "bg-green-100",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`${step.color} rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative`}
              >
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black-accent text-white rounded-full flex items-center justify-center font-bold"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                >
                  {step.step}
                </motion.div>
                <motion.div
                  className="text-5xl mb-4 mt-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                >
                  {step.emoji}
                </motion.div>
                <h3 className="text-xl font-bold text-black-accent mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
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
                Application Form
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  📄
                </motion.span>
              </h2>
              <p className="text-gray-700">Let's get to know your little star! ⭐</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Child Name */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <User size={16} />
                    <span>Child's Name</span>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      👶
                    </motion.span>
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                    placeholder="Enter your child's name"
                  />
                </motion.div>

                {/* Parent Name */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <User size={16} />
                    <span>Parent's Name</span>
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      👨‍👩‍👧‍👦
                    </motion.span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                    placeholder="Enter your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <Mail size={16} />
                    <span>Email Address</span>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
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
                    <Phone size={16} />
                    <span>Phone Number</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      📱
                    </motion.span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>

                {/* Child Age */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>Child's Age</span>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      🎂
                    </motion.span>
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                  >
                    <option value="">Select age</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 years</option>
                  </select>
                </motion.div>

                {/* Program */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                    <Heart size={16} />
                    <span>Preferred Program</span>
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      🎓
                    </motion.span>
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50"
                  >
                    <option value="">Select program</option>
                    <option value="honey-cubs">Honey Cubs (Nursery)</option>
                    <option value="flower-buds">Flower Buds (LKG)</option>
                    <option value="bumble-explorers">Bumble Explorers (UKG)</option>
                  </select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label className="block text-sm font-bold text-black-accent mb-2 flex items-center space-x-2">
                  <span>Tell us about your child</span>
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
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-soft-yellow/30 rounded-2xl focus:border-soft-yellow focus:outline-none transition-all duration-300 bg-cream-50 resize-none"
                  placeholder="Share anything special about your child that you'd like us to know... 🌟"
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
                      <span>Sending Application...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Submit Application</span>
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
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl opacity-20"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + (i % 2) * 60}%`,
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
                {["🌸", "🌺", "🌻", "🌷", "🌹"][i]}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-white/50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black-accent mb-4">
              Need Help?
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                🤝
              </motion.span>
            </h2>
            <p className="text-lg text-gray-700">We're here to answer all your questions!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Call Us",
                info: "+91 98765 43210",
                emoji: "📞",
                color: "bg-soft-yellow",
                description: "Speak with our friendly admission team",
              },
              {
                title: "Email Us",
                info: "admissions@bumblebeevellore.com",
                emoji: "📧",
                color: "bg-sky-blue-100",
                description: "Send us your questions anytime",
              },
              {
                title: "Visit Us",
                info: "123 Learning Street, Vellore",
                emoji: "📍",
                color: "bg-pink-100",
                description: "Come see our beautiful campus",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`${contact.color} rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                >
                  {contact.emoji}
                </motion.div>
                <h3 className="text-xl font-bold text-black-accent mb-2">{contact.title}</h3>
                <p className="text-black-accent font-semibold mb-2">{contact.info}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

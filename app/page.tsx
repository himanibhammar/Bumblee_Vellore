"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function SplashPage() {
  const [step, setStep] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500)
    const timer2 = setTimeout(() => setStep(2), 2000)
    const timer3 = setTimeout(() => setStep(3), 4000)
    const timer4 = setTimeout(() => setStep(4), 5500)
    const timer5 = setTimeout(() => router.push("/home"), 7000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue-50 via-cream-50 to-soft-yellow/30 flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Stars */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        >
          ✨
        </motion.div>
      ))}

      <div className="text-center z-10">
        {/* Step 1: Bee appears */}
        {step >= 1 && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6 }}
            className="mb-8"
          >
            <motion.div
              className="text-9xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🐝
            </motion.div>
          </motion.div>
        )}

        {/* Step 2: Welcome text appears letter by letter */}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <div className="text-4xl md:text-6xl font-bold text-black-accent mb-4">
              {"Welcome to".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  className={letter === " " ? "inline-block w-4" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="text-3xl md:text-5xl font-bold text-soft-yellow">
              {"Bumblebee Vellore".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  className={letter === " " ? "inline-block w-4" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Flower garden appears */}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex justify-center space-x-4 mb-8"
          >
            {["🌸", "🌺", "🌻", "🌷", "🌹"].map((flower, index) => (
              <motion.div
                key={index}
                className="text-4xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
              >
                {flower}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Step 4: Loading with cute bees */}
        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center space-x-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="text-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              >
                🐝
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Floating hearts */}
      {step >= 2 &&
        Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            💕
          </motion.div>
        ))}
    </div>
  )
}

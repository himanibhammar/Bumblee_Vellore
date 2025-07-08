"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Bee {
  id: number
  x: number
  y: number
  delay: number
}

export default function FloatingBees() {
  const [bees, setBees] = useState<Bee[]>([])

  useEffect(() => {
    const newBees = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setBees(newBees)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {bees.map((bee) => (
        <motion.div
          key={bee.id}
          className="absolute text-2xl"
          style={{
            left: `${bee.x}%`,
            top: `${bee.y}%`,
          }}
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -30, 20, -10, 0],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: 8 + bee.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: bee.delay,
          }}
        >
          🐝
        </motion.div>
      ))}
    </div>
  )
}

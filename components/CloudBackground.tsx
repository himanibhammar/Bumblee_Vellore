"use client"

import { motion } from "framer-motion"

export default function CloudBackground() {
  const clouds = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 60 + 10,
    duration: Math.random() * 20 + 30,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute bg-white/30 cloud-shape"
          style={{
            width: cloud.size,
            height: cloud.size * 0.6,
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
          }}
          animate={{
            x: ["-100px", "100vw"],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

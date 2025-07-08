"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasBuzzed, setHasBuzzed] = useState(false);
  const router = useRouter();

  const welcomeText = "Welcome to Bumblebee Vellore";
  const letters = welcomeText.split("");

  // ⏳ Splash sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 1000);
    const timer2 = setTimeout(() => setCurrentStep(2), 4000);
    const timer3 = setTimeout(() => setCurrentStep(3), 6000);
    const timer4 = setTimeout(() => router.push("/"), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [router]);

  // 🐝 Trigger bee buzz sound on first interaction
  const handleBeeClick = () => {
    if (!hasBuzzed) {
      const buzz = new Audio("/sounds/bee-buzz.mp3");
      buzz.play().catch((err) => {
        console.warn("Bee buzz failed to play:", err);
      });
      setHasBuzzed(true);
    }
  };

  // 🎶 Optional: play background music
  const playMusic = () => {
    const music = new Audio("/sounds/kids-music.mp3");
    music.loop = true;
    music.volume = 0.5;
    music.play().catch(() => {});
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-blue-50 via-cream-50 to-soft-yellow/20 flex items-center justify-center overflow-hidden">
      {/* ✨ Floating Sparkles Background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-soft-yellow rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🎵 Music Toggle Button */}
      <button
        onClick={playMusic}
        className="absolute top-5 right-5 px-4 py-2 bg-cream-100 text-black rounded-full shadow font-bold text-sm hover:scale-105 transition z-20"
      >
        🎵 Play Music
      </button>

      <div className="text-center z-10">
        {/* 🐝 Flying Bee Animation */}
        <AnimatePresence>
          {currentStep >= 0 && (
            <motion.div
              className="text-8xl mb-8 cursor-pointer"
              onClick={handleBeeClick}
              animate={{
                x: [0, 100, 150, 0],
                y: [0, -30, 30, 0],
                rotate: [0, 20, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🐝
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✨ Welcome Text Animation */}
        <AnimatePresence>
          {currentStep >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
              <div className="text-4xl md:text-6xl font-bold text-black-accent mb-4">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className={letter === " " ? "inline-block w-2" : ""}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🌸 Flower Landing Animation */}
        <AnimatePresence>
          {currentStep >= 2 && (
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl mb-8"
            >
              🌸
            </motion.div>
          )}
        </AnimatePresence>

        {/* ⏳ Loading Dots */}
        <AnimatePresence>
          {currentStep >= 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-soft-yellow rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

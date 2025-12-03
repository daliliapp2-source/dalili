'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

interface Profile {
  type: string;
  name: string;
  image: string;
  logo: string;
  rating: number;
  reviews: number;
}

interface ProfileSliderProps {
  profiles: Profile[];
}

export default function ProfileSlider({ profiles }: ProfileSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll كل 5 ثواني
  useEffect(() => {
    if (isHovered) return; // توقف عند hover
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [profiles.length, isHovered]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
       <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={profiles[currentIndex].image}
              alt={profiles[currentIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
              <div>
                {/* الاسم واللوجو جنب بعض */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={profiles[currentIndex].logo}
                    alt={profiles[currentIndex].name}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <h3 className="text-xl font-semibold">{profiles[currentIndex].name}</h3>
                </div>
                {/* التقييم */}
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>
                    {profiles[currentIndex].rating} ({profiles[currentIndex].reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* الأسهم */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white/90 transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white/90 transition"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {profiles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

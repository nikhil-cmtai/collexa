"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trendingItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    href: "/internship",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/courses",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    href: "/jobs",
  },
];

// Create circular loop with extra items for seamless transition
const circularItems = [...trendingItems, ...trendingItems, ...trendingItems];

export default function TrendingSection() {
  const [currentIndex, setCurrentIndex] = useState(trendingItems.length); // Start from middle
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Update cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // Extra small: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // Small & Medium: 2 cards
      } else {
        setCardsPerSlide(3); // Large: 3 cards
      }
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;

    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    // If we reach the end of the middle set, instantly reset to beginning without animation
    if (newIndex >= trendingItems.length * 2) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(trendingItems.length);
        setIsTransitioning(false);
      }, 50); // Very short delay to allow transition to complete
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);

    // If we go before the middle set, instantly reset to end without animation
    if (newIndex < trendingItems.length) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(trendingItems.length * 2 - 1);
        setIsTransitioning(false);
      }, 50); // Very short delay to allow transition to complete
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Trending now
            </h2>
            <motion.div
              className="mb-1 md:mb-2 w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Navigation Button */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </motion.button>

          {/* Right Navigation Button */}
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </motion.button>

          <div className="overflow-hidden rounded-2xl md:rounded-3xl">
            <div
              className={`flex ${isTransitioning ? "" : "transition-transform duration-700 ease-in-out"}`}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3) * (3 / cardsPerSlide)}%)` 
              }}
            >
              {circularItems.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="flex-shrink-0 px-2 md:px-4 w-full sm:w-1/2 lg:w-1/3"
                >
                  <Link href={item.href || "#"}>
                    <div className="cursor-pointer">
                      <div className="relative h-48 md:h-56 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt="Trending opportunity"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

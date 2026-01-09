"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const partners = [
  { name: "Ornella", logo: "/partners/ornella.webp" },
  { name: "Frentzy", logo: "/partners/frentzy.webp" },
  { name: "Pinocchio", logo: "/partners/pinocchio.webp" },
  { name: "Revelio", logo: "/partners/revelio.webp" },
  { name: "Sotherm", logo: "/partners/logo-design-sotherm.webp" },
  { name: "Jurjut", logo: "/partners/jurjut.webp" },
  { name: "Merpano", logo: "/partners/design-logo-merpano.webp" },
  { name: "Horvel", logo: "/partners/horvel.webp" },
]

export function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollRef.current || isDragging || !isAutoScrolling) return

    const scrollContainer = scrollRef.current
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const autoScroll = () => {
      if (!isDragging && isAutoScrolling) {
        scrollPosition += scrollSpeed
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }

        scrollContainer.scrollLeft = scrollPosition
      }
      requestAnimationFrame(autoScroll)
    }

    const animationId = requestAnimationFrame(autoScroll)
    return () => cancelAnimationFrame(animationId)
  }, [isDragging, isAutoScrolling])

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setIsAutoScrolling(false)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Resume auto-scroll after a delay
    setTimeout(() => setIsAutoScrolling(true), 3000)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setTimeout(() => setIsAutoScrolling(true), 3000)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setIsAutoScrolling(false)
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setTimeout(() => setIsAutoScrolling(true), 3000)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-muted/30">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Scrollable Partners Carousel */}
        <div
          ref={scrollRef}
          className={cn(
            "flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide",
            "cursor-grab active:cursor-grabbing",
            "scroll-smooth"
          )}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex-shrink-0 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <div className="relative w-40 sm:w-48 lg:w-56 h-24 sm:h-28 lg:h-32 rounded-xl bg-card/80 backdrop-blur-sm border border-border/40 shadow-sm hover:shadow-md hover:border-border/60 transition-all duration-300 p-4 sm:p-5 lg:p-6 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={120}
                  className="w-full h-full object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, X, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingCtaEcommerce() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded options */}
      <div
        className={cn(
          "absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300",
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <a
          href="tel:+40728567830"
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-green-500 text-white font-medium shadow-lg hover:bg-green-600 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Sună acum</span>
        </a>
        <a
          href="https://wa.me/40728567830"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium shadow-lg hover:bg-[#20BD5A] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
        <a
          href="/contact"
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-brand text-white font-medium shadow-lg hover:bg-brand-light transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Solicită ofertă</span>
        </a>
      </div>

      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300",
          isExpanded ? "bg-foreground text-background rotate-45" : "bg-brand text-white glow-brand hover:scale-110",
        )}
        aria-label={isExpanded ? "Închide meniul" : "Deschide meniul de contact"}
      >
        {isExpanded ? <X className="w-6 h-6" /> : <ShoppingCart className="w-6 h-6" />}
      </button>
    </div>
  )
}

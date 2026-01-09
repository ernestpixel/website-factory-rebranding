"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, X, Send, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingCtaApps() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const showThreshold = 600
      setIsVisible(scrollY > showThreshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Floating CTA */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-20",
        )}
      >
        {/* Expanded Menu */}
        <div
          className={cn(
            "absolute bottom-full right-0 mb-3 flex flex-col gap-2 transition-all duration-300",
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
          )}
        >
          <a
            href="tel:+40728567830"
            className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-full shadow-lg hover:border-brand/50 transition-all group whitespace-nowrap"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-500" />
            </div>
            <span className="font-medium pr-2">Sună acum</span>
          </a>
          <a
            href="https://wa.me/40728567830"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-full shadow-lg hover:border-brand/50 transition-all group whitespace-nowrap"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <span className="font-medium pr-2">WhatsApp</span>
          </a>
          <a
            href="/contact"
            className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-full shadow-lg hover:border-brand/50 transition-all group whitespace-nowrap"
          >
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
              <Send className="w-5 h-5 text-brand" />
            </div>
            <span className="font-medium pr-2">Formular contact</span>
          </a>
        </div>

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
            isExpanded
              ? "bg-card border border-border"
              : "bg-brand text-brand-foreground glow-brand hover:glow-intense hover:scale-110",
          )}
        >
          {isExpanded ? <X className="w-6 h-6" /> : <ChevronUp className="w-6 h-6 animate-bounce" />}
        </button>
      </div>
    </>
  )
}

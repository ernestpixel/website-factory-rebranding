"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { FloatingElement } from "@/components/ui/floating-element"
import { cn } from "@/lib/utils"
import { Calculator, Clock, Shield } from "lucide-react"

export function PriceEstimatorHero() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()

  const features = [
    { icon: Clock, label: "60 secunde" },
    { icon: Calculator, label: "Estimare precisă" },
    { icon: Shield, label: "Fără obligații" },
  ]

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-brand/10 blur-[100px]"
          delay={0}
          duration={10}
        />
        <FloatingElement
          className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-glow-violet/15 blur-[80px]"
          delay={2}
          duration={8}
        />
      </div>

      {/* Decorative metallic shapes */}
      <div className="absolute top-20 right-10 md:right-20 w-16 h-16 md:w-24 md:h-24">
        <div
          className="w-full h-full metallic-surface rounded-2xl opacity-40"
          style={{ animation: "morph 14s ease-in-out infinite" }}
        />
      </div>
      <div className="absolute bottom-16 left-10 md:left-20 w-12 h-12 md:w-20 md:h-20">
        <div
          className="w-full h-full bg-gradient-to-br from-glow-cyan/40 to-brand/30 rounded-xl blur-sm opacity-50"
          style={{ animation: "morph 10s ease-in-out infinite reverse" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-1000",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Label */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-sm font-medium text-brand mb-6">
            <Calculator className="w-4 h-4" />
            Calculator Preț Website
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Estimează cât costă <br></br><span className="gradient-text-animated">site-ul tău</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
            Completează formularul în mai puțin de un minut și primește o estimare personalizată pentru proiectul tău.
          </p>

          {/* Feature badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-foreground/80"
              >
                <feature.icon className="w-4 h-4 text-brand" />
                {feature.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { FloatingElement } from "@/components/ui/floating-element"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Alexandru Popescu",
    role: "CEO, TechStart SRL",
    content:
      "Website Factory ne-a transformat complet prezența online. Site-ul nou a generat de 3 ori mai multe lead-uri în prima lună.",
    avatar: "/professional-businessman-portrait-confident.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Ionescu",
    role: "Fondator, Boutique Elena",
    content:
      "Magazinul online creat de ei a depășit toate așteptările. Vânzările au crescut cu 200% și clienții adoră experiența de cumpărare.",
    avatar: "/professional-businesswoman-portrait-elegant.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Dan Gheorghe",
    role: "Director Marketing, HealthPlus",
    content:
      "Profesionalism de top! Au înțeles exact ce ne trebuie și au livrat un site care ne-a poziționat pe primul loc în Google pentru termenii cheie.",
    avatar: "/professional-man-suit-corporate.jpg",
    rating: 5,
  },
]

export function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand/8 blur-[100px]"
          delay={0}
          duration={11}
        />
        <FloatingElement
          className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-glow-violet/10 blur-[80px]"
          delay={2}
          duration={9}
        />
        <FloatingElement
          className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-glow-cyan/8 blur-[60px]"
          delay={1}
          duration={13}
        />
      </div>

      <div
        className="absolute top-20 right-10 lg:right-20 w-24 h-24 lg:w-36 lg:h-36 metallic-surface rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-15"
        style={{ animation: "morph 15s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-20 left-10 lg:left-20 w-20 h-20 lg:w-28 lg:h-28 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-sm opacity-20"
        style={{
          background: "linear-gradient(135deg, var(--glow-cyan), var(--brand))",
          animation: "morph 12s ease-in-out infinite reverse",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 lg:mb-20 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-block text-sm font-medium text-brand tracking-widest uppercase mb-4">
            Testimoniale
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Ce spun <span className="gradient-text">clienții noștri</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback real de la companii care au ales să lucreze cu noi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "group relative p-8 rounded-3xl",
                "bg-card/80 backdrop-blur-sm border border-border/50",
                "transition-all duration-500",
                "hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5",
                "card-lift card-metallic",
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/5 via-transparent to-glow-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote icon with gradient background */}
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-brand-light flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-brand/30 transition-all duration-500">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating stars */}
              <div className="relative flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>

              {/* Content */}
              <p className="relative text-foreground leading-relaxed mb-8 text-balance">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="relative flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover ring-2 ring-border group-hover:ring-brand/50 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-brand transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-brand to-brand-light blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

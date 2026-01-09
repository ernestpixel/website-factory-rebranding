"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Target, Lightbulb, Rocket, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const storyPoints = [
  {
    icon: Lightbulb,
    title: "Ideea",
    description:
      "Am început cu o idee simplă: fiecare afacere merită o prezență online care să reflecte adevărata sa valoare.",
  },
  {
    icon: Target,
    title: "Misiunea",
    description:
      "Nu creăm doar site-uri. Construim instrumente de business care generează lead-uri, vânzări și creștere.",
  },
  {
    icon: Rocket,
    title: "Viziunea",
    description:
      "Să fim agenția de web design din România cunoscută pentru rezultate măsurabile, nu doar design frumos.",
  },
  {
    icon: Heart,
    title: "Pasiunea",
    description: "Fiecare proiect primește aceeași atenție și dedicare, indiferent de dimensiune sau buget.",
  },
]

export function CompanyStory() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal()
  const { ref: pointsRef, isVisible: pointsVisible } = useScrollReveal()

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-24 lg:pb-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-block text-sm font-medium text-brand tracking-widest uppercase mb-4">
            Povestea noastră
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            De la doi antreprenori la <span className="gradient-text">o echipă de experți</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image with overlay effects */}
          <div
            ref={imageRef}
            className={cn(
              "relative transition-all duration-1000",
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            )}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src="/modern-creative-agency-office-workspace-with-compu.jpg" alt="Biroul Website Factory" fill className="object-cover" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/30 via-transparent to-glow-violet/20" />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 max-w-xs">
              <div className="glass-premium rounded-2xl p-6">
                <p className="text-sm italic text-foreground/80 leading-relaxed">
                  "Când am început Website Factory, visul nostru era să ajutăm afacerile locale să concureze la nivel
                  global."
                </p>
                <p className="mt-3 text-xs font-semibold text-brand">— Ernest & Alex, Co-fondatori</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 metallic-surface rounded-2xl opacity-40"
              style={{ animation: "morph 12s ease-in-out infinite" }}
            />
          </div>

          {/* Right - Story points */}
          <div
            ref={pointsRef}
            className={cn(
              "space-y-6 transition-all duration-1000 delay-200",
              pointsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            )}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Website Factory a luat naștere în 2021 în Timișoara, din dorința a doi tineri antreprenori de a schimba
              modul în care afacerile românești abordează prezența online.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Am observat că majoritatea agențiilor livrau site-uri frumoase, dar care nu generau rezultate concrete. Am
              decis să facem lucrurile diferit:{" "}
              <strong className="text-foreground">
                fiecare pixel, fiecare linie de cod trebuie să servească un scop de business.
              </strong>
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {storyPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <div
                    key={point.title}
                    className="group p-5 rounded-2xl bg-card border border-border/50 card-metallic card-lift"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3 group-hover:bg-brand/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

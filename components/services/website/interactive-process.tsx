"use client"

import { useState } from "react"
import { Search, PenTool, Code2, TestTube, Rocket, HeartHandshake, ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Descoperire",
    shortTitle: "Brief",
    duration: "Ziua 1-2",
    description:
      "Începem cu o întâlnire de discovery unde înțelegem afacerea ta, obiectivele, publicul țintă și competiția. Analizăm ce funcționează și ce nu în industria ta.",
    deliverables: ["Brief de proiect", "Analiza competiție", "Propunere soluție"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design & Prototip",
    shortTitle: "Design",
    duration: "Ziua 3-7",
    description:
      "Creăm wireframe-uri și mockup-uri interactive. Validăm fiecare decizie de design cu tine înainte de a trece la implementare. Revizuiri nelimitate până ești mulțumit.",
    deliverables: ["Wireframes", "Design UI complet", "Prototip interactiv"],
    color: "from-violet-500 to-purple-500",
  },
  {
    step: 3,
    icon: Code2,
    title: "Dezvoltare",
    shortTitle: "Code",
    duration: "Ziua 8-14",
    description:
      "Construim site-ul folosind cele mai noi tehnologii. Cod curat, performant, optimizat SEO din prima zi. Fiecare linie de cod este scrisă pentru viteză și scalabilitate.",
    deliverables: ["Frontend responsive", "Integrare CMS", "Optimizare performanță"],
    color: "from-brand to-indigo-500",
  },
  {
    step: 4,
    icon: TestTube,
    title: "Testare & QA",
    shortTitle: "Test",
    duration: "Ziua 15-17",
    description:
      "Testăm riguros pe toate browserele și dispozitivele. Verificăm performanța, securitatea și funcționalitățile. Corectăm orice problemă înainte de lansare.",
    deliverables: ["Raport testare", "Optimizări finale", "Checklist lansare"],
    color: "from-amber-500 to-orange-500",
  },
  {
    step: 5,
    icon: Rocket,
    title: "Lansare",
    shortTitle: "Launch",
    duration: "Ziua 18-20",
    description:
      "Configurăm hosting, domeniu și SSL. Lansăm site-ul live, setăm Google Analytics și Search Console. Te ghidăm prin toate setările importante.",
    deliverables: ["Site live", "Analytics setup", "Training administrare"],
    color: "from-green-500 to-emerald-500",
  },
  {
    step: 6,
    icon: HeartHandshake,
    title: "Suport & Creștere",
    shortTitle: "Suport",
    duration: "Ongoing",
    description:
      "30 de zile suport gratuit post-lansare. Monitorizăm performanța, oferim recomandări de optimizare și suntem aici pentru orice întrebare sau ajustare.",
    deliverables: ["Suport 30 zile", "Rapoarte performanță", "Consultanță SEO"],
    color: "from-pink-500 to-rose-500",
  },
]

export function InteractiveProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  const currentStep = processSteps[activeStep]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-block text-sm font-medium text-brand tracking-widest uppercase mb-4">
            Procesul Nostru
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Cum creăm <span className="gradient-text">website-ul tău</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proces transparent, testat pe 150+ proiecte. Știi exact ce se întâmplă în fiecare etapă.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Step Indicators - Horizontal scroll on mobile */}
          <div className="relative mb-12">
            {/* Progress line */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-border">
              <div
                className="h-full bg-gradient-to-r from-brand to-brand-light transition-all duration-500"
                style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="flex overflow-x-auto lg:overflow-visible gap-2 lg:gap-0 lg:justify-between pb-4 lg:pb-0 scrollbar-hide">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = index === activeStep
                const isPast = index < activeStep

                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "flex-shrink-0 flex flex-col items-center gap-2 lg:gap-3 p-3 lg:p-0 rounded-xl lg:rounded-none transition-all duration-300",
                      isActive ? "lg:scale-110" : "hover:scale-105",
                    )}
                  >
                    <div
                      className={cn(
                        "relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300",
                        isActive
                          ? "bg-brand border-brand text-brand-foreground scale-110 glow-brand"
                          : isPast
                            ? "bg-brand/20 border-brand text-brand"
                            : "bg-card border-border text-muted-foreground hover:border-brand/50",
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      {isPast && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <p
                        className={cn(
                          "text-xs font-semibold transition-colors lg:text-sm",
                          isActive ? "text-brand" : "text-muted-foreground",
                        )}
                      >
                        <span className="lg:hidden">{step.shortTitle}</span>
                        <span className="hidden lg:inline">{step.title}</span>
                      </p>
                      <p className="text-[10px] lg:text-xs text-muted-foreground hidden lg:block">{step.duration}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Step Details */}
          <div
            key={currentStep.step}
            className="grid lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Info */}
            <div className="glass-premium rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={cn(
                    "flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br",
                    currentStep.color,
                  )}
                >
                  <currentStep.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pasul {currentStep.step}</p>
                  <h3 className="font-heading text-2xl font-bold">{currentStep.title}</h3>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">{currentStep.description}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-brand" />
                <span>
                  Durată estimată: <strong className="text-foreground">{currentStep.duration}</strong>
                </span>
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold mb-6">Ce primești:</h4>
              {currentStep.deliverables.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-brand/30 transition-colors group"
                  style={{
                    animation: `fadeInRight 0.4s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br",
                      currentStep.color,
                    )}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

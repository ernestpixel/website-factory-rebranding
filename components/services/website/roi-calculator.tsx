"use client"

import { useState } from "react"
import { Calculator, TrendingUp, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { FloatingElement } from "@/components/ui/floating-element"
import { cn } from "@/lib/utils"

export function ROICalculator() {
  const { ref, isVisible } = useScrollReveal()
  const [visitors, setVisitors] = useState(1000)
  const [conversionOld, setConversionOld] = useState(1)
  const [orderValue, setOrderValue] = useState(100)

  // Assume new website improves conversion by 3x (industry standard for good redesign)
  const conversionNew = Math.min(conversionOld * 3, 15)
  const leadsOld = Math.round(visitors * (conversionOld / 100))
  const leadsNew = Math.round(visitors * (conversionNew / 100))
  const revenueOld = leadsOld * orderValue
  const revenueNew = leadsNew * orderValue
  const improvement = revenueNew - revenueOld

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand/5 to-background" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-brand/10 blur-[100px]"
          delay={0}
          duration={12}
        />
        <div className="absolute bottom-20 right-20 w-32 h-32 hidden lg:block">
          <div
            className="w-full h-full metallic-surface rounded-3xl opacity-25"
            style={{ animation: "morph 12s ease-in-out infinite" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand tracking-widest uppercase mb-4">
            <Calculator className="w-4 h-4" />
            Calculator ROI
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Cât poți <span className="gradient-text">câștiga</span> în plus?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Folosește calculatorul pentru a vedea impactul unui website profesional asupra afacerii tale.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="glass-premium rounded-3xl p-8">
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand">1</span>
                Introdu datele tale
              </h3>

              <div className="space-y-6">
                {/* Visitors */}
                <div>
                  <label className="flex items-center justify-between text-sm font-medium mb-2">
                    <span>Vizitatori lunari pe site</span>
                    <span className="text-brand font-bold">{visitors.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    step="100"
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-border appearance-none cursor-pointer accent-brand"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>100</span>
                    <span>50.000</span>
                  </div>
                </div>

                {/* Current Conversion */}
                <div>
                  <label className="flex items-center justify-between text-sm font-medium mb-2">
                    <span>Rata de conversie actuală</span>
                    <span className="text-brand font-bold">{conversionOld}%</span>
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.5"
                    value={conversionOld}
                    onChange={(e) => setConversionOld(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-border appearance-none cursor-pointer accent-brand"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0.5%</span>
                    <span>5%</span>
                  </div>
                </div>

                {/* Order Value */}
                <div>
                  <label className="flex items-center justify-between text-sm font-medium mb-2">
                    <span>Valoare medie comandă/lead</span>
                    <span className="text-brand font-bold">{orderValue}€</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={orderValue}
                    onChange={(e) => setOrderValue(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-border appearance-none cursor-pointer accent-brand"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>10€</span>
                    <span>1.000€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="glass-premium rounded-3xl p-8 bg-gradient-to-br from-brand/5 to-transparent">
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand">2</span>
                Rezultate estimate
              </h3>

              <div className="space-y-6">
                {/* Before/After comparison */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Acum</p>
                    <p className="text-2xl font-bold text-foreground/60">{leadsOld}</p>
                    <p className="text-sm text-muted-foreground">lead-uri/lună</p>
                  </div>
                  <div className="p-4 rounded-xl bg-brand/10 border border-brand/30">
                    <p className="text-xs text-brand uppercase tracking-wider mb-1">Cu site nou</p>
                    <p className="text-2xl font-bold text-brand">{leadsNew}</p>
                    <p className="text-sm text-muted-foreground">lead-uri/lună</p>
                  </div>
                </div>

                {/* Revenue comparison */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium">Venit suplimentar lunar</p>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-4xl font-bold text-green-500">+{improvement.toLocaleString()}€</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Asta înseamnă <strong className="text-foreground">{(improvement * 12).toLocaleString()}€/an</strong>{" "}
                    în plus
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand text-brand-foreground rounded-xl font-semibold hover:bg-brand-light transition-colors group"
                >
                  Vreau aceste rezultate
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-xs text-center text-muted-foreground">
                  * Estimări bazate pe îmbunătățirea medie a conversiei de 3x raportată de clienții noștri
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

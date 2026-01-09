"use client"

import { useState, useMemo } from "react"
import { Calculator, TrendingUp, ShoppingCart, Users, Euro } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

export function RevenueCalculator() {
  const { ref, isVisible } = useScrollReveal()
  const [visitors, setVisitors] = useState(5000)
  const [conversionRate, setConversionRate] = useState(2)
  const [avgOrderValue, setAvgOrderValue] = useState(150)

  const calculations = useMemo(() => {
    const currentOrders = Math.round((visitors * conversionRate) / 100)
    const currentRevenue = currentOrders * avgOrderValue

    // With optimized store (improved conversion + AOV)
    const improvedConversion = conversionRate * 1.5 // 50% better conversion
    const improvedAOV = avgOrderValue * 1.2 // 20% higher AOV
    const newOrders = Math.round((visitors * improvedConversion) / 100)
    const newRevenue = newOrders * improvedAOV

    const monthlyIncrease = newRevenue - currentRevenue
    const yearlyIncrease = monthlyIncrease * 12

    return {
      currentOrders,
      currentRevenue,
      newOrders,
      newRevenue,
      monthlyIncrease,
      yearlyIncrease,
      conversionIncrease: Math.round((improvedConversion - conversionRate) * 100) / 100,
      aovIncrease: Math.round(improvedAOV - avgOrderValue),
    }
  }, [visitors, conversionRate, avgOrderValue])

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-glow-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium mb-6">
            <Calculator className="w-4 h-4 text-brand" />
            <span className="text-sm font-medium">ROI Calculator</span>
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
            Calculează potențialul
            <span className="gradient-text"> de creștere</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vezi cum un magazin optimizat poate crește vânzările tale lunare.
          </p>
        </div>

        <div
          className={cn(
            "grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Inputs */}
          <div className="bg-card rounded-3xl border border-border/50 p-8">
            <h3 className="font-heading text-xl font-bold mb-8 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-brand" />
              Datele tale actuale
            </h3>

            <div className="space-y-8">
              {/* Visitors */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    Vizitatori lunari
                  </label>
                  <span className="text-lg font-bold text-brand">{visitors.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1,000</span>
                  <span>100,000</span>
                </div>
              </div>

              {/* Conversion Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    Rata de conversie (%)
                  </label>
                  <span className="text-lg font-bold text-brand">{conversionRate}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0.5%</span>
                  <span>5%</span>
                </div>
              </div>

              {/* AOV */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Euro className="w-4 h-4 text-muted-foreground" />
                    Valoare medie comandă (€)
                  </label>
                  <span className="text-lg font-bold text-brand">€{avgOrderValue}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>€20</span>
                  <span>€500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Current vs Optimized */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl border border-border/50 p-6">
                <div className="text-sm text-muted-foreground mb-2">Venit actual / lună</div>
                <div className="text-2xl font-bold text-foreground">
                  €{calculations.currentRevenue.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{calculations.currentOrders} comenzi</div>
              </div>
              <div className="bg-gradient-to-br from-brand/10 to-glow-violet/10 rounded-2xl border border-brand/30 p-6">
                <div className="text-sm text-brand mb-2">Venit optimizat / lună</div>
                <div className="text-2xl font-bold text-brand">€{calculations.newRevenue.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground mt-1">{calculations.newOrders} comenzi</div>
              </div>
            </div>

            {/* Increases */}
            <div className="bg-card rounded-2xl border border-border/50 p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Creștere estimată
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground">Lunar</div>
                  <div className="text-xl font-bold text-green-500">
                    +€{calculations.monthlyIncrease.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Anual</div>
                  <div className="text-xl font-bold text-green-500">
                    +€{calculations.yearlyIncrease.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Methodology */}
            <div className="bg-muted/50 rounded-2xl border border-border/30 p-6">
              <h4 className="font-semibold mb-3 text-sm">Cum calculăm?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  Conversie îmbunătățită cu 50% (UX optimizat, checkout rapid)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-glow-violet" />
                  AOV crescut cu 20% (upsell, cross-sell, bundle offers)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-glow-cyan" />
                  Bazat pe rezultatele clienților noștri existenți
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

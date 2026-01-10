"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Rocket, Code2, TrendingUp, Zap } from "lucide-react"

export function ClujContent() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="max-w-4xl mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                De ce ai nevoie de un site web sau aplicație pentru startup-ul tău din Cluj-Napoca?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                În 2026, <strong className="text-foreground">Cluj-Napoca</strong> este recunoscut ca{" "}
                <strong className="text-foreground">"Silicon Valley-ul României"</strong>, cu cel mai dinamic
                ecosistem tech din țară. Cu peste 150,000 de profesioniști IT, sute de startup-uri și companii tech
                globale (Amazon, Emag, Betfair, Bosch), competiția pentru talente și clienți este intensă. Un{" "}
                <strong className="text-foreground">site web modern sau aplicație web</strong> te ajută să te
                diferențiezi, să atragi investitori, să validezi rapid ideea pe piață și să scalezi eficient.
              </p>
            </div>

            {/* Industry Focus Cards */}
            <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
              <div className="p-6 rounded-xl glass-premium border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-violet-500" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Startup-uri Tech</h3>
                <p className="text-sm text-muted-foreground">
                  MVP-uri rapide pentru <strong>startup-uri Cluj</strong>: SaaS, fintech, edtech, healthtech.
                  Validare rapidă pe piață și scalare pentru creștere.
                </p>
              </div>

              <div className="p-6 rounded-xl glass-premium border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Companii IT & SaaS</h3>
                <p className="text-sm text-muted-foreground">
                  Site-uri corporate și <strong>aplicații web Cluj</strong> pentru companii IT, software houses,
                  agenții digitale. Design modern și tehnologii scalabile.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mb-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mt-12 mb-4">
                Servicii de Web Design și Dezvoltare Aplicații în Cluj-Napoca
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Website Factory</strong> oferă servicii complete de{" "}
                <strong className="text-foreground">creare site-uri web și aplicații în Cluj-Napoca</strong>,
                specializate pentru ecosistemul tech local. Fie că ai un startup în fază de idee și ai nevoie de un{" "}
                <strong className="text-foreground">MVP rapid</strong>, o companie SaaS care vrea să scaleze, sau o
                agenție IT care are nevoie de un site corporate impresionant, avem experiența și stack-ul tehnologic
                potrivit pentru tine.
              </p>
            </div>

            {/* Services List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8 not-prose">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">MVP pentru Startup-uri</h4>
                  <p className="text-sm text-muted-foreground">Validare rapidă în 4-8 săptămâni</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Aplicații Web SaaS</h4>
                  <p className="text-sm text-muted-foreground">Platforme scalabile și performante</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Site-uri pentru IT</h4>
                  <p className="text-sm text-muted-foreground">Corporate sites pentru companii tech</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Platforme Marketplace</h4>
                  <p className="text-sm text-muted-foreground">Conectare buyers și sellers</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mb-8 mt-12">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                SEO Local Cluj-Napoca - Domină Piața Tech din Transilvania
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">SEO local Cluj</strong> este esențial pentru startup-uri și
                companii tech care vor să fie găsite de clienți, investitori și talente. Optimizăm site-ul tău pentru
                termeni relevanți precum "dezvoltare software cluj", "startup tech cluj-napoca", "companie IT cluj",
                "web development cluj" sau orice alt termen specific industriei tale. Cu sute de companii tech în Cluj,
                trebuie să fii vizibil pe Google când potențialii clienți sau investitorii caută servicii.
              </p>
            </div>

            {/* SEO Benefits */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/5 to-brand/5 border border-violet-500/20 my-8 not-prose max-w-4xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Beneficii SEO Local Cluj-Napoca:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-violet-500" />
                      Vizibilitate maximă în ecosistemul tech Cluj
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-violet-500" />
                      Atragere investitori și parteneri strategici
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-violet-500" />
                      Recrutare talente tech din Cluj-Napoca
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-violet-500" />
                      Lead-uri B2B de la companii locale
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mb-8 mt-12">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                De ce să alegi Website Factory pentru startup-ul tău din Cluj?
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Cu peste <strong className="text-foreground">40 de proiecte finalizate</strong> pentru startup-uri și
                companii tech din Cluj-Napoca, înțelegem perfect dinamica ecosistemului local. Colaborăm cu
                acceleratoare (Innovation Labs, Cluj Innovation City), participăm la evenimente tech (Techsylvania,
                How to Web) și cunoaștem provocările startup-urilor românești. Oferim:{" "}
                <strong className="text-foreground">stack modern și scalabil</strong> (Next.js, React, TypeScript),{" "}
                <strong className="text-foreground">MVP rapid</strong> pentru validare piață (4-8 săptămâni),
                arhitectură pentru scalare de la 100 la 100,000+ utilizatori,{" "}
                <strong className="text-foreground">prețuri competitive</strong> și opțiuni de plată eșalonată,
                consultanță tehnică pentru alegerea stack-ului potrivit, și suport dedicat pentru dezvoltare continuă.
              </p>
            </div>

            {/* Technology Focus */}
            <div className="p-6 rounded-xl glass-premium border border-border/30 my-8 not-prose max-w-4xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Stack Modern & Scalabil pentru Startup-uri</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Folosim cele mai avansate tehnologii web pentru startup-uri tech din Cluj: Next.js 15 și React 19
                    pentru aplicații ultra-performante, TypeScript pentru cod type-safe și mentenabil, Node.js și
                    Python pentru backend scalabil, PostgreSQL și MongoDB pentru database, și cloud infrastructure
                    (AWS, Vercel, Supabase) pentru deployment instant și scalare automată.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Perfect pentru startup-uri care au nevoie de time-to-market rapid, arhitectură scalabilă pentru
                    creștere exponențială, și cod de calitate pentru atragerea investitorilor și dezvoltare viitoare.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mt-8">
              <p className="text-muted-foreground leading-relaxed">
                Contactează-ne astăzi pentru o <strong className="text-foreground">consultanță tehnică gratuită</strong>{" "}
                și un <strong className="text-foreground">plan personalizat</strong> pentru startup-ul tău din
                Cluj-Napoca!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Mountain, Briefcase, TrendingUp, Smartphone } from "lucide-react"

export function BrasovContent() {
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
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              De ce ai nevoie de un site web profesional pentru afacerea ta din Brașov?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              În 2026, <strong className="text-foreground">prezența online</strong> nu mai este opțională pentru
              afacerile din <strong className="text-foreground">Brașov și Transilvania</strong>. Cu peste 2 milioane de
              turiști anual care vizitează orașul, majoritatea căutărilor pentru servicii locale încep pe{" "}
              <strong className="text-foreground">Google</strong>. Un <strong className="text-foreground">site web optimizat SEO</strong>{" "}
              te ajută să fii găsit de clienții potențiali exact când caută serviciile tale.
            </p>

            {/* Industry Focus Cards */}
            <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
              <div className="p-6 rounded-xl glass-premium border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Turism & HoReCa</h3>
                <p className="text-sm text-muted-foreground">
                  Site-uri pentru <strong>pensiuni Brașov</strong>, restaurante, cafenele și agenții de turism.
                  Sisteme de rezervări online și galerii foto pentru atragerea turiștilor.
                </p>
              </div>

              <div className="p-6 rounded-xl glass-premium border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Business Local</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Magazine online Brașov</strong>, firme de servicii, cabinete medicale, saloane de
                  înfrumusețare. Soluții complete pentru afaceri locale.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mb-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mt-12 mb-4">
                Servicii de Web Design și Creare Site-uri în Brașov
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Website Factory</strong> oferă servicii complete de{" "}
                <strong className="text-foreground">creare site-uri web în Brașov</strong>, adaptate specificului local.
                Fie că ai o pensiune în <strong className="text-foreground">Poiana Brașov</strong>, un restaurant în{" "}
                <strong className="text-foreground">Centrul Vechi</strong>, sau o afacere în zonele Noua, Tractorul sau
                Astra, avem soluția potrivită pentru tine.
              </p>
            </div>

            {/* Services List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8 not-prose">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Site-uri de Prezentare</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect pentru firme mici, freelanceri și profesioniști din Brașov
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Magazine Online</h4>
                  <p className="text-sm text-muted-foreground">
                    Soluții eCommerce complete cu plăți online și integrări curier
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Site-uri pentru Pensiuni</h4>
                  <p className="text-sm text-muted-foreground">
                    Sisteme de rezervări, galerii foto și optimizare pentru turism
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Site-uri Restaurant</h4>
                  <p className="text-sm text-muted-foreground">
                    Meniu digital, comenzi online și integrare cu platforme delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mb-8 mt-12">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                SEO Local Brașov - Apari în Top pe Google
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">SEO local</strong> este esențial pentru afacerile din Brașov. Optimizăm
                site-ul tău să apară în top pe Google când clienții caută servicii în zona ta. Fie că vrei să rankezi pentru
                "cazare brașov", "restaurant brașov centru", "pensiune poiana brasov" sau orice alt termen specific afacerii
                tale, avem experiența necesară să te aducem în primele poziții.
              </p>
            </div>

            {/* SEO Benefits */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-brand/5 to-glow-cyan/5 border border-brand/20 my-8 not-prose max-w-4xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Beneficii SEO Local Brașov:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand" />
                      Vizibilitate crescută pe căutări locale Google
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand" />
                      Mai mulți clienți și rezervări de pe site
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand" />
                      Reducerea dependenței de platforme cu comisioane mari
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand" />
                      Poziționare pe Google Maps și recenzii
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mb-8 mt-12">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                De ce să alegi Website Factory pentru proiectul tău din Brașov?
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Cu peste <strong className="text-foreground">35 de proiecte finalizate</strong> pentru clienți din Brașov și
                zona Transilvaniei, știm exact ce funcționează pe piața locală. Oferim:{" "}
                <strong className="text-foreground">design modern și responsive</strong>,{" "}
                <strong className="text-foreground">optimizare SEO avansată</strong>, integrări complete (rezervări, plăți,
                hărți), <strong className="text-foreground">livrare rapidă</strong> (1-8 săptămâni), prețuri competitive și
                transparente, suport tehnic dedicat în limba română, și înțelegere profundă a specificului local și a
                industriei turistice din Brașov.
              </p>
            </div>

            {/* Mobile-First */}
            <div className="p-6 rounded-xl glass-premium border border-border/30 my-8 not-prose max-w-4xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Design Responsive & Mobile-First</h4>
                  <p className="text-sm text-muted-foreground">
                    Peste 70% din vizitatorii site-urilor din turism vin de pe telefon. Toate site-urile noastre sunt
                    optimizate perfect pentru mobile, tabletă și desktop. Site-ul tău va arăta impecabil pe orice
                    dispozitiv, oferind turiștilor o experiență plăcută când caută cazare sau servicii în Brașov.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mt-8">
              <p className="text-muted-foreground leading-relaxed">
                Contactează-ne astăzi pentru o <strong className="text-foreground">consultanță gratuită</strong> și un{" "}
                <strong className="text-foreground">proiect personalizat</strong> pentru afacerea ta din Brașov!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


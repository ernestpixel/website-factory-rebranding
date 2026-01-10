"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Waves, UtensilsCrossed, TrendingUp, Ship } from "lucide-react"

export function ConstantaContent() {
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
                De ce ai nevoie de un site web profesional pentru afacerea ta turistică din Constanța?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                În 2026, <strong className="text-foreground">Constanța și litoralul românesc</strong> atrag peste 3
                milioane de turiști anual, cu peste <strong className="text-foreground">80% din rezervări</strong>{" "}
                realizate online. Majoritatea turiștilor caută pe <strong className="text-foreground">Google</strong>{" "}
                termeni precum "hotel mamaia", "cazare litoral" sau "restaurant pe plajă constanța" înainte să
                rezerve. Un <strong className="text-foreground">site web optimizat SEO</strong> cu{" "}
                <strong className="text-foreground">sistem de rezervări online</strong> te ajută să fii găsit de
                turiști și să crești rezervările directe, reducând comisioanele către Booking.com și Airbnb.
              </p>
            </div>

            {/* Industry Focus Cards */}
            <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
              <div className="p-6 rounded-xl glass-premium border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Waves className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Turism & Cazare Litoral</h3>
                <p className="text-sm text-muted-foreground">
                  Site-uri pentru <strong>hoteluri Constanța</strong>, pensiuni Mamaia, vile de închiriat,
                  complexe all-inclusive. Sisteme de rezervări și galerii foto pentru atragerea turiștilor.
                </p>
              </div>

              <div className="p-6 rounded-xl glass-premium border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <UtensilsCrossed className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">HoReCa & Restaurante Plajă</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Restaurante litoral</strong>, cluburi de plajă, beach bar-uri, terase pe faleza Cazinoul.
                  Meniu digital, comenzi online și integrare delivery.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mb-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mt-12 mb-4">
                Servicii de Web Design și Creare Site-uri în Constanța
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Website Factory</strong> oferă servicii complete de{" "}
                <strong className="text-foreground">creare site-uri web în Constanța</strong>, specializate pentru
                industria turistică de pe litoral. Fie că ai un hotel în{" "}
                <strong className="text-foreground">Mamaia</strong>, o pensiune în{" "}
                <strong className="text-foreground">Eforie Nord</strong>, un restaurant pe plaja din{" "}
                <strong className="text-foreground">Vama Veche</strong>, sau o agenție de turism, avem experiența și
                soluțiile potrivite pentru a-ți maximiza rezervările și vizibilitatea online.
              </p>
            </div>

            {/* Services List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8 not-prose">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Site-uri Hoteluri</h4>
                  <p className="text-sm text-muted-foreground">
                    Cu rezervări online și galerii foto
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Site-uri Pensiuni</h4>
                  <p className="text-sm text-muted-foreground">
                    Pentru vile și cazare familia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Site-uri Restaurante</h4>
                  <p className="text-sm text-muted-foreground">
                    Meniu digital și comenzi online
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Agenții Turism</h4>
                  <p className="text-sm text-muted-foreground">
                    Pentru organizatori evenimente litoral
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mb-8 mt-12">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                SEO Local Constanța - Domină Căutările pentru Litoral
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">SEO local pentru litoral</strong> este crucial pentru hoteluri și
                afaceri turistice. În sezon (iunie-septembrie), termeni precum "cazare mamaia", "hotel constanta all
                inclusive", "pensiune eforie nord" sau "restaurant litoral" sunt căutați de zeci de mii de ori pe
                Google. Optimizăm site-ul tău să apară în top când turiștii caută, crescând rezervările directe cu
                40-60% și reducând dependența de platforme cu comisioane mari.
              </p>
            </div>

            {/* SEO Benefits */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/5 to-brand/5 border border-cyan-500/20 my-8 not-prose max-w-4xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Beneficii SEO Local Litoral:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-500" />
                      Vizibilitate maximă pe Google în sezonul de vârf
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-500" />
                      Mai multe rezervări directe, mai puține comisioane
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-500" />
                      Poziționare pe Google Maps pentru "hotel near me"
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-500" />
                      Atragere turiști români și străini
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mb-8 mt-12">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                De ce să alegi Website Factory pentru hotelul tău din Constanța?
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Cu peste <strong className="text-foreground">40 de proiecte finalizate</strong> pentru afaceri de pe
                litoralul românesc, înțelegem perfect dinamica turismului sezonier și cerințele industriei HoReCa.
                Oferim: <strong className="text-foreground">design modern și responsive</strong> optimizat pentru
                mobile (80% din rezervări), <strong className="text-foreground">sisteme complete de rezervări</strong>{" "}
                cu calendar și plăți online, <strong className="text-foreground">optimizare SEO sezonieră</strong>{" "}
                pentru termeni de vârf, galerii foto profesionale care vând experiența litoralului,{" "}
                <strong className="text-foreground">website-uri multilingve</strong> pentru turiști străini, integrări
                cu Booking.com și Airbnb (opțional), și suport dedicat în sezonul de vârf când ai nevoie cel mai mult.
              </p>
            </div>

            {/* Seasonal Focus */}
            <div className="p-6 rounded-xl glass-premium border border-border/30 my-8 not-prose max-w-4xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Ship className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Suport Sezonier Dedicat</h4>
                  <p className="text-sm text-muted-foreground">
                    Înțelegem specificul afacerilor sezoniere de pe litoral. Oferim suport intensiv în perioada
                    mai-septembrie când traficul și rezervările sunt la maxim, actualizări rapide de disponibilitate și
                    prețuri, și monitorizare 24/7 pentru a te asigura că nu pierzi nicio rezervare. În off-season
                    pregătim site-ul pentru sezonul următor și optimizăm pentru early booking. Perfect pentru hoteluri
                    și pensiuni care vor să maximizeze profitul în cele 3-4 luni cheie ale anului.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mt-8">
              <p className="text-muted-foreground leading-relaxed">
                Contactează-ne astăzi pentru o <strong className="text-foreground">consultanță gratuită</strong> și un{" "}
                <strong className="text-foreground">proiect personalizat</strong> pentru afacerea ta de pe litoralul
                românesc!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



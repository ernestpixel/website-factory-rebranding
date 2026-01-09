"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Cât durează dezvoltarea unui website?",
    answer:
      "Durata depinde de complexitatea proiectului. Un website de prezentare poate fi gata în 2-4 săptămâni, în timp ce un magazin online sau o aplicație web complexă poate dura 6-12 săptămâni. Vom stabili împreună un timeline clar în faza de planificare.",
  },
  {
    question: "Care este prețul pentru un website?",
    answer:
      "Prețurile variază în funcție de cerințele specifice ale proiectului. Un website de prezentare pornește de la 1.500€, un magazin online de la 2.500€, iar aplicațiile custom sunt estimate individual. Oferim întotdeauna o ofertă detaliată și transparentă înainte de a începe.",
  },
  {
    question: "Oferiți suport și mentenanță după lansare?",
    answer:
      "Da, oferim pachete de mentenanță lunară care includ actualizări de securitate, backup-uri regulate, modificări minore de conținut și suport tehnic. Suntem partenerii tăi pe termen lung, nu doar pentru dezvoltare.",
  },
  {
    question: "Cum funcționează procesul de colaborare?",
    answer:
      "Procesul nostru include 6 etape: Discovery (înțelegerea nevoilor), Strategie & Planificare, Design UI/UX, Dezvoltare, Testare & QA, și Lansare. Comunicăm constant prin ședințe regulate și acces la un portal de proiect dedicat.",
  },
  {
    question: "Lucrați cu clienți din afara Timișoarei?",
    answer:
      "Absolut! Deși suntem bazați în Timișoara, lucrăm cu clienți din toată România și din străinătate. Comunicăm eficient prin video call-uri, email și platforme de project management. Distanța nu este niciodată o barieră.",
  },
]

export function ContactFaq() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={cn(
            "text-center mb-12 transition-all duration-700",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand tracking-widest uppercase mb-4">
            <HelpCircle className="w-4 h-4" />
            Întrebări frecvente
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ai întrebări? Avem răspunsuri.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Găsește răspunsuri la cele mai comune întrebări despre serviciile noastre.
          </p>
        </div>

        <div
          ref={contentRef}
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700 delay-200",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl border border-border/50 px-6 overflow-hidden data-[state=open]:border-brand/30 transition-colors"
              >
                <AccordionTrigger className="py-5 text-left font-heading font-semibold text-foreground hover:text-brand transition-colors [&[data-state=open]]:text-brand">
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-sm font-bold text-brand">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional help CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Nu ai găsit răspunsul pe care îl cauți?</p>
            <a
              href="mailto:office@websitefactory.ro"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-light font-medium transition-colors"
            >
              Trimite-ne un email direct
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

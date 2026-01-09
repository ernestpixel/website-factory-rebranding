import { Hero } from "@/components/home/hero"
import { TrustStrip } from "@/components/home/trust-strip"
import { ServicesPreview } from "@/components/home/services-preview"
import { FeaturedWork } from "@/components/home/featured-work"
import { AboutPreview } from "@/components/home/about-preview"
import { Process } from "@/components/home/process"
import { Testimonials } from "@/components/home/testimonials"
import { Partners } from "@/components/home/partners"
import { FAQ } from "@/components/home/faq"
import { CTASection } from "@/components/home/cta-section"
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"
import { faqs } from "@/lib/content"

export default function HomePage() {
  // Generate JSON-LD schemas
  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Acasă", url: "/" }])
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Page Sections */}
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedWork />
      <AboutPreview />
      <Process />
      <Testimonials />
      <Partners />
      <FAQ />
      <CTASection />
    </>
  )
}

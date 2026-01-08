import type { Metadata } from "next"

// Base URL for the site
export const siteConfig = {
  name: "Website Factory",
  url: "https://websitefactory.ro",
  description:
    "Creare site-uri web profesionale în Timișoara. Web design SEO-first, performanță optimizată și conversii măsurabile.",
  locale: "ro_RO",
  address: {
    streetAddress: "Strada Exemplu 123",
    addressLocality: "Timișoara",
    addressRegion: "Timiș",
    postalCode: "307200",
    addressCountry: "RO",
  },
  contact: {
    telephone: "+40700000000",
    email: "contact@websitefactory.ro",
  },
}

// Generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-image.jpg",
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    keywords: [...keywords, "web design", "creare site", "Website Factory"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

// JSON-LD Schema generators
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.jpg`,
    telephone: siteConfig.contact.telephone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.7489,
      longitude: 21.2087,
    },
    areaServed: [
      { "@type": "City", name: "Timișoara" },
      { "@type": "City", name: "Cluj-Napoca" },
      { "@type": "City", name: "București" },
      { "@type": "City", name: "Brașov" },
      { "@type": "City", name: "Iași" },
      { "@type": "City", name: "Constanța" },
    ],
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://facebook.com/websitefactory",
      "https://instagram.com/websitefactory",
      "https://linkedin.com/company/websitefactory",
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "România",
    },
  }
}

export function generatePersonSchema({
  name,
  jobTitle,
  description,
  image,
  url,
  sameAs = [],
}: {
  name: string
  jobTitle: string
  description: string
  image?: string
  url: string
  sameAs?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url: `${siteConfig.url}${url}`,
    image: image ? `${siteConfig.url}${image}` : undefined,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    sameAs,
  }
}

import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://websitefactory.ro"),
  title: {
    default: "Creare site Timișoara | Web design Timișoara | Website Factory",
    template: "%s | Website Factory",
  },
  description:
    "Creare site-uri web profesionale în Timișoara. Web design SEO-first, performanță optimizată și conversii măsurabile. Solicită ofertă gratuită!",
  keywords: [
    "creare site Timișoara",
    "web design Timișoara",
    "dezvoltare web",
    "site-uri profesionale",
    "magazin online",
    "aplicații mobile",
  ],
  authors: [{ name: "Website Factory" }],
  creator: "Website Factory",
  publisher: "Website Factory",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://websitefactory.ro",
    siteName: "Website Factory",
    title: "Creare site Timișoara | Web design profesional | Website Factory",
    description:
      "Creare site-uri web profesionale în Timișoara. Web design SEO-first, performanță optimizată și conversii măsurabile.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Factory - Web Design Timișoara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creare site Timișoara | Website Factory",
    description: "Web design SEO-first, performanță optimizată și conversii măsurabile în Timișoara.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://websitefactory.ro",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1625" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <ThemeProvider>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-brand-foreground focus:rounded-md"
          >
            Salt la conținut
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

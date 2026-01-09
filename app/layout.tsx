import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import Script from "next/script"
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
    "De la idee la soluție digitală, creăm site-uri și magazine online în Timișoara: web design modern, viteză, SEO local și conversii.",
  keywords: [
    "creare site Timișoara",
    "web design Timișoara",
    "dezvoltare web",
    "site-uri profesionale",
    "magazin online",
    "aplicații mobile",
    "Firmă web design Timișoara",
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
    title: "Creare site Timișoara | Web design Timișoara | Website Factory",
    description:
      "De la idee la soluție digitală, creăm site-uri și magazine online în Timișoara: web design modern, viteză, SEO local și conversii.",
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
    title: "Creare site Timișoara | Web design Timișoara | Website Factory",
    description: "De la idee la soluție digitală, creăm site-uri și magazine online în Timișoara: web design modern, viteză, SEO local și conversii.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://websitefactory.ro",
  },
  icons: {
    icon: [
      { url: "/website-factory-logo-bright-blue-svg.svg", type: "image/svg+xml" },
      { url: "/website-factory-logo-bright-blue-svg.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/website-factory-logo-bright-blue-svg.svg", type: "image/svg+xml" },
    ],
    shortcut: "/website-factory-logo-bright-blue-svg.svg",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-95D6D580HV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-95D6D580HV');
          `}
        </Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function (f, b, e, v, n, t, s) {
              if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
              n.queue = []; t = b.createElement(e); t.async = !0;
              t.src = v; s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1056620019544195');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1056620019544195&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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

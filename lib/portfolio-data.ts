// Portfolio data - Featured projects have dedicated pages, others are external links only

export interface FeaturedProject {
  id: string
  slug: string
  title: string
  client: string
  category: "website" | "ecommerce" | "app" | "custom"
  categoryLabel: string
  description: string
  shortDescription: string
  image: string
  results: { label: string; value: string }[]
  technologies: string[]
  year: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  challenge: string
  solution: string
  liveUrl?: string
}

export interface SimpleProject {
  id: string
  title: string
  client: string
  category: "website" | "ecommerce" | "app" | "custom"
  categoryLabel: string
  image: string
  liveUrl: string
  year: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "1",
    slug: "flavours-restaurant",
    title: "Flavours Restaurant",
    client: "Flavours SRL",
    category: "website",
    categoryLabel: "Website de prezentare",
    description:
      "Website modern pentru un restaurant premium din Timișoara, cu sistem de rezervări online, meniu interactiv și integrare Google Maps pentru direcții.",
    shortDescription: "Website restaurant cu rezervări online și meniu digital interactiv.",
    image: "/elegant-restaurant-website-dark-theme-food-photogr.jpg",
    results: [
      { label: "Rezervări online", value: "+280%" },
      { label: "Trafic organic", value: "+150%" },
      { label: "Timp pe site", value: "4:32 min" },
    ],
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    year: "2024",
    testimonial: {
      quote:
        "Website-ul nou ne-a transformat complet modul în care primim rezervări. Clienții adoră experiența online!",
      author: "Andrei Munteanu",
      role: "Proprietar, Flavours Restaurant",
    },
    challenge:
      "Restaurantul avea nevoie de o prezență online care să reflecte atmosfera premium și să faciliteze rezervările fără apeluri telefonice.",
    solution:
      "Am creat un website cu design elegant, fotografii profesionale și un sistem de rezervări în timp real sincronizat cu calendarul restaurantului.",
    liveUrl: "https://flavours-restaurant.ro",
  },
  {
    id: "2",
    slug: "techstore-ecommerce",
    title: "TechStore Romania",
    client: "TechStore SRL",
    category: "ecommerce",
    categoryLabel: "Magazin online",
    description:
      "Platformă e-commerce completă pentru electronice și gadgeturi, cu peste 5000 de produse, sistem de filtrare avansat și checkout optimizat pentru conversii.",
    shortDescription: "Magazin online de electronice cu 5000+ produse și checkout optimizat.",
    image: "/modern-electronics-ecommerce-website-dark-blue-the.jpg",
    results: [
      { label: "Conversii", value: "+185%" },
      { label: "Vânzări lunare", value: "+€45K" },
      { label: "Rată abandon", value: "-40%" },
    ],
    technologies: ["Next.js", "Shopify", "Algolia", "Stripe"],
    year: "2024",
    testimonial: {
      quote:
        "De când am lansat noul magazin, vânzările au explodat. Checkout-ul e atât de simplu încât clienții finalizează comenzile mult mai rapid.",
      author: "Cristian Balan",
      role: "CEO, TechStore Romania",
    },
    challenge: "Magazinul vechi avea o rată de abandon a coșului de 78% și un proces de checkout complicat.",
    solution:
      "Am redesignat complet experiența de cumpărare cu filtre intuitive, checkout în 3 pași și optimizare pentru mobile.",
    liveUrl: "https://techstore.ro",
  },
  {
    id: "3",
    slug: "mindful-wellness-app",
    title: "Mindful - Wellness App",
    client: "Mindful Health SRL",
    category: "app",
    categoryLabel: "Aplicație mobilă",
    description:
      "Aplicație de wellness și meditație pentru iOS și Android, cu sesiuni ghidate, tracking pentru somn și integrare cu Apple Health și Google Fit.",
    shortDescription: "App de meditație cu 50K+ utilizatori activi și rating 4.8 stars.",
    image: "/wellness-meditation-app-interface-calm-purple-grad.jpg",
    results: [
      { label: "Utilizatori activi", value: "50K+" },
      { label: "Rating App Store", value: "4.8★" },
      { label: "Retenție 30 zile", value: "68%" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
    year: "2023",
    testimonial: {
      quote: "Aplicația a devenit instrumentul principal pentru clienții noștri. Feedback-ul este extraordinar!",
      author: "Dr. Elena Voicu",
      role: "Fondator, Mindful Health",
    },
    challenge:
      "Clientul dorea o aplicație care să combine meditația ghidată cu trackingul de wellness într-o experiență coerentă.",
    solution:
      "Am dezvoltat o aplicație cross-platform cu UI calm și intuitiv, sincronizare cu wearables și sistem de notificări personalizate.",
    liveUrl: "https://mindful-app.ro",
  },
  {
    id: "4",
    slug: "verde-organic-shop",
    title: "Verde Organic",
    client: "Verde Bio SRL",
    category: "ecommerce",
    categoryLabel: "Magazin online",
    description:
      "Magazin online pentru produse bio și organice, cu sistem de abonamente, livrare programată și certificări de produse afișate transparent.",
    shortDescription: "E-commerce bio cu sistem de subscripții și livrare programată.",
    image: "/organic-food-ecommerce-website-green-natural-theme.jpg",
    results: [
      { label: "Abonați activi", value: "1,200+" },
      { label: "Valoare coș mediu", value: "+65%" },
      { label: "Comenzi recurente", value: "45%" },
    ],
    technologies: ["Next.js", "Stripe Subscriptions", "Supabase", "SendGrid"],
    year: "2024",
    testimonial: {
      quote: "Sistemul de abonamente a schimbat complet modelul nostru de business. Avem acum venituri predictibile!",
      author: "Maria Popa",
      role: "Co-fondator, Verde Organic",
    },
    challenge:
      "Magazinul tradițional de produse bio avea nevoie de un canal online cu focus pe fidelizarea clienților.",
    solution:
      "Am creat o platformă cu abonamente flexibile, reminder-e pentru reaprovizionare și un program de loialitate integrat.",
    liveUrl: "https://verde-organic.ro",
  },
  {
    id: "5",
    slug: "artisan-portfolio",
    title: "Artisan Architecture",
    client: "Artisan Studio SRL",
    category: "website",
    categoryLabel: "Website de prezentare",
    description:
      "Portofoliu digital pentru un studio de arhitectură, cu galerii interactive, prezentări de proiecte în 3D și sistem de programare consultații.",
    shortDescription: "Portofoliu arhitectură cu galerii 3D și programări online.",
    image: "/architecture-portfolio-website-minimal-white-elega.jpg",
    results: [
      { label: "Lead-uri lunare", value: "+320%" },
      { label: "Timp pe proiect", value: "6:15 min" },
      { label: "Cereri ofertă", value: "+200%" },
    ],
    technologies: ["Next.js", "Three.js", "Sanity CMS", "Cal.com"],
    year: "2023",
    testimonial: {
      quote:
        "Site-ul nostru acum reflectă perfect calitatea muncii noastre. Clienții sunt impresionați înainte să ne întâlnească!",
      author: "Arch. Mihai Stoica",
      role: "Director, Artisan Architecture",
    },
    challenge:
      "Studioul avea nevoie de un portofoliu care să prezinte proiectele în mod imersiv și să genereze lead-uri calificate.",
    solution:
      "Am construit un website cu experiențe 3D interactive, tranziții cinematice și un funnel optimizat pentru conversii.",
    liveUrl: "https://artisan-architecture.ro",
  },
  {
    id: "6",
    slug: "smartfit-platform",
    title: "SmartFit Platform",
    client: "SmartFit SRL",
    category: "custom",
    categoryLabel: "Platformă custom",
    description:
      "Platformă all-in-one pentru săli de fitness cu management membri, programări clase, plăți online și aplicație companion pentru membri.",
    shortDescription: "Platformă fitness cu management complet și app pentru membri.",
    image: "/fitness-gym-management-platform-dashboard-dark-the.jpg",
    results: [
      { label: "Membri gestionați", value: "3,500+" },
      { label: "Eficiență admin", value: "+75%" },
      { label: "Satisfacție membri", value: "96%" },
    ],
    technologies: ["Next.js", "React Native", "PostgreSQL", "Stripe", "Twilio"],
    year: "2024",
    testimonial: {
      quote: "Am trecut de la 3 sisteme separate la o singură platformă. Economia de timp e incredibilă!",
      author: "Dan Nistor",
      role: "Manager, SmartFit Timișoara",
    },
    challenge: "Sala de fitness folosea multiple sisteme neintegrate pentru membri, plăți și programări.",
    solution:
      "Am dezvoltat o platformă unificată cu dashboard admin, portal membri și aplicație mobilă sincronizate în timp real.",
    liveUrl: "https://smartfit-platform.ro",
  },
]

// Helper function to parse filename and extract project info
function parseProjectFromFilename(filename: string, index: number): SimpleProject {
  const nameWithoutExt = filename.replace(/\.webp$/i, "")
  
  // Determine category based on filename prefix
  let category: "website" | "ecommerce" | "app" | "custom" = "website"
  let categoryLabel = "Website de prezentare"
  
  if (nameWithoutExt.startsWith("magazin-online") || nameWithoutExt.startsWith("proiect-magazin-online") || nameWithoutExt.startsWith("catalog-online-magazin")) {
    category = "ecommerce"
    categoryLabel = "Magazin online"
  } else if (nameWithoutExt.startsWith("platforma-online")) {
    category = "custom"
    categoryLabel = "Platformă custom"
  } else if (nameWithoutExt.startsWith("website-stiri-blog")) {
    category = "website"
    categoryLabel = "Website știri & blog"
  } else if (nameWithoutExt.startsWith("website-recrutare")) {
    category = "website"
    categoryLabel = "Website recrutare"
  } else if (nameWithoutExt.startsWith("website-auto")) {
    category = "website"
    categoryLabel = "Website auto"
  } else if (nameWithoutExt.startsWith("website-asociatie-donatii")) {
    category = "website"
    categoryLabel = "Website asociație"
  }
  
  // Extract title and client from filename
  let title = nameWithoutExt
    .replace(/^(website-de-prezentare|magazin-online|proiect-magazin-online|platforma-online|website-stiri-blog|website-recrutare|website-auto|website-asociatie-donatii|catalog-online-magazin|proiect-website-prezentare|web-design)-?(timisoara-?)?/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
  
  // Clean up title
  title = title
    .replace(/\s+/g, " ")
    .trim()
  
  // Extract client name (usually the main part after prefix)
  const clientParts = nameWithoutExt
    .replace(/^(website-de-prezentare|magazin-online|proiect-magazin-online|platforma-online|website-stiri-blog|website-recrutare|website-auto|website-asociatie-donatii|catalog-online-magazin|proiect-website-prezentare|web-design)-?(timisoara-?)?/i, "")
    .split("-")
    .filter(p => p && !p.match(/^(timisoara|webp)$/i))
  
  let client = clientParts
    .slice(0, 3)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ")
  
  if (!client || client.length < 2) {
    client = title
  }
  
  // Add SRL if it looks like a company name
  if (!client.match(/\b(SRL|AB|SA|PFA)\b/i)) {
    client = client + " SRL"
  }
  
  return {
    id: `s${index + 1}`,
    title,
    client,
    category,
    categoryLabel,
    image: `/projects/${filename}`,
    liveUrl: "#", // To be filled by user
    year: "2024", // To be adjusted by user
  }
}

// Generate projects from all files in /public/projects
const projectFiles = [
  "website-de-prezentare-timisoara-bradluc_curatenie.webp",
  "proiect-website-prezentare-thermo-solar-energy.webp",
  "magazin-online-timisoara-DPK.webp",
  "website-de-prezentare-revelio-medical.webp",
  "website-stiri-blog-NN News Media.webp",
  "proiect-website-prezentare-afterschool-dumbravita-hobby-art.webp",
  "magazin-online-timisoara-Pinnochio.webp",
  "magazin-online-Scar.webp",
  "magazin-online-timisoara-Revelio.webp",
  "website-de-prezentare-timisoara-Proval.webp",
  "website-de-prezentare-timisoara-Luxury Cleaning.webp",
  "magazin-online-Rigolabeton.webp",
  "website-de-prezentare-dezzign.webp",
  "magazin-online-timisoara-Frentzy.webp",
  "website-de-prezentare-Merpano.webp",
  "magazin-online-timisoara-bradluc.webp",
  "website-de-prezentare-timisoara-Hobby Art.webp",
  "website-de-prezentare-TheRadar.webp",
  "magazin-online-timisoara-Ornella Gallery.webp",
  "website-de-prezentare-Youplus.webp",
  "website-de-prezentare-ATP.webp",
  "website-stiri-blog-timisoara-News Dealer.webp",
  "website-de-prezentare-Best Tim Travel.webp",
  "luxury-cleaning.webp",
  "website-recrutare-AZ-jobs.webp",
  "website-de-prezentare-timisoara-e-Drones.webp",
  "website-de-prezentare-Revelio.webp",
  "magazin-online-timisoara-Ornella.webp",
  "website-de-prezentare-Maravo.webp",
  "website-de-prezentare-timisoara-NAGY EVOLUTION CONSTRUCT.webp",
  "website-de-prezentare-timisoara-Thermo_Solar.webp",
  "magazin-online-timisoara-Natalie.webp",
  "website-de-prezentare-timisoara-curatenie-Horvel.webp",
  "website-de-prezentare-rdautomatim.webp",
  "magazin-online-timisoara-Pheonix.webp",
  "website-de-prezentare-radiotron.webp",
  "proiect-magazin-online-blue-phoenix.webp",
  "website-auto-okauto.webp",
  "website-de-prezentare-terapie-energetica.webp",
  "website-de-prezentare-timisoara-Evoratest.webp",
  "website-asociatie-donatii-Painea pe ape.webp",
  "magazin-online-ExtensioMob.webp",
  "website-de-prezentare-bimtim.webp",
  "magazin-online-Sotherm.webp",
  "magazin-online-PVsystems.webp",
  "website-de-prezentare-AC green.webp",
  "website-de-prezentare-mobileSpa.webp",
  "website-de-prezentare-si-calculator-pret-proval-just.webp",
  "website-de-prezentare-timisoara-avocat-Jurjut.webp",
  "proiect-magazin-online-pinocchio-timisoara.webp",
  "website-de-prezentare-Cika.webp",
  "website-de-prezentare-avocat-jurjut-mart.webp",
  "magazin-online-timisoara-Revelio marketplace.webp",
  "magazin-online-timisoara-Gloria.webp",
  "web-design-timisoara-atp-apitherapie.webp",
  "magazin-online-Ceramiqa.webp",
  "website-de-prezentare-vici-evolution.webp",
  "website-de-prezentare-ong-ame-de-vie.webp",
  "website-de-prezentare-move-auto.webp",
  "website-de-prezentare-lami-ing.webp",
  "website-de-prezentare-infiintare-srl.webp",
  "website-de-prezentare-geonordica.webp",
  "website-de-prezentare-avocat-hinda.webp",
  "website-de-prezentare-artimm-digital.webp",
  "website-de-prezentare-arpeggio-clinic.webp",
  "platforma-online-unevent.webp",
  "platforma-online-extrasCF-documentrapid.webp",
  "catalog-online-magazin-displayer.webp",
  "magazin-online-zaniverse.webp",
  "magazin-online-sotherm-italia.webp",
  "magazin-online-the-permanent.webp",
]

export const simpleProjects: SimpleProject[] = projectFiles.map((filename, index) =>
  parseProjectFromFilename(filename, index)
)

export const categoryFilters = [
  { value: "all", label: "Toate proiectele" },
  { value: "website", label: "Website-uri" },
  { value: "ecommerce", label: "Magazine online" },
  { value: "app", label: "Aplicații" },
  { value: "custom", label: "Platforme custom" },
]

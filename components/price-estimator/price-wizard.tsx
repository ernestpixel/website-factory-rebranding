"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { FloatingElement } from "@/components/ui/floating-element"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MagneticButton } from "@/components/ui/magnetic-button"
import {
  Layout,
  Globe,
  ShoppingBag,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  FileText,
  Calendar,
  CreditCard,
  Truck,
  Heart,
  Plug,
  CheckCircle2,
  Euro,
  Mail,
  Phone,
  User,
  Calculator,
} from "lucide-react"

type ProjectType = "onepage" | "presentation" | "shop" | "custom" | null
type ContentReady = "da" | "nu" | null

interface FormState {
  step: number
  projectType: ProjectType
  contentReady: ContentReady
  pages: number
  products: string
  budget: string
  extras: string[]
  userInfo: {
    name: string
    email: string
    phone: string
  }
}

const projectTypes = [
  {
    id: "onepage" as const,
    icon: Layout,
    title: "One Page / Landing Page",
    description: "O singură pagină de prezentare, perfectă pentru campanii sau produse specifice",
  },
  {
    id: "presentation" as const,
    icon: Globe,
    title: "Website de Prezentare",
    description: "Site complet cu mai multe pagini pentru afacerea ta",
  },
  {
    id: "shop" as const,
    icon: ShoppingBag,
    title: "Magazin Online",
    description: "E-commerce complet cu coș de cumpărături și plăți online",
  },
  {
    id: "custom" as const,
    icon: Smartphone,
    title: "Platformă / Aplicație",
    description: "Soluție software personalizată pentru nevoi specifice",
  },
]

const productOptions = [
  { value: "150", label: "Până la 150 produse" },
  { value: "250", label: "150 - 250 produse" },
  { value: "350", label: "250 - 350 produse" },
  { value: "450", label: "350 - 450 produse" },
]

const budgetOptions = [
  { value: "2000-4000", label: "2.000€ - 4.000€" },
  { value: "4000-7000", label: "4.000€ - 7.000€" },
  { value: "7000+", label: "Peste 7.000€" },
]

const presentationExtras = [
  { id: "blog", label: "Modul Blog / Noutăți", price: 50, icon: FileText },
  { id: "booking", label: "Sistem Programări", price: 100, icon: Calendar },
]

const shopExtras = [
  { id: "payments", label: "Procesator Plăți (Netopia/Stripe)", price: 75, icon: CreditCard },
  { id: "courier", label: "API Curier (Fan/Sameday)", price: 75, icon: Truck },
  { id: "loyalty", label: "Sistem Loializare", price: 250, icon: Heart },
  { id: "erp", label: "Alte integrări (ERP/Facturare)", price: 0, icon: Plug, note: "Preț la cerere" },
]

function calculatePrice(state: FormState): { price: number | null; text: string; hasErp: boolean } {
  let total = 0
  let hasErp = false

  switch (state.projectType) {
    case "onepage":
      return { price: 450, text: "450€", hasErp: false }

    case "presentation":
      total = 650
      if (state.pages > 5) {
        total += (state.pages - 5) * 50
      }
      state.extras.forEach((extraId) => {
        const extra = presentationExtras.find((e) => e.id === extraId)
        if (extra) total += extra.price
      })
      return { price: total, text: `${total}€`, hasErp: false }

    case "shop":
      total = 1100
      switch (state.products) {
        case "250":
          total += 70
          break
        case "350":
          total += 140
          break
        case "450":
          total += 210
          break
      }
      state.extras.forEach((extraId) => {
        const extra = shopExtras.find((e) => e.id === extraId)
        if (extra) {
          if (extra.id === "erp") {
            hasErp = true
          } else {
            total += extra.price
          }
        }
      })
      return { price: total, text: `${total}€`, hasErp }

    case "custom":
      return { price: null, text: "Estimare Personalizată", hasErp: false }

    default:
      return { price: null, text: "-", hasErp: false }
  }
}

export function PriceEstimatorWizard() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const [showResult, setShowResult] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formState, setFormState] = useState<FormState>({
    step: 1,
    projectType: null,
    contentReady: null,
    pages: 5,
    products: "150",
    budget: "",
    extras: [],
    userInfo: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const totalSteps = 4
  const progressPercent = (formState.step / totalSteps) * 100

  const updateState = (updates: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...updates }))
  }

  const updateUserInfo = (field: keyof FormState["userInfo"], value: string) => {
    setFormState((prev) => ({
      ...prev,
      userInfo: { ...prev.userInfo, [field]: value },
    }))
  }

  const toggleExtra = (extraId: string) => {
    setFormState((prev) => ({
      ...prev,
      extras: prev.extras.includes(extraId) ? prev.extras.filter((id) => id !== extraId) : [...prev.extras, extraId],
    }))
  }

  const canProceed = () => {
    switch (formState.step) {
      case 1:
        return formState.projectType !== null
      case 2:
        if (formState.projectType === "onepage") return formState.contentReady !== null
        if (formState.projectType === "presentation") return formState.pages >= 1
        if (formState.projectType === "shop") return formState.products !== ""
        if (formState.projectType === "custom") return formState.budget !== ""
        return false
      case 3:
        return true
      case 4:
        return (
          formState.userInfo.name.trim() !== "" &&
          formState.userInfo.email.trim() !== "" &&
          formState.userInfo.phone.trim() !== ""
        )
      default:
        return false
    }
  }

  const nextStep = () => {
    if (formState.step < totalSteps && canProceed()) {
      updateState({ step: formState.step + 1 })
    }
  }

  const prevStep = () => {
    if (formState.step > 1) {
      updateState({ step: formState.step - 1 })
      setShowResult(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canProceed()) return

    setIsSubmitting(true)
    setError(null)

    try {
      const result = calculatePrice(formState)
      const projectTypeName = projectTypes.find((t) => t.id === formState.projectType)?.title || formState.projectType

      // Prepare features array
      const features: string[] = []
      if (formState.projectType === "presentation") {
        features.push(`${formState.pages} pagini`)
        formState.extras.forEach((extraId) => {
          const extra = presentationExtras.find((e) => e.id === extraId)
          if (extra) features.push(extra.label)
        })
      } else if (formState.projectType === "shop") {
        const productOption = productOptions.find((p) => p.value === formState.products)
        if (productOption) features.push(productOption.label)
        formState.extras.forEach((extraId) => {
          const extra = shopExtras.find((e) => e.id === extraId)
          if (extra) features.push(extra.label)
        })
      }

      const response = await fetch("/api/price-estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.userInfo.name,
          email: formState.userInfo.email,
          phone: formState.userInfo.phone,
          projectType: projectTypeName,
          budget: formState.budget || undefined,
          features: features.length > 0 ? features : undefined,
          estimatedPrice: result.text,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Eroare la trimiterea cererii")
      }

      setShowResult(true)
    } catch (err) {
      console.error("Form submission error:", err)
      setError(err instanceof Error ? err.message : "A apărut o eroare. Te rugăm să încerci din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormState({
      step: 1,
      projectType: null,
      contentReady: null,
      pages: 5,
      products: "150",
      budget: "",
      extras: [],
      userInfo: { name: "", email: "", phone: "" },
    })
    setShowResult(false)
    setError(null)
  }

  const result = calculatePrice(formState)

  // Step titles for progress indicator
  const stepTitles = ["Tip Proiect", "Detalii", "Funcționalități", "Date Contact"]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-brand/5 blur-[80px]"
          delay={0}
          duration={12}
        >
          <div />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-glow-violet/10 blur-[60px]"
          delay={2}
          duration={10}
        >
          <div />
        </FloatingElement>
      </div>

      {/* Decorative metallic shapes */}
      <div className="absolute top-40 right-20 w-16 h-16 hidden lg:block">
        <div
          className="w-full h-full metallic-surface rounded-2xl opacity-30"
          style={{ animation: "morph 16s ease-in-out infinite" }}
        />
      </div>
      <div className="absolute bottom-40 left-20 w-12 h-12 hidden lg:block">
        <div
          className="w-full h-full bg-gradient-to-br from-glow-cyan/30 to-brand/20 rounded-xl blur-sm opacity-40"
          style={{ animation: "morph 12s ease-in-out infinite reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-foreground">
                Pasul {formState.step}: {stepTitles[formState.step - 1]}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progressPercent)}% completat</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {/* Step indicators */}
            <div className="flex justify-between mt-3">
              {stepTitles.map((title, index) => (
                <div
                  key={title}
                  className={cn(
                    "flex items-center gap-1.5 text-xs transition-colors",
                    formState.step > index + 1
                      ? "text-brand"
                      : formState.step === index + 1
                        ? "text-foreground font-medium"
                        : "text-muted-foreground",
                  )}
                >
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors",
                      formState.step > index + 1
                        ? "bg-brand text-brand-foreground"
                        : formState.step === index + 1
                          ? "bg-brand/20 text-brand border border-brand"
                          : "bg-muted text-muted-foreground",
                    )}
                  >
                    {formState.step > index + 1 ? <Check className="w-3 h-3" /> : index + 1}
                  </div>
                  <span className="hidden sm:inline">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main card */}
          <div className="glass-card rounded-3xl border border-border/50 overflow-hidden">
            {!showResult ? (
              <form onSubmit={handleSubmit}>
                <div className="p-6 md:p-10">
                  {/* Step 1: Project Type - Removed prices from cards */}
                  {formState.step === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                          Ce tip de proiect ai nevoie?
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                          Selectează tipul de website pentru a primi o estimare personalizată
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {projectTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => updateState({ projectType: type.id, extras: [] })}
                            className={cn(
                              "relative p-6 rounded-2xl border-2 text-left transition-all duration-300 group card-metallic",
                              formState.projectType === type.id
                                ? "border-brand bg-brand/5 shadow-lg shadow-brand/10"
                                : "border-border/50 bg-background/50 hover:border-brand/50 hover:bg-brand/5",
                            )}
                          >
                            {formState.projectType === type.id && (
                              <div className="absolute top-4 right-4">
                                <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center">
                                  <Check className="w-4 h-4 text-brand-foreground" />
                                </div>
                              </div>
                            )}
                            <div
                              className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                                formState.projectType === type.id
                                  ? "bg-brand text-brand-foreground"
                                  : "bg-muted text-muted-foreground group-hover:bg-brand/10 group-hover:text-brand",
                              )}
                            >
                              <type.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading font-bold text-foreground mb-1">{type.title}</h3>
                            <p className="text-sm text-muted-foreground">{type.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {formState.step === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Detalii proiect</h2>
                        <p className="mt-2 text-muted-foreground">Spune-ne mai multe despre nevoile tale</p>
                      </div>

                      {/* One Page - Content ready question */}
                      {formState.projectType === "onepage" && (
                        <div className="space-y-4">
                          <label className="block text-sm font-medium text-foreground mb-4">
                            Ai conținutul pregătit? (texte, imagini)
                          </label>
                          <div className="flex flex-col sm:flex-row gap-4">
                            {[
                              { value: "da" as const, label: "Da, am tot pregătit", icon: Check },
                              { value: "nu" as const, label: "Nu, am nevoie de ajutor", icon: Sparkles },
                            ].map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => updateState({ contentReady: option.value })}
                                className={cn(
                                  "flex-1 p-5 rounded-xl border-2 text-center transition-all duration-300 flex flex-col items-center gap-2",
                                  formState.contentReady === option.value
                                    ? "border-brand bg-brand/5"
                                    : "border-border/50 bg-background/50 hover:border-brand/50",
                                )}
                              >
                                <option.icon
                                  className={cn(
                                    "w-6 h-6",
                                    formState.contentReady === option.value ? "text-brand" : "text-muted-foreground",
                                  )}
                                />
                                <span className="font-medium">{option.label}</span>
                              </button>
                            ))}
                          </div>
                          {formState.contentReady === "nu" && (
                            <p className="text-sm text-muted-foreground mt-4 p-4 rounded-xl bg-muted/50">
                              Nu-ți face griji! Te putem ajuta cu redactarea textelor și selecția imaginilor. Acest
                              serviciu va fi discutat separat.
                            </p>
                          )}
                        </div>
                      )}

                      {/* Presentation - Page count slider */}
                      {formState.projectType === "presentation" && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-4">
                              Număr estimativ de pagini
                            </label>
                            <div className="space-y-4">
                              <input
                                type="range"
                                min="1"
                                max="20"
                                value={formState.pages}
                                onChange={(e) => updateState({ pages: Number.parseInt(e.target.value) })}
                                className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-brand"
                              />
                              <div className="flex justify-between text-sm text-muted-foreground">
                                <span>1 pagină</span>
                                <span className="text-2xl font-bold text-brand">{formState.pages}</span>
                                <span>20 pagini</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 rounded-xl bg-brand/5 border border-brand/20">
                            <p className="text-sm text-foreground">
                              Exemplu de pagini: Acasă, Despre noi, Servicii, Portofoliu, Contact, Blog...
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Shop - Product count dropdown */}
                      {formState.projectType === "shop" && (
                        <div className="space-y-4">
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Câte produse estimezi să ai în magazin?
                          </label>
                          <Select
                            value={formState.products}
                            onValueChange={(value) => updateState({ products: value })}
                          >
                            <SelectTrigger className="h-14 rounded-xl bg-background/50 border-border/50">
                              <SelectValue placeholder="Selectează numărul de produse" />
                            </SelectTrigger>
                            <SelectContent>
                              {productOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <p className="text-sm text-muted-foreground">
                            Numărul de produse ne ajută să estimăm complexitatea configurării magazinului.
                          </p>
                        </div>
                      )}

                      {/* Custom - Budget dropdown */}
                      {formState.projectType === "custom" && (
                        <div className="space-y-4">
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Care este bugetul estimativ pentru proiect?
                          </label>
                          <Select value={formState.budget} onValueChange={(value) => updateState({ budget: value })}>
                            <SelectTrigger className="h-14 rounded-xl bg-background/50 border-border/50">
                              <SelectValue placeholder="Selectează bugetul estimativ" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <p className="text-sm text-muted-foreground">
                            Prețul final depinde de complexitatea și funcționalitățile necesare. Vom discuta detaliile
                            împreună.
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Extras - Removed price display */}
                  {formState.step === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                          Funcționalități extra
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                          Selectează modulele adiționale de care ai nevoie (opțional)
                        </p>
                      </div>

                      {formState.projectType === "presentation" && (
                        <div className="space-y-3">
                          {presentationExtras.map((extra) => (
                            <button
                              key={extra.id}
                              type="button"
                              onClick={() => toggleExtra(extra.id)}
                              className={cn(
                                "w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all duration-300 text-left",
                                formState.extras.includes(extra.id)
                                  ? "border-brand bg-brand/5"
                                  : "border-border/50 bg-background/50 hover:border-brand/50",
                              )}
                            >
                              <div
                                className={cn(
                                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                  formState.extras.includes(extra.id)
                                    ? "bg-brand text-brand-foreground"
                                    : "bg-muted text-muted-foreground",
                                )}
                              >
                                <extra.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-foreground">{extra.label}</p>
                              </div>
                              {formState.extras.includes(extra.id) && <Check className="w-5 h-5 text-brand" />}
                            </button>
                          ))}
                        </div>
                      )}

                      {formState.projectType === "shop" && (
                        <div className="space-y-3">
                          {shopExtras.map((extra) => (
                            <button
                              key={extra.id}
                              type="button"
                              onClick={() => toggleExtra(extra.id)}
                              className={cn(
                                "w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all duration-300 text-left",
                                formState.extras.includes(extra.id)
                                  ? "border-brand bg-brand/5"
                                  : "border-border/50 bg-background/50 hover:border-brand/50",
                              )}
                            >
                              <div
                                className={cn(
                                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                  formState.extras.includes(extra.id)
                                    ? "bg-brand text-brand-foreground"
                                    : "bg-muted text-muted-foreground",
                                )}
                              >
                                <extra.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-foreground">{extra.label}</p>
                                {extra.note && <p className="text-xs text-muted-foreground">{extra.note}</p>}
                              </div>
                              {formState.extras.includes(extra.id) && <Check className="w-5 h-5 text-brand" />}
                            </button>
                          ))}
                        </div>
                      )}

                      {(formState.projectType === "onepage" || formState.projectType === "custom") && (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 rounded-full bg-brand/10 mx-auto mb-4 flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-brand" />
                          </div>
                          <p className="text-muted-foreground">
                            {formState.projectType === "onepage"
                              ? "Pachetul One Page include toate funcționalitățile standard necesare."
                              : "Funcționalitățile vor fi personalizate în funcție de nevoile tale specifice."}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 4: Contact Info - Simplified to only Nume, Telefon, Email */}
                  {formState.step === 4 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                          Datele tale de contact
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                          Completează pentru a primi estimarea și o confirmare pe email
                        </p>
                      </div>

                      <div className="grid gap-5">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            Nume <span className="text-brand">*</span>
                          </label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Ion Popescu"
                            required
                            value={formState.userInfo.name}
                            onChange={(e) => updateUserInfo("name", e.target.value)}
                            className="h-14 rounded-xl bg-background/50 border-border/50 pl-4"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-foreground flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            Număr de telefon <span className="text-brand">*</span>
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+40 7XX XXX XXX"
                            required
                            value={formState.userInfo.phone}
                            onChange={(e) => updateUserInfo("phone", e.target.value)}
                            className="h-14 rounded-xl bg-background/50 border-border/50 pl-4"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            Email <span className="text-brand">*</span>
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="ion@exemplu.ro"
                            required
                            value={formState.userInfo.email}
                            onChange={(e) => updateUserInfo("email", e.target.value)}
                            className="h-14 rounded-xl bg-background/50 border-border/50 pl-4"
                          />
                        </div>
                      </div>

                      {/* Privacy note */}
                      <p className="text-xs text-muted-foreground text-center mt-6">
                        Prin trimiterea formularului, ești de acord cu{" "}
                        <a href="/politici-de-confidentialitate" className="text-brand hover:underline">
                          Politica de Confidențialitate
                        </a>
                        . Vei primi o confirmare pe email cu datele tale.
                      </p>
                    </div>
                  )}
                </div>

                {/* Error message */}
                {error && (
                  <div className="px-6 md:px-10">
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm">
                      {error}
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="p-6 md:px-10 border-t border-border/50 bg-muted/20">
                  <div className="flex items-center justify-between gap-4">
                    {formState.step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-foreground hover:bg-muted transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Înapoi
                      </button>
                    ) : (
                      <div />
                    )}

                    {formState.step < totalSteps ? (
                      <MagneticButton strength={0.15}>
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!canProceed()}
                          className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                            canProceed()
                              ? "bg-brand text-brand-foreground hover:shadow-lg hover:shadow-brand/20"
                              : "bg-muted text-muted-foreground cursor-not-allowed",
                          )}
                        >
                          Continuă
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </MagneticButton>
                    ) : (
                      <MagneticButton strength={0.15}>
                        <button
                          type="submit"
                          disabled={!canProceed() || isSubmitting}
                          className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                            canProceed() && !isSubmitting
                              ? "bg-brand text-brand-foreground hover:shadow-lg hover:shadow-brand/20 glow-brand"
                              : "bg-muted text-muted-foreground cursor-not-allowed",
                          )}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-brand-foreground/30 border-t-brand-foreground rounded-full animate-spin" />
                              Se calculează...
                            </>
                          ) : (
                            <>
                              <Calculator className="w-4 h-4" />
                              Estimează costul
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </form>
            ) : (
              /* Result card - Enhanced with confirmation message */
              <div className="p-8 md:p-12 text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand/10 mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Estimarea ta este gata!
                  </h2>
                  <p className="text-muted-foreground">
                    Mulțumim, {formState.userInfo.name.split(" ")[0]}! Iată estimarea pentru proiectul tău.
                  </p>
                </div>

                {/* Price display */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-brand/10 via-glow-violet/5 to-glow-cyan/10 border border-brand/20 mb-8">
                  {/* Decorative glow */}
                  <div className="absolute inset-0 rounded-3xl bg-brand/5 blur-2xl" />

                  <div className="relative">
                    {result.price !== null ? (
                      <>
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Cost estimativ</p>
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <Euro className="w-8 h-8 text-brand" />
                          <span className="font-heading text-5xl md:text-6xl font-bold gradient-text-animated">
                            {result.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">*Nu se percepe TVA</p>
                        {result.hasErp && (
                          <p className="mt-3 text-sm text-brand font-medium">
                            + Integrări ERP/Facturare (preț personalizat)
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="font-heading text-3xl md:text-4xl font-bold gradient-text-animated mb-2">
                          {result.text}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Proiectul tău necesită o analiză detaliată pentru estimare corectă.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <div className="text-left p-6 rounded-2xl bg-muted/30 border border-border/50 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Sumar proiect:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Tip proiect:</span>
                      <span className="font-medium text-foreground">
                        {projectTypes.find((t) => t.id === formState.projectType)?.title}
                      </span>
                    </li>
                    {formState.projectType === "presentation" && (
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Număr pagini:</span>
                        <span className="font-medium text-foreground">{formState.pages}</span>
                      </li>
                    )}
                    {formState.projectType === "shop" && (
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Produse:</span>
                        <span className="font-medium text-foreground">
                          {productOptions.find((p) => p.value === formState.products)?.label}
                        </span>
                      </li>
                    )}
                    {formState.projectType === "custom" && (
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Buget estimativ:</span>
                        <span className="font-medium text-foreground">
                          {budgetOptions.find((b) => b.value === formState.budget)?.label}
                        </span>
                      </li>
                    )}
                    {formState.extras.length > 0 && (
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Funcționalități extra:</span>
                        <span className="font-medium text-foreground text-right max-w-[200px]">
                          {formState.extras
                            .map((id) => {
                              const all = [...presentationExtras, ...shopExtras]
                              return all.find((e) => e.id === id)?.label
                            })
                            .join(", ")}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Confirmation message */}
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-left text-sm">
                      <p className="font-medium text-foreground mb-1">Confirmare trimisă!</p>
                      <p className="text-muted-foreground">
                        Am trimis o confirmare pe adresa{" "}
                        <span className="text-foreground">{formState.userInfo.email}</span> cu detaliile estimării. Un
                        consultant Website Factory te va contacta în curând.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton strength={0.15}>
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 hover:bg-muted transition-colors"
                    >
                      <Calculator className="w-4 h-4" />
                      Calculează din nou
                    </button>
                  </MagneticButton>
                  <MagneticButton strength={0.15}>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-brand-foreground font-semibold hover:shadow-lg hover:shadow-brand/20 transition-all"
                    >
                      Contactează-ne
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

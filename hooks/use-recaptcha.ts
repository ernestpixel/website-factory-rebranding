"use client"

import { useState, useCallback, useEffect } from "react"

declare global {
  interface Window {
    grecaptcha: any
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Le14kcsAAAAABgLkcfNtfNO5vZFEOahdtuWgGOA"

export function useRecaptcha() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if script is already present
    if (document.getElementById("recaptcha-script")) {
      setIsLoaded(typeof window.grecaptcha !== "undefined")
      return
    }

    // Load reCAPTCHA script
    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    script.id = "recaptcha-script"
    script.async = true
    script.defer = true
    script.onload = () => setIsLoaded(true)
    document.head.appendChild(script)
  }, [])

  const executeRecaptcha = useCallback(
    async (action: string) => {
      if (!window.grecaptcha) {
        console.warn("reCAPTCHA not loaded yet")
        return null
      }

      try {
        return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action })
      } catch (error) {
        console.error("reCAPTCHA execution failed:", error)
        return null
      }
    },
    [],
  )

  return { executeRecaptcha, isLoaded }
}

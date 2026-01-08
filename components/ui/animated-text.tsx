"use client"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function AnimatedText({ text, className, delay = 0, as: Component = "span" }: AnimatedTextProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const words = text.split(" ")

  return (
    <Component ref={ref as any} className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <span
            className="inline-block transition-transform duration-700"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              transitionDelay: `${delay + index * 50}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  )
}

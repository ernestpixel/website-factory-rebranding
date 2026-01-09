"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  intensity?: number
  strength?: number // Alias for intensity for backward compatibility
  className?: string
  as?: "button" | "div"
}

export function MagneticButton({ 
  children, 
  intensity,
  strength,
  className, 
  as,
  ...props 
}: MagneticButtonProps) {
  // Use intensity or strength (strength takes precedence if both provided)
  const magneticIntensity = strength ?? intensity ?? 0.3
  const buttonRef = React.useRef<HTMLElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  // Check if children contain a button element
  const hasButtonChild = React.useMemo(() => {
    if (typeof children === "object" && children !== null && "type" in children) {
      return children.type === "button" || (typeof children.type === "string" && children.type === "button")
    }
    return false
  }, [children])

  // Determine if we should render as div (when wrapping a button) or button
  const shouldRenderAsDiv = as === "div" || hasButtonChild

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * magneticIntensity
    const deltaY = (e.clientY - centerY) * magneticIntensity

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const commonProps = {
    ref: buttonRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: cn("magnetic-btn", className),
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
    },
    ...props,
  }

  if (shouldRenderAsDiv) {
    return (
      <div {...(commonProps as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    )
  }

  return (
    <button {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

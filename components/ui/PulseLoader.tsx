import type React from "react"
import { cn } from "@/lib/utils"

interface PulsingLoaderProps {
  size?: "sm" | "md" | "lg" | "xl" | "xs"
  color?: "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "white"
  className?: string
}

export const PulsingLoader: React.FC<PulsingLoaderProps> = ({ size = "md", color = "primary", className }) => {
  // Base size mapping
  const sizeClasses = {
    xs: 1,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  }

  // Color mapping
  const colorClasses = {
    primary: "bg-blue-500",
    secondary: "bg-purple-500",
    accent: "bg-accent",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    white: "bg-white",
  }

  // Get the numeric size value
  const sizeValue = sizeClasses[size]

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: `${sizeValue * 1.5}rem`, height: `${sizeValue * 1.5}rem` }}
      role="status"
      aria-label="Loading"
    >
      {/* Outer circle (Layer 3) */}
      <div
        className={cn("absolute rounded-full", colorClasses[color], "opacity-30")}
        style={{
          width: `${sizeValue * 1.5}rem`,
          height: `${sizeValue * 1.5}rem`,
          animation: "ping 2s cubic-bezier(0, 0, 0.1, 1) infinite",
          animationDelay: "0s",
        }}
      />

      {/* Middle circle (Layer 2) */}
      <div
        className={cn("absolute rounded-full", colorClasses[color], "opacity-50")}
        style={{
          width: `${sizeValue}rem`,
          height: `${sizeValue}rem`,
          animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          animationDelay: "0.3s",
        }}
      />
            <div
        className={cn("absolute rounded-full", colorClasses[color], "opacity-10")}
        style={{
          width: `${sizeValue * 1.5}rem`,
          height: `${sizeValue * 1.5}rem`,
          animation: "ping 2s cubic-bezier(0, 0, 0.1, 1) infinite",
          animationDelay: "0.6s",
        }}
      />

      {/* Inner circle (Layer 1) */}
      <div
        className={cn("rounded-full", colorClasses[color], "opacity-90")}
        style={{
          width: `${sizeValue * 0.6}rem`,
          height: `${sizeValue * 0.6}rem`,
        }}
      />

      {/* Screen reader text */}
      <span className="sr-only">Loading</span>
    </div>
  )
}

import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "white" | "soft" | "navy"
}

export function Section({ children, className, id, background = "white", ...props }: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    soft: "bg-[var(--white-soft)]",
    navy: "bg-[var(--navy)] text-white",
  }

  return (
    <section id={id} className={cn("py-16 md:py-24", bgStyles[background], className)} {...props}>
      <div className="hof-container">{children}</div>
    </section>
  )
}

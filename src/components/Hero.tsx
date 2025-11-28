"use client"

import { siteConfig } from "@/config/site"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[var(--green)] overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gold)]" />

      <div className="relative w-full py-24 md:py-32 z-10">
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-serif max-w-4xl leading-tight">
            {siteConfig.hero.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/80 max-w-2xl">{siteConfig.hero.subtitle}</p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/neighborhoods" className="hof-btn hof-btn-gold w-full sm:w-auto text-lg">
              {siteConfig.hero.cta}
            </Link>
            <Link href="/about" className="hof-btn hof-btn-outline-white w-full sm:w-auto text-lg">
              Learn More
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

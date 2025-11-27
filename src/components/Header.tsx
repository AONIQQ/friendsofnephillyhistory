"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { siteConfig } from "@/config/site"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navLinks = siteConfig.nav

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--navy)] shadow-lg py-3" : "bg-[var(--navy)] py-4"
      }`}
    >
      <div className="hof-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[var(--gold)] transition-transform group-hover:scale-105">
              <Image src="/logo.jpg" alt={siteConfig.name} fill className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-base md:text-lg leading-tight font-serif tracking-tight">
                Northeast Philadelphia
              </h1>
              <p className="text-[var(--gold)] text-xs md:text-sm font-bold tracking-wider uppercase">Hall of Fame</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 lg:gap-4 xl:gap-6">
            {navLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{ color: isActive ? "var(--gold)" : "#ffffff" }}
                  className={`px-3 lg:px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive ? "bg-white/10" : "hover:text-[var(--gold)] hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/nominate"
              className="bg-[var(--gold)] text-[var(--navy)] text-sm font-bold py-3 px-6 rounded-lg hover:bg-[var(--gold-light)] transition-colors shadow-md"
            >
              Nominate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[var(--gold)] transition-colors relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[var(--navy)] z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0", paddingTop: "80px" }}
      >
        <div className="hof-container h-full overflow-y-auto pb-8 flex flex-col">
          <div className="flex flex-col gap-1 py-4">
            {navLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{ color: isActive ? "var(--gold)" : "#ffffff" }}
                  className={`text-lg font-semibold py-3 px-4 rounded-lg ${
                    isActive ? "bg-white/10" : "hover:bg-white/5"
                  } transition-all duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          <div className="mt-auto px-4 pb-8">
            <Link
              href="/nominate"
              className="w-full block bg-[var(--gold)] text-[var(--navy)] text-center text-lg font-bold py-4 rounded-lg hover:bg-[var(--gold-light)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nominate Someone
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

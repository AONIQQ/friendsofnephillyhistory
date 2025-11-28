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
  const desktopNavLinkBase =
    "px-3 lg:px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-3" : "bg-white py-4"
        }`}
    >
      <div className="hof-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-50">
            <div className="relative h-12 w-36 sm:h-14 sm:w-44 md:h-16 md:w-60 transition-transform group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt={siteConfig.name}
                fill
                priority
                sizes="(max-width: 640px) 9rem, (max-width: 1024px) 12rem, 15rem"
                className="object-contain drop-shadow-md"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${desktopNavLinkBase} ${isActive
                    ? "text-[var(--gold)] bg-[var(--green)]/10 border-[var(--gold)] shadow-[0_4px_12px_rgba(27,77,62,0.12)]"
                    : "text-[var(--green)] border-transparent hover:text-[var(--gold)] hover:bg-[var(--green)]/5"
                    }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-4 pl-4 border-l border-[var(--green)]/10">
            <Link
              href="/contact"
              className="bg-[var(--gold)] text-[var(--green)] text-sm font-bold py-3 px-6 rounded-lg hover:bg-[var(--gold-light)] transition-colors shadow-md whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--green)] hover:text-[var(--gold)] transition-colors relative z-50"
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
        className={`fixed inset-0 bg-[var(--green)] z-40 lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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
                  className={`text-lg font-semibold py-3 px-4 rounded-lg ${isActive ? "bg-white/10" : "hover:bg-white/5"
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
              href="/contact"
              className="w-full block bg-[var(--gold)] text-[var(--green)] text-center text-lg font-bold py-4 rounded-lg hover:bg-[var(--gold-light)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

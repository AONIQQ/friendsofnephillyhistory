import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--green)] text-white">
      <div className="pt-20 pb-12">
        <div className="hof-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--gold)] transition-transform group-hover:scale-105">
                  <Image src="/logo.jpg" alt={siteConfig.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold font-serif leading-none text-white">Friends of Northeast</span>
                  <span className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider">Philadelphia History</span>
                </div>
              </Link>
              <p className="text-white/70 mb-6 leading-relaxed">{siteConfig.mission.description}</p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--green)] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--green)] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-base mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-4">
                {siteConfig.nav.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold text-base mb-6 font-serif">Stay Connected</h4>
              <p className="text-white/70 mb-5">Subscribe for updates on events and new publications.</p>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
                <button className="hof-btn hof-btn-gold">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="hof-container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="https://www.aoniqq.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[var(--gold)] transition-colors"
          >
            Site by AONIQQ LLC
          </a>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--primary-900)] text-white pb-8 border-t border-white/10 mt-24" style={{ paddingTop: '6rem' }}>
            <div className="hof-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--accent-500)] transition-transform group-hover:scale-105">
                                <Image
                                    src="/logo.jpg"
                                    alt={siteConfig.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold font-serif leading-none">Northeast Phila</span>
                                <span className="text-sm font-bold text-[var(--accent-500)] uppercase tracking-wider">Hall of Fame</span>
                            </div>
                        </Link>
                        <p className="text-white/70 mb-6 leading-relaxed text-sm">
                            {siteConfig.mission.description}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={siteConfig.links.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/5 hover:bg-[var(--accent-500)] hover:text-[var(--primary-900)] rounded-full flex items-center justify-center transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            {/* Add other social links if needed */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1 lg:pl-8">
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Quick Links</h4>
                        <ul className="space-y-3">
                            {siteConfig.nav.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-white/70 hover:text-[var(--accent-400)] hover:translate-x-1 transition-all duration-200 inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Partners */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Our Partners</h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="block text-white font-medium mb-1">{siteConfig.partners.holyFamily.name}</span>
                                <span className="text-sm text-white/60 block">{siteConfig.partners.holyFamily.role}</span>
                            </li>
                            <li>
                                <span className="block text-white font-medium mb-1">{siteConfig.partners.historicalSociety.name}</span>
                                <span className="text-sm text-white/60 block">{siteConfig.partners.historicalSociety.role}</span>
                            </li>
                            <li>
                                <span className="block text-white font-medium mb-1">{siteConfig.partners.centerForHistory.name}</span>
                                <span className="text-sm text-white/60 block">{siteConfig.partners.centerForHistory.role}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact/Newsletter */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Stay Connected</h4>
                        <p className="text-white/70 mb-4 text-sm">
                            Subscribe to our newsletter for updates on events and new inductees.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] transition-all"
                            />
                            <button className="bg-[var(--accent-500)] text-[var(--primary-900)] font-bold py-2 rounded-lg hover:bg-[var(--accent-400)] transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = siteConfig.nav;

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-[var(--primary-900)] shadow-lg py-6" : "bg-[var(--primary-900)]/95 backdrop-blur-md py-8"
            }`}
        >
            <div className="hof-container">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative z-50">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--accent-500)] transition-transform group-hover:scale-105">
                            <Image
                                src="/logo.jpg"
                                alt={siteConfig.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-white font-bold text-lg leading-tight font-serif tracking-tight">
                                Northeast Philadelphia
                            </h1>
                            <p className="text-[var(--accent-400)] text-sm font-bold tracking-wider uppercase">
                                Hall of Fame
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                                        isActive 
                                            ? "!text-white bg-white/20" 
                                            : "!text-white hover:bg-white/10"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/nominate"
                            className="hof-btn-gold text-sm py-2 px-6 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                        >
                            Nominate
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white hover:text-[var(--accent-400)] transition-colors relative z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-[var(--primary-900)] z-40 lg:hidden transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ top: '0', paddingTop: '100px' }}
            >
                <div className="hof-container h-full overflow-y-auto pb-8 flex flex-col">
                    <div className="flex flex-col gap-2 mb-8">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-2xl font-bold py-4 px-4 border-b border-white/10 ${
                                        isActive ? "!text-white bg-white/10 pl-6" : "!text-white hover:bg-white/5 hover:pl-6"
                                    } transition-all duration-200`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                    
                    <div className="mt-auto px-4 pb-8">
                        <Link
                            href="/nominate"
                            className="w-full block bg-[var(--accent-500)] text-[var(--primary-900)] text-center text-xl font-bold py-4 rounded-xl shadow-lg hover:bg-[var(--accent-400)] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Nominate Someone
                        </Link>
                        <div className="mt-6 flex justify-center gap-8">
                            {/* Social Icons Placeholder */}
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

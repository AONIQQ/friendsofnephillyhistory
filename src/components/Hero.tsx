"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Hero() {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 text-center z-10">
                {/* Decorative Element */}
                <div className="mx-auto mb-8 h-1 w-20 bg-amber-500 rounded-full" />

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 drop-shadow-lg font-serif">
                    {siteConfig.hero.title}
                </h1>

                <p className="mt-6 text-lg sm:text-xl leading-8 text-blue-100 font-light max-w-2xl mx-auto drop-shadow-md">
                    {siteConfig.hero.subtitle}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                    <Link
                        href="/nominate"
                        className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap min-w-[200px] text-center"
                    >
                        {siteConfig.hero.cta}
                    </Link>
                    <Link
                        href="/inductees"
                        className="bg-transparent text-white border-2 border-white/30 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap min-w-[200px]"
                    >
                        Meet Inductees
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

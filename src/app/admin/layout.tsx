"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const adminNav = [
    { name: "Dashboard", href: "/admin", icon: "dashboard" },
    { name: "Events", href: "/admin/events", icon: "calendar" },
    { name: "Historical Sketches", href: "/admin/historical-sketches", icon: "document" },
];

const icons: Record<string, React.ReactNode> = {
    dashboard: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    ),
    calendar: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    document: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
        </svg>
    ),
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Admin Header */}
            <header className="bg-[var(--primary-900)] text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-[var(--accent-500)] flex items-center justify-center">
                                    <span className="text-[var(--primary-900)] font-bold text-sm">HOF</span>
                                </div>
                            </Link>
                            <div>
                                <h1 className="font-bold">Admin Panel</h1>
                                <p className="text-xs text-white/60">{siteConfig.name}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/" className="text-sm text-white/80 hover:text-white">
                                View Site →
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <aside className="w-full lg:w-64 bg-white shadow-lg lg:min-h-[calc(100vh-4rem)] border-b lg:border-b-0 lg:border-r z-40">
                    <nav className="p-4 space-y-1 flex lg:block overflow-x-auto lg:overflow-visible gap-2 lg:gap-0">
                        {adminNav.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== "/admin" && pathname?.startsWith(item.href));
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all whitespace-nowrap ${isActive
                                            ? "text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                    style={isActive ? { backgroundColor: "var(--primary-700)" } : undefined}
                                >
                                    {icons[item.icon]}
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 sm:p-8 overflow-x-hidden">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { inductees } from "@/data/inductees";

// Mock data for dashboard stats
const dashboardStats = {
    totalInductees: inductees.length,
    pendingNominations: 8,
    upcomingEvents: 3,
    totalDonations: 12450,
    subscribers: 234,
    galleryImages: 47,
};

const recentNominations = [
    { id: "1", name: "John Smith", category: "Individual", date: "2024-01-15", status: "pending" },
    { id: "2", name: "Frankford Historical Society", category: "Organization", date: "2024-01-14", status: "reviewing" },
    { id: "3", name: "Mary Johnson", category: "Posthumous", date: "2024-01-12", status: "pending" },
];

const recentActivity = [
    { action: "New nomination submitted", detail: "John Smith nominated by Robert Davis", time: "2 hours ago" },
    { action: "Event created", detail: "2024 Induction Ceremony scheduled", time: "1 day ago" },
    { action: "Donation received", detail: "$100 from Anonymous", time: "2 days ago" },
    { action: "Nomination approved", detail: "Historical Society moved to voting", time: "3 days ago" },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">
                    Welcome to the {siteConfig.name} admin panel
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Inductees</p>
                            <p className="text-3xl font-bold text-[var(--primary-800)]">
                                {dashboardStats.totalInductees}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-[var(--primary-100)] rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-[var(--primary-700)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                    <Link href="/admin/inductees" className="text-sm text-[var(--primary-600)] hover:underline mt-4 inline-block">
                        Manage inductees →
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Pending Nominations</p>
                            <p className="text-3xl font-bold text-[var(--accent-600)]">
                                {dashboardStats.pendingNominations}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                    </div>
                    <Link href="/admin/nominations" className="text-sm text-[var(--primary-600)] hover:underline mt-4 inline-block">
                        Review nominations →
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Upcoming Events</p>
                            <p className="text-3xl font-bold text-green-600">
                                {dashboardStats.upcomingEvents}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <Link href="/admin/events" className="text-sm text-[var(--primary-600)] hover:underline mt-4 inline-block">
                        Manage events →
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Donations</p>
                            <p className="text-3xl font-bold text-emerald-600">
                                ${dashboardStats.totalDonations.toLocaleString()}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <Link href="/admin/donations" className="text-sm text-[var(--primary-600)] hover:underline mt-4 inline-block">
                        View donations →
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Newsletter Subscribers</p>
                            <p className="text-3xl font-bold text-purple-600">
                                {dashboardStats.subscribers}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <Link href="/admin/subscribers" className="text-sm text-[var(--primary-600)] hover:underline mt-4 inline-block">
                        Manage subscribers →
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Gallery Images</p>
                            <p className="text-3xl font-bold text-blue-600">
                                {dashboardStats.galleryImages}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <Link href="/admin/gallery" className="text-sm text-[var(--primary-600)] hover:underline mt-4 inline-block">
                        Manage gallery →
                    </Link>
                </div>
            </div>

            {/* Recent Activity & Nominations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Nominations */}
                <div className="bg-white rounded-xl shadow-sm border">
                    <div className="p-6 border-b">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Nominations</h2>
                            <Link href="/admin/nominations" className="text-sm text-[var(--primary-600)] hover:underline">
                                View all
                            </Link>
                        </div>
                    </div>
                    <div className="divide-y">
                        {recentNominations.map((nomination) => (
                            <div key={nomination.id} className="p-4 hover:bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">{nomination.name}</p>
                                        <p className="text-sm text-gray-500">{nomination.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                            nomination.status === "pending" 
                                                ? "bg-yellow-100 text-yellow-700"
                                                : nomination.status === "reviewing"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-green-100 text-green-700"
                                        }`}>
                                            {nomination.status}
                                        </span>
                                        <p className="text-xs text-gray-400 mt-1">{nomination.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm border">
                    <div className="p-6 border-b">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                    </div>
                    <div className="divide-y">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="p-4 hover:bg-gray-50">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-[var(--primary-500)]"></div>
                                    <div>
                                        <p className="font-medium text-gray-900">{activity.action}</p>
                                        <p className="text-sm text-gray-500">{activity.detail}</p>
                                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link
                        href="/admin/events/new"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-[var(--primary-500)] hover:bg-[var(--primary-50)] transition-colors"
                    >
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Add Event</span>
                    </Link>
                    <Link
                        href="/admin/gallery/upload"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-[var(--primary-500)] hover:bg-[var(--primary-50)] transition-colors"
                    >
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Upload Photos</span>
                    </Link>
                    <Link
                        href="/admin/voting"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-[var(--primary-500)] hover:bg-[var(--primary-50)] transition-colors"
                    >
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Start Voting</span>
                    </Link>
                    <Link
                        href="/admin/inductees/new"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-[var(--primary-500)] hover:bg-[var(--primary-50)] transition-colors"
                    >
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Add Inductee</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

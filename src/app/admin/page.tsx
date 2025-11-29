"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useState, useEffect } from "react";
import { adminAuth } from "@/lib/admin-auth";

export default function AdminDashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const auth = sessionStorage.getItem("admin_authenticated");
            if (auth === "true") {
                setIsAuthenticated(true);
            }
            setIsLoading(false);
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError("");

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            const data = await response.json();

            if (!response.ok) {
                setLoginError(data.error || "Invalid password");
                return;
            }

            adminAuth.authenticate(password);
            setIsAuthenticated(true);
            setIsLoading(false);
            setPassword("");
        } catch (error) {
            console.error("Admin login error:", error);
            setLoginError("Unable to verify credentials");
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-700)]"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-sm border">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    {loginError && (
                        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">
                            {loginError}
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                            placeholder="Enter admin password"
                            autoFocus
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Tools</h1>
                <p className="text-gray-600 mt-1">
                    Welcome to the {siteConfig.name} admin panel. Use the shortcuts below to keep the public site up to date.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    href="/admin/events"
                    className="flex flex-col gap-3 p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">Event Manager</h2>
                        <div className="w-10 h-10 rounded-full bg-[var(--primary-100)] flex items-center justify-center">
                            <svg className="w-5 h-5 text-[var(--primary-700)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Add, edit, or remove events that appear on the public calendar.
                    </p>
                    <span className="text-sm font-medium text-[var(--primary-700)]">Go to Event Manager →</span>
                    </Link>

                <Link
                    href="/calendar"
                    className="flex flex-col gap-3 p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">View Public Calendar</h2>
                        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-4.215A2 2 0 0016.683 11H7.317a2 2 0 00-1.912 1.785L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Double-check how your updates look to visitors after publishing changes.
                    </p>
                    <span className="text-sm font-medium text-[var(--primary-700)]">Open Calendar →</span>
                    </Link>
            </div>

            <div className="bg-white rounded-xl border shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Need something else?</h2>
                <p className="text-gray-600 mb-4">
                    This admin area only contains tools that power the current Friends of Northeast Philadelphia History website. Older Hall of Fame modules (inductees, nominations, voting, gallery uploads, donations, etc.) have been removed to keep things simple.
                </p>
                <p className="text-sm text-gray-500">
                    Reach out to <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--primary-700)] hover:underline">{siteConfig.contact.email}</a> if you need additional admin features added in the future.
                </p>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";

interface Donation {
    id: string;
    donorName: string;
    email: string;
    amount: number;
    date: string;
    type: "one-time" | "monthly";
    status: "completed" | "pending" | "failed";
    tier?: string;
}

// Mock data
const mockDonations: Donation[] = [
    {
        id: "1",
        donorName: "Michael Brown",
        email: "m.brown@email.com",
        amount: 250,
        date: "2024-01-15",
        type: "one-time",
        status: "completed",
        tier: "Champion",
    },
    {
        id: "2",
        donorName: "Sarah Wilson",
        email: "s.wilson@email.com",
        amount: 100,
        date: "2024-01-14",
        type: "one-time",
        status: "completed",
        tier: "Patron",
    },
    {
        id: "3",
        donorName: "David Lee",
        email: "d.lee@email.com",
        amount: 50,
        date: "2024-01-13",
        type: "monthly",
        status: "completed",
        tier: "Supporter",
    },
    {
        id: "4",
        donorName: "Emily Chen",
        email: "e.chen@email.com",
        amount: 25,
        date: "2024-01-12",
        type: "one-time",
        status: "pending",
        tier: "Friend",
    },
];

export default function DonationsPage() {
    const [donations, setDonations] = useState<Donation[]>(mockDonations);
    const [searchTerm, setSearchTerm] = useState("");
    const [isExporting, setIsExporting] = useState(false);

    const filteredDonations = donations.filter(donation => 
        donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalRevenue = donations
        .filter(d => d.status === "completed")
        .reduce((sum, d) => sum + d.amount, 0);

    const handleExport = () => {
        setIsExporting(true);
        // Simulate export
        setTimeout(() => {
            alert("Exported donations report to CSV");
            setIsExporting(false);
        }, 1000);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Donations</h1>
                    <p className="text-gray-600 mt-1">Track and manage donation records</p>
                </div>
                <button
                    onClick={handleExport}
                    disabled={isExporting}
                    className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    {isExporting ? "Exporting..." : "Export Report"}
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500">Total Revenue</p>
                    <p className="text-3xl font-bold text-emerald-600">
                        ${totalRevenue.toLocaleString()}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500">Total Donors</p>
                    <p className="text-3xl font-bold text-[var(--primary-700)]">
                        {donations.length}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500">Monthly Donors</p>
                    <p className="text-3xl font-bold text-blue-600">
                        {donations.filter(d => d.type === "monthly").length}
                    </p>
                </div>
            </div>

            {/* List */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-4 border-b">
                    <div className="relative max-w-md">
                        <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by donor name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Donor</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Amount</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Date</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Tier</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Type</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {filteredDonations.map((donation) => (
                                <tr key={donation.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{donation.donorName}</p>
                                        <p className="text-sm text-gray-500">{donation.email}</p>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        ${donation.amount}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{donation.date}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 text-xs rounded-full bg-[var(--primary-100)] text-[var(--primary-700)]">
                                            {donation.tier || "N/A"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 capitalize">{donation.type}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            donation.status === "completed"
                                                ? "bg-green-100 text-green-700"
                                                : donation.status === "pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                        }`}>
                                            {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

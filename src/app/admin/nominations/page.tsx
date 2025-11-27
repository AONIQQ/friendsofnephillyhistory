"use client";

import { useState } from "react";
import Link from "next/link";

interface Nomination {
    id: string;
    nomineeName: string;
    nomineeCategory: string;
    nomineeYears: string;
    nominatorName: string;
    nominatorEmail: string;
    shortDescription: string;
    achievements: string;
    significance: string;
    status: "pending" | "reviewing" | "approved" | "rejected" | "voting";
    createdAt: string;
    votes?: number;
}

// Mock data
const mockNominations: Nomination[] = [
    {
        id: "1",
        nomineeName: "John Smith",
        nomineeCategory: "Individual",
        nomineeYears: "1945-2020",
        nominatorName: "Robert Davis",
        nominatorEmail: "rdavis@email.com",
        shortDescription: "Community leader who founded multiple youth programs in Frankford.",
        achievements: "Founded Frankford Youth Athletics, mentored over 500 young people, served on school board for 15 years.",
        significance: "His programs have helped thousands of young people stay active and engaged in the community.",
        status: "pending",
        createdAt: "2024-01-15",
    },
    {
        id: "2",
        nomineeName: "Frankford Historical Society",
        nomineeCategory: "Organization",
        nomineeYears: "Founded 1952",
        nominatorName: "Sarah Johnson",
        nominatorEmail: "sjohnson@email.com",
        shortDescription: "Preserving Frankford's history for over 70 years.",
        achievements: "Maintains historic archives, hosts educational programs, restored Frankford Arsenal artifacts.",
        significance: "Irreplaceable resource for local history education and preservation.",
        status: "reviewing",
        createdAt: "2024-01-14",
    },
    {
        id: "3",
        nomineeName: "Mary Johnson",
        nomineeCategory: "Posthumous",
        nomineeYears: "1898-1985",
        nominatorName: "Thomas Wilson",
        nominatorEmail: "twilson@email.com",
        shortDescription: "Pioneering educator who integrated Mayfair schools.",
        achievements: "First African American principal in Northeast Philadelphia, established scholarship fund.",
        significance: "Broke barriers and opened doors for generations of students.",
        status: "voting",
        createdAt: "2024-01-12",
        votes: 12,
    },
    {
        id: "4",
        nomineeName: "Dr. James Carter",
        nomineeCategory: "Individual",
        nomineeYears: "Born 1960",
        nominatorName: "Lisa Martinez",
        nominatorEmail: "lmartinez@email.com",
        shortDescription: "Renowned cardiologist who has provided free heart screenings in Northeast Philadelphia for 20 years.",
        achievements: "Performed over 10,000 free screenings, trained 50+ local doctors, established mobile health clinic.",
        significance: "Saved countless lives through early detection and preventive care.",
        status: "approved",
        createdAt: "2024-01-10",
    },
];

const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    reviewing: "bg-blue-100 text-blue-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
    voting: "bg-purple-100 text-purple-700",
};

export default function NominationsPage() {
    const [nominations, setNominations] = useState<Nomination[]>(mockNominations);
    const [selectedNomination, setSelectedNomination] = useState<Nomination | null>(null);
    const [filter, setFilter] = useState<string>("all");

    const filteredNominations = filter === "all" 
        ? nominations 
        : nominations.filter(n => n.status === filter);

    const updateStatus = (id: string, newStatus: Nomination["status"]) => {
        setNominations(prev => 
            prev.map(n => n.id === id ? { ...n, status: newStatus } : n)
        );
        if (selectedNomination?.id === id) {
            setSelectedNomination(prev => prev ? { ...prev, status: newStatus } : null);
        }
    };

    const statusCounts = {
        all: nominations.length,
        pending: nominations.filter(n => n.status === "pending").length,
        reviewing: nominations.filter(n => n.status === "reviewing").length,
        voting: nominations.filter(n => n.status === "voting").length,
        approved: nominations.filter(n => n.status === "approved").length,
        rejected: nominations.filter(n => n.status === "rejected").length,
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Nominations</h1>
                    <p className="text-gray-600 mt-1">Review and manage Hall of Fame nominations</p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 border-b pb-4">
                {Object.entries(statusCounts).map(([status, count]) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            filter === status
                                ? "bg-[var(--primary-700)] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Nominations List */}
                <div className="lg:col-span-1 space-y-4">
                    {filteredNominations.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
                            <p className="text-gray-500">No nominations found</p>
                        </div>
                    ) : (
                        filteredNominations.map((nomination) => (
                            <div
                                key={nomination.id}
                                onClick={() => setSelectedNomination(nomination)}
                                className={`bg-white rounded-xl shadow-sm border p-4 cursor-pointer transition-all hover:shadow-md ${
                                    selectedNomination?.id === nomination.id 
                                        ? "ring-2 ring-[var(--primary-500)]" 
                                        : ""
                                }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-gray-900">{nomination.nomineeName}</h3>
                                    <span className={`px-2 py-1 text-xs rounded-full ${statusColors[nomination.status]}`}>
                                        {nomination.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{nomination.nomineeCategory}</p>
                                <p className="text-sm text-gray-600 line-clamp-2">{nomination.shortDescription}</p>
                                <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                                    <span>By {nomination.nominatorName}</span>
                                    <span>{nomination.createdAt}</span>
                                </div>
                                {nomination.votes !== undefined && (
                                    <div className="mt-2 flex items-center gap-1 text-purple-600">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="font-medium">{nomination.votes} votes</span>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Nomination Detail */}
                <div className="lg:col-span-2">
                    {selectedNomination ? (
                        <div className="bg-white rounded-xl shadow-sm border">
                            <div className="p-6 border-b">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{selectedNomination.nomineeName}</h2>
                                        <p className="text-gray-500">{selectedNomination.nomineeCategory} • {selectedNomination.nomineeYears}</p>
                                    </div>
                                    <span className={`px-3 py-1 text-sm rounded-full ${statusColors[selectedNomination.status]}`}>
                                        {selectedNomination.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                                    <p className="text-gray-700">{selectedNomination.shortDescription}</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Key Achievements</h3>
                                    <p className="text-gray-700">{selectedNomination.achievements}</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Why They Should Be Inducted</h3>
                                    <p className="text-gray-700">{selectedNomination.significance}</p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Nominator Information</h3>
                                    <p className="text-gray-700">{selectedNomination.nominatorName}</p>
                                    <p className="text-gray-500 text-sm">{selectedNomination.nominatorEmail}</p>
                                    <p className="text-gray-400 text-sm mt-1">Submitted: {selectedNomination.createdAt}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 pt-4 border-t">
                                    {selectedNomination.status === "pending" && (
                                        <>
                                            <button
                                                onClick={() => updateStatus(selectedNomination.id, "reviewing")}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                Mark as Reviewing
                                            </button>
                                            <button
                                                onClick={() => updateStatus(selectedNomination.id, "rejected")}
                                                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                                            >
                                                Reject
                                            </button>
                                        </>
                                    )}
                                    {selectedNomination.status === "reviewing" && (
                                        <>
                                            <button
                                                onClick={() => updateStatus(selectedNomination.id, "voting")}
                                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                            >
                                                Move to Voting
                                            </button>
                                            <button
                                                onClick={() => updateStatus(selectedNomination.id, "rejected")}
                                                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                                            >
                                                Reject
                                            </button>
                                        </>
                                    )}
                                    {selectedNomination.status === "voting" && (
                                        <>
                                            <button
                                                onClick={() => updateStatus(selectedNomination.id, "approved")}
                                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                            >
                                                Approve for Induction
                                            </button>
                                            <Link
                                                href="/admin/voting"
                                                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                                            >
                                                View Voting Results
                                            </Link>
                                        </>
                                    )}
                                    {selectedNomination.status === "approved" && (
                                        <Link
                                            href="/admin/inductees/new"
                                            className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors"
                                        >
                                            Create Inductee Profile
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-gray-500 text-lg">Select a nomination to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

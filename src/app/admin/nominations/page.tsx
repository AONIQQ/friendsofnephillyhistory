"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Nomination {
    id: string;
    nomineeName: string;
    nomineeCategory: string;
    nomineeYears: string | null;
    nominatorName: string;
    nominatorEmail: string;
    nominatorPhone: string | null;
    nominatorRelation: string | null;
    shortDescription: string;
    achievements: string;
    significance: string;
    supportingInfo: string | null;
    status: string;
    reviewNotes: string | null;
    reviewedBy: string | null;
    reviewedAt: string | null;
    createdAt: string;
}

const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    reviewing: "bg-blue-100 text-blue-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
    voting: "bg-purple-100 text-purple-700",
};

export default function NominationsPage() {
    const [nominations, setNominations] = useState<Nomination[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedNomination, setSelectedNomination] = useState<Nomination | null>(null);
    const [filter, setFilter] = useState<string>("all");

    // Fetch nominations on component mount
    useEffect(() => {
        fetchNominations();
    }, []);

    const fetchNominations = async () => {
        try {
            const response = await fetch("/api/nominations");
            const data = await response.json();
            if (Array.isArray(data)) {
                setNominations(data);
            }
        } catch (error) {
            console.error("Error fetching nominations:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredNominations = filter === "all"
        ? nominations
        : nominations.filter(n => n.status === filter);

    const updateStatus = async (id: string, newStatus: string) => {
        const adminPassword = prompt("Enter admin password:");
        if (!adminPassword) return;

        try {
            const response = await fetch("/api/nominations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "updateStatus",
                    id,
                    password: adminPassword,
                    nomination: {
                        status: newStatus,
                    },
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Failed to update status");
                return;
            }

            if (data.nominations) {
                setNominations(data.nominations);
                // Update selected nomination if it's the one being updated
                if (selectedNomination?.id === id) {
                    const updated = data.nominations.find((n: Nomination) => n.id === id);
                    if (updated) setSelectedNomination(updated);
                }
            }
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        }
    };

    const deleteNomination = async (id: string) => {
        const adminPassword = prompt("Enter admin password to delete:");
        if (!adminPassword) return;

        try {
            const response = await fetch("/api/nominations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "delete",
                    id,
                    password: adminPassword,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Failed to delete nomination");
                return;
            }

            if (data.nominations) {
                setNominations(data.nominations);
                if (selectedNomination?.id === id) {
                    setSelectedNomination(null);
                }
            }
        } catch (error) {
            console.error("Error deleting nomination:", error);
            alert("Failed to delete nomination");
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

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-700)]"></div>
            </div>
        );
    }

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
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
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
                                    <span className={`px-2 py-1 text-xs rounded-full ${statusColors[nomination.status] || statusColors.pending}`}>
                                        {nomination.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{nomination.nomineeCategory}</p>
                                <p className="text-sm text-gray-600 line-clamp-2">{nomination.shortDescription}</p>
                                <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                                    <span>By {nomination.nominatorName}</span>
                                    <span>{new Date(nomination.createdAt).toLocaleDateString()}</span>
                                </div>
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
                                        <p className="text-gray-500">{selectedNomination.nomineeCategory} • {selectedNomination.nomineeYears || "N/A"}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`px-3 py-1 text-sm rounded-full ${statusColors[selectedNomination.status] || statusColors.pending}`}>
                                            {selectedNomination.status}
                                        </span>
                                        <button
                                            onClick={() => deleteNomination(selectedNomination.id)}
                                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete nomination"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
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

                                {selectedNomination.supportingInfo && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Supporting Information</h3>
                                        <p className="text-gray-700">{selectedNomination.supportingInfo}</p>
                                    </div>
                                )}

                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Nominator Information</h3>
                                    <p className="text-gray-700">{selectedNomination.nominatorName}</p>
                                    <p className="text-gray-500 text-sm">{selectedNomination.nominatorEmail}</p>
                                    {selectedNomination.nominatorPhone && (
                                        <p className="text-gray-500 text-sm">{selectedNomination.nominatorPhone}</p>
                                    )}
                                    {selectedNomination.nominatorRelation && (
                                        <p className="text-gray-500 text-sm">Relation: {selectedNomination.nominatorRelation}</p>
                                    )}
                                    <p className="text-gray-400 text-sm mt-1">Submitted: {new Date(selectedNomination.createdAt).toLocaleString()}</p>
                                </div>

                                {selectedNomination.reviewNotes && (
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2">Review Notes</h3>
                                        <p className="text-gray-700">{selectedNomination.reviewNotes}</p>
                                        {selectedNomination.reviewedBy && (
                                            <p className="text-gray-500 text-sm mt-2">Reviewed by: {selectedNomination.reviewedBy}</p>
                                        )}
                                    </div>
                                )}

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
                                            href="/admin/inductees"
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

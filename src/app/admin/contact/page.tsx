"use client";

import { useState, useEffect } from "react";

interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    inquiryType: string;
    subject: string;
    message: string;
    status: string;
    createdAt: string;
}

const statusColors: Record<string, string> = {
    new: "bg-blue-100 text-blue-700",
    read: "bg-gray-100 text-gray-700",
    responded: "bg-green-100 text-green-700",
    archived: "bg-yellow-100 text-yellow-700",
};

const inquiryTypeLabels: Record<string, string> = {
    volunteer: "Volunteer",
    host_event: "Host Event",
    partnership: "Partnership",
    general: "General Inquiry",
};

import { adminAuth } from "@/lib/admin-auth";
import { useRouter } from "next/navigation";

export default function ContactSubmissionsPage() {
    const router = useRouter();
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
    const [filter, setFilter] = useState<string>("all");

    // Check auth and fetch submissions on component mount
    useEffect(() => {
        if (!adminAuth.isAuthenticated()) {
            router.push("/admin");
            return;
        }
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        const password = adminAuth.getAuthToken();
        try {
            const response = await fetch(`/api/contact?password=${encodeURIComponent(password)}`);
            const data = await response.json();
            if (Array.isArray(data)) {
                setSubmissions(data);
            }
        } catch (error) {
            console.error("Error fetching submissions:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        const password = adminAuth.getAuthToken();
        if (!password) {
            alert("Session expired. Please login again.");
            router.push("/admin");
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "updateStatus",
                    id,
                    password,
                    status: newStatus,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Failed to update status");
                return;
            }

            if (data.submissions) {
                setSubmissions(data.submissions);
                if (selectedSubmission?.id === id) {
                    const updated = data.submissions.find((s: ContactSubmission) => s.id === id);
                    if (updated) setSelectedSubmission(updated);
                }
            }
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        }
    };

    const deleteSubmission = async (id: string) => {
        if (!confirm("Are you sure you want to delete this submission?")) return;

        const password = adminAuth.getAuthToken();
        if (!password) {
            alert("Session expired. Please login again.");
            router.push("/admin");
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "delete",
                    id,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Failed to delete submission");
                return;
            }

            if (data.submissions) {
                setSubmissions(data.submissions);
                if (selectedSubmission?.id === id) {
                    setSelectedSubmission(null);
                }
            }
        } catch (error) {
            console.error("Error deleting submission:", error);
            alert("Failed to delete submission");
        }
    };

    const filteredSubmissions = filter === "all"
        ? submissions
        : submissions.filter(s => s.status === filter);

    const statusCounts = {
        all: submissions.length,
        new: submissions.filter(s => s.status === "new").length,
        read: submissions.filter(s => s.status === "read").length,
        responded: submissions.filter(s => s.status === "responded").length,
        archived: submissions.filter(s => s.status === "archived").length,
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
                    <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
                    <p className="text-gray-600 mt-1">View and manage contact form submissions</p>
                </div>
                <button
                    onClick={fetchSubmissions}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 border-b pb-4">
                {Object.entries(statusCounts).map(([status, count]) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === status
                                ? "bg-[var(--primary-700)] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Submissions List */}
                <div className="lg:col-span-1 space-y-4">
                    {filteredSubmissions.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-500">No submissions found</p>
                        </div>
                    ) : (
                        filteredSubmissions.map((submission) => (
                            <div
                                key={submission.id}
                                onClick={() => {
                                    setSelectedSubmission(submission);
                                    if (submission.status === "new") {
                                        updateStatus(submission.id, "read");
                                    }
                                }}
                                className={`bg-white rounded-xl shadow-sm border p-4 cursor-pointer transition-all hover:shadow-md ${selectedSubmission?.id === submission.id
                                        ? "ring-2 ring-[var(--primary-500)]"
                                        : ""
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                                    <span className={`px-2 py-1 text-xs rounded-full ${statusColors[submission.status] || statusColors.new}`}>
                                        {submission.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-1">{submission.subject}</p>
                                <p className="text-sm text-gray-600 line-clamp-2">{submission.message}</p>
                                <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                                    <span>{inquiryTypeLabels[submission.inquiryType] || submission.inquiryType}</span>
                                    <span>{new Date(submission.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Submission Detail */}
                <div className="lg:col-span-2">
                    {selectedSubmission ? (
                        <div className="bg-white rounded-xl shadow-sm border">
                            <div className="p-6 border-b">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{selectedSubmission.subject}</h2>
                                        <p className="text-gray-500">
                                            {inquiryTypeLabels[selectedSubmission.inquiryType] || selectedSubmission.inquiryType}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`px-3 py-1 text-sm rounded-full ${statusColors[selectedSubmission.status] || statusColors.new}`}>
                                            {selectedSubmission.status}
                                        </span>
                                        <button
                                            onClick={() => deleteSubmission(selectedSubmission.id)}
                                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete submission"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                                    <p className="text-gray-700">{selectedSubmission.name}</p>
                                    <p className="text-gray-500 text-sm">{selectedSubmission.email}</p>
                                    {selectedSubmission.phone && (
                                        <p className="text-gray-500 text-sm">{selectedSubmission.phone}</p>
                                    )}
                                    <p className="text-gray-400 text-sm mt-2">
                                        Received: {new Date(selectedSubmission.createdAt).toLocaleString()}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Message</h3>
                                    <p className="text-gray-700 whitespace-pre-wrap">{selectedSubmission.message}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 pt-4 border-t">
                                    <a
                                        href={`mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}`}
                                        className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors"
                                    >
                                        Reply via Email
                                    </a>
                                    {selectedSubmission.status !== "responded" && (
                                        <button
                                            onClick={() => updateStatus(selectedSubmission.id, "responded")}
                                            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                                        >
                                            Mark as Responded
                                        </button>
                                    )}
                                    {selectedSubmission.status !== "archived" && (
                                        <button
                                            onClick={() => updateStatus(selectedSubmission.id, "archived")}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                        >
                                            Archive
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-500 text-lg">Select a submission to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

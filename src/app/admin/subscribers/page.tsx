"use client";

import { useState } from "react";

interface Subscriber {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    joinDate: string;
    status: "active" | "unsubscribed";
    source: string;
}

// Mock data
const mockSubscribers: Subscriber[] = [
    {
        id: "1",
        email: "john.doe@example.com",
        firstName: "John",
        lastName: "Doe",
        joinDate: "2024-01-15",
        status: "active",
        source: "Website Footer",
    },
    {
        id: "2",
        email: "jane.smith@example.com",
        firstName: "Jane",
        lastName: "Smith",
        joinDate: "2024-01-14",
        status: "active",
        source: "Donation Form",
    },
    {
        id: "3",
        email: "robert.jones@example.com",
        firstName: "Robert",
        lastName: "Jones",
        joinDate: "2024-01-12",
        status: "unsubscribed",
        source: "Event Registration",
    },
    {
        id: "4",
        email: "lisa.brown@example.com",
        firstName: "Lisa",
        lastName: "Brown",
        joinDate: "2024-01-10",
        status: "active",
        source: "Nomination Form",
    },
];

export default function SubscribersPage() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>(mockSubscribers);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([]);
    const [isExporting, setIsExporting] = useState(false);

    const filteredSubscribers = subscribers.filter(sub => 
        sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleSelectAll = () => {
        if (selectedSubscribers.length === filteredSubscribers.length) {
            setSelectedSubscribers([]);
        } else {
            setSelectedSubscribers(filteredSubscribers.map(sub => sub.id));
        }
    };

    const toggleSelect = (id: string) => {
        if (selectedSubscribers.includes(id)) {
            setSelectedSubscribers(prev => prev.filter(sId => sId !== id));
        } else {
            setSelectedSubscribers(prev => [...prev, id]);
        }
    };

    const handleExport = () => {
        setIsExporting(true);
        // Simulate export
        setTimeout(() => {
            alert(`Exported ${selectedSubscribers.length || filteredSubscribers.length} subscribers to CSV`);
            setIsExporting(false);
        }, 1000);
    };

    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete ${selectedSubscribers.length} subscribers?`)) {
            setSubscribers(prev => prev.filter(sub => !selectedSubscribers.includes(sub.id)));
            setSelectedSubscribers([]);
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Subscribers</h1>
                    <p className="text-gray-600 mt-1">Manage newsletter subscriptions and email lists</p>
                </div>
                <div className="flex gap-3">
                    {selectedSubscribers.length > 0 && (
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete Selected
                        </button>
                    )}
                    <button
                        onClick={handleExport}
                        disabled={isExporting}
                        className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        {isExporting ? "Exporting..." : "Export CSV"}
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500">Total Subscribers</p>
                    <p className="text-3xl font-bold text-[var(--primary-700)]">{subscribers.length}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500">Active</p>
                    <p className="text-3xl font-bold text-green-600">
                        {subscribers.filter(s => s.status === "active").length}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500">Unsubscribed</p>
                    <p className="text-3xl font-bold text-gray-500">
                        {subscribers.filter(s => s.status === "unsubscribed").length}
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
                            placeholder="Search by name or email..."
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
                                <th className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedSubscribers.length === filteredSubscribers.length}
                                        onChange={toggleSelectAll}
                                        className="rounded text-[var(--primary-600)] focus:ring-[var(--primary-500)]"
                                    />
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Email</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Name</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Source</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Join Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {filteredSubscribers.map((subscriber) => (
                                <tr key={subscriber.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedSubscribers.includes(subscriber.id)}
                                            onChange={() => toggleSelect(subscriber.id)}
                                            className="rounded text-[var(--primary-600)] focus:ring-[var(--primary-500)]"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">{subscriber.email}</td>
                                    <td className="px-6 py-4 text-gray-900">{subscriber.firstName} {subscriber.lastName}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            subscriber.status === "active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-600"
                                        }`}>
                                            {subscriber.status.charAt(0).toUpperCase() + subscriber.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{subscriber.source}</td>
                                    <td className="px-6 py-4 text-gray-500">{subscriber.joinDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

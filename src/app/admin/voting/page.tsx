"use client";

import { useState } from "react";

interface VotingCandidate {
    id: string;
    name: string;
    category: string;
    description: string;
    votes: number;
    nominatorName: string;
}

interface VotingSession {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    status: "active" | "closed" | "scheduled";
    candidates: VotingCandidate[];
    totalVoters: number;
}

const mockVotingSession: VotingSession = {
    id: "1",
    title: "2024 Hall of Fame Selection",
    startDate: "2024-06-01",
    endDate: "2024-07-15",
    status: "active",
    totalVoters: 24,
    candidates: [
        {
            id: "1",
            name: "Mary Johnson",
            category: "Posthumous",
            description: "Pioneering educator who integrated Mayfair schools.",
            votes: 18,
            nominatorName: "Thomas Wilson",
        },
        {
            id: "2",
            name: "Frankford Historical Society",
            category: "Organization",
            description: "Preserving Frankford's history for over 70 years.",
            votes: 15,
            nominatorName: "Sarah Johnson",
        },
        {
            id: "3",
            name: "Dr. Michael Chen",
            category: "Individual",
            description: "Dedicated pediatrician serving Northeast Philadelphia for 40 years.",
            votes: 12,
            nominatorName: "Community Clinic",
        },
        {
            id: "4",
            name: "Northeast Times",
            category: "Organization",
            description: "Local newspaper serving the community since 1972.",
            votes: 10,
            nominatorName: "Reader Association",
        },
    ],
};

export default function VotingPage() {
    const [session, setSession] = useState<VotingSession>(mockVotingSession);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [newSession, setNewSession] = useState({
        title: "",
        startDate: "",
        endDate: "",
    });

    const sortedCandidates = [...session.candidates].sort((a, b) => b.votes - a.votes);
    const maxVotes = Math.max(...session.candidates.map(c => c.votes));

    const closeVoting = () => {
        if (confirm("Are you sure you want to close this voting session? This action cannot be undone.")) {
            setSession(prev => ({ ...prev, status: "closed" }));
        }
    };

    const approveCandidate = (id: string) => {
        alert(`Candidate ${id} approved for induction! Redirecting to create inductee profile...`);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Voting</h1>
                    <p className="text-gray-600 mt-1">Manage committee voting on nominations</p>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    New Voting Session
                </button>
            </div>

            {/* Current Session */}
            <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">{session.title}</h2>
                            <p className="text-gray-500 text-sm mt-1">
                                {new Date(session.startDate).toLocaleDateString()} - {new Date(session.endDate).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 text-sm rounded-full ${
                                session.status === "active"
                                    ? "bg-green-100 text-green-700"
                                    : session.status === "closed"
                                    ? "bg-gray-100 text-gray-700"
                                    : "bg-yellow-100 text-yellow-700"
                            }`}>
                                {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                            </span>
                            {session.status === "active" && (
                                <button
                                    onClick={closeVoting}
                                    className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                                >
                                    Close Voting
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Voting Stats */}
                <div className="grid grid-cols-3 gap-6 p-6 border-b bg-gray-50">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[var(--primary-700)]">{session.candidates.length}</p>
                        <p className="text-sm text-gray-600">Candidates</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[var(--primary-700)]">{session.totalVoters}</p>
                        <p className="text-sm text-gray-600">Committee Voters</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[var(--primary-700)]">
                            {session.candidates.reduce((sum, c) => sum + c.votes, 0)}
                        </p>
                        <p className="text-sm text-gray-600">Total Votes Cast</p>
                    </div>
                </div>

                {/* Candidates Ranking */}
                <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Current Rankings</h3>
                    <div className="space-y-4">
                        {sortedCandidates.map((candidate, index) => (
                            <div key={candidate.id} className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                                    index === 0 
                                        ? "bg-[var(--accent-500)] text-[var(--primary-900)]"
                                        : index === 1
                                        ? "bg-gray-300 text-gray-700"
                                        : index === 2
                                        ? "bg-amber-600 text-white"
                                        : "bg-gray-100 text-gray-600"
                                }`}>
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <div>
                                            <span className="font-medium text-gray-900">{candidate.name}</span>
                                            <span className="text-sm text-gray-500 ml-2">({candidate.category})</span>
                                        </div>
                                        <span className="font-semibold text-[var(--primary-700)]">{candidate.votes} votes</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-[var(--primary-600)] h-2 rounded-full transition-all"
                                            style={{ width: `${(candidate.votes / maxVotes) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{candidate.description}</p>
                                </div>
                                {session.status === "closed" && index < 3 && (
                                    <button
                                        onClick={() => approveCandidate(candidate.id)}
                                        className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Approve
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Voting Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2">How Voting Works</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Committee members receive a unique voting link via email</li>
                    <li>• Each member can vote for up to 3 candidates</li>
                    <li>• Voting is anonymous - only totals are visible</li>
                    <li>• When voting closes, top candidates can be approved for induction</li>
                    <li>• Approved candidates are then added to the inductee database</li>
                </ul>
            </div>

            {/* Create Session Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-lg w-full">
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-900">Create Voting Session</h2>
                        </div>
                        <form className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Session Title</label>
                                <input
                                    type="text"
                                    value={newSession.title}
                                    onChange={(e) => setNewSession(prev => ({ ...prev, title: e.target.value }))}
                                    placeholder="e.g., 2024 Hall of Fame Selection"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                    <input
                                        type="date"
                                        value={newSession.startDate}
                                        onChange={(e) => setNewSession(prev => ({ ...prev, startDate: e.target.value }))}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                    <input
                                        type="date"
                                        value={newSession.endDate}
                                        onChange={(e) => setNewSession(prev => ({ ...prev, endDate: e.target.value }))}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-600">
                                    <strong>Note:</strong> All nominations with "voting" status will automatically be included in this session.
                                </p>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors"
                                >
                                    Create Session
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";

interface Inductee {
    id: string;
    name: string;
    years: string;
    category: string;
    inductionYear: number;
    shortBio: string;
    fullBio: string;
    achievements: string;
    imageUrl?: string | null;
    wikipediaUrl?: string | null;
    isPublished: boolean;
    createdAt: string;
}

interface InducteeForm {
    name: string;
    years: string;
    category: string;
    inductionYear: number;
    shortBio: string;
    fullBio: string;
    achievements: string;
    imageUrl: string;
    wikipediaUrl: string;
    isPublished: boolean;
}

export default function InducteesAdminPage() {
    const [inductees, setInductees] = useState<Inductee[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingInductee, setEditingInductee] = useState<Inductee | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState<InducteeForm>({
        name: "",
        years: "",
        category: "",
        inductionYear: new Date().getFullYear(),
        shortBio: "",
        fullBio: "",
        achievements: "",
        imageUrl: "",
        wikipediaUrl: "",
        isPublished: true,
    });

    // Fetch inductees on component mount
    useEffect(() => {
        fetchInductees();
    }, []);

    const fetchInductees = async () => {
        try {
            const response = await fetch("/api/inductees");
            const data = await response.json();
            if (Array.isArray(data)) {
                setInductees(data);
            }
        } catch (error) {
            console.error("Error fetching inductees:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredInductees = inductees.filter(ind =>
        ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ind.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openModal = (inductee?: Inductee) => {
        if (inductee) {
            setEditingInductee(inductee);
            setFormData({
                name: inductee.name,
                years: inductee.years,
                category: inductee.category,
                inductionYear: inductee.inductionYear,
                shortBio: inductee.shortBio,
                fullBio: inductee.fullBio,
                achievements: inductee.achievements,
                imageUrl: inductee.imageUrl || "",
                wikipediaUrl: inductee.wikipediaUrl || "",
                isPublished: inductee.isPublished,
            });
        } else {
            setEditingInductee(null);
            setFormData({
                name: "",
                years: "",
                category: "",
                inductionYear: new Date().getFullYear(),
                shortBio: "",
                fullBio: "",
                achievements: "",
                imageUrl: "",
                wikipediaUrl: "",
                isPublished: true,
            });
        }
        setError("");
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!password) {
            setError("Password is required");
            return;
        }

        try {
            const response = await fetch("/api/inductees", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: editingInductee ? "update" : "create",
                    id: editingInductee?.id,
                    password,
                    inductee: {
                        name: formData.name,
                        years: formData.years,
                        category: formData.category,
                        inductionYear: formData.inductionYear,
                        shortBio: formData.shortBio,
                        fullBio: formData.fullBio,
                        achievements: formData.achievements,
                        imageUrl: formData.imageUrl || null,
                        wikipediaUrl: formData.wikipediaUrl || null,
                        isPublished: formData.isPublished,
                    },
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Failed to save inductee");
                return;
            }

            if (data.inductees) {
                setInductees(data.inductees);
            }
            setIsModalOpen(false);
            setPassword("");
        } catch (error) {
            console.error("Error saving inductee:", error);
            setError("Failed to save inductee");
        }
    };

    const handleDelete = async (id: string) => {
        const adminPassword = prompt("Enter admin password to delete:");
        if (!adminPassword) return;

        try {
            const response = await fetch("/api/inductees", {
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
                alert(data.error || "Failed to delete inductee");
                return;
            }

            if (data.inductees) {
                setInductees(data.inductees);
            }
        } catch (error) {
            console.error("Error deleting inductee:", error);
            alert("Failed to delete inductee");
        }
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
                    <h1 className="text-3xl font-bold text-gray-900">Inductees</h1>
                    <p className="text-gray-600 mt-1">Manage Hall of Fame inductee profiles</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Inductee
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm border p-4">
                <div className="relative">
                    <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search inductees..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                    />
                </div>
            </div>

            {/* Inductees Grid */}
            {filteredInductees.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-gray-500 text-lg">No inductees found</p>
                    <p className="text-gray-400">Click "Add Inductee" to add your first inductee</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredInductees.map((inductee) => (
                        <div key={inductee.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-32 bg-gradient-to-br from-[var(--primary-700)] to-[var(--primary-900)] flex items-center justify-center relative">
                                {inductee.imageUrl ? (
                                    <img src={inductee.imageUrl} alt={inductee.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-4xl font-bold text-white/20">{inductee.name.charAt(0)}</span>
                                )}
                                {!inductee.isPublished && (
                                    <span className="absolute top-2 right-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                                        Draft
                                    </span>
                                )}
                            </div>
                            <div className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-gray-900">{inductee.name}</h3>
                                    <span className="px-2 py-1 text-xs rounded-full bg-[var(--primary-100)] text-[var(--primary-700)]">
                                        {inductee.inductionYear}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{inductee.category} • {inductee.years}</p>
                                <p className="text-sm text-gray-600 line-clamp-2">{inductee.shortBio}</p>
                                <div className="flex gap-2 mt-4">
                                    <button
                                        onClick={() => openModal(inductee)}
                                        className="flex-1 px-3 py-1.5 text-sm border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(inductee.id)}
                                        className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingInductee ? "Edit Inductee" : "Add New Inductee"}
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                    {error}
                                </div>
                            )}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Years</label>
                                    <input
                                        type="text"
                                        value={formData.years}
                                        onChange={(e) => setFormData(prev => ({ ...prev, years: e.target.value }))}
                                        placeholder="e.g., 1920-2005"
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    >
                                        <option value="">Select category</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Organization">Organization</option>
                                        <option value="Posthumous">Posthumous</option>
                                        <option value="Historic Figure">Historic Figure</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Induction Year</label>
                                    <input
                                        type="number"
                                        value={formData.inductionYear}
                                        onChange={(e) => setFormData(prev => ({ ...prev, inductionYear: parseInt(e.target.value) }))}
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                    <input
                                        type="text"
                                        value={formData.imageUrl}
                                        onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                                        placeholder="/inductees/name.jpg"
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Wikipedia URL</label>
                                    <input
                                        type="text"
                                        value={formData.wikipediaUrl}
                                        onChange={(e) => setFormData(prev => ({ ...prev, wikipediaUrl: e.target.value }))}
                                        placeholder="https://en.wikipedia.org/wiki/..."
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Achievements</label>
                                <textarea
                                    value={formData.achievements}
                                    onChange={(e) => setFormData(prev => ({ ...prev, achievements: e.target.value }))}
                                    rows={3}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    placeholder="List key achievements..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio</label>
                                <textarea
                                    value={formData.shortBio}
                                    onChange={(e) => setFormData(prev => ({ ...prev, shortBio: e.target.value }))}
                                    rows={2}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Biography</label>
                                <textarea
                                    value={formData.fullBio}
                                    onChange={(e) => setFormData(prev => ({ ...prev, fullBio: e.target.value }))}
                                    rows={6}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="isPublished"
                                    checked={formData.isPublished}
                                    onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                                    className="w-4 h-4 text-[var(--primary-600)] rounded"
                                />
                                <label htmlFor="isPublished" className="text-sm text-gray-700">
                                    Published (visible on website)
                                </label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Admin Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setPassword("");
                                    }}
                                    className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors"
                                >
                                    {editingInductee ? "Save Changes" : "Save Inductee"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

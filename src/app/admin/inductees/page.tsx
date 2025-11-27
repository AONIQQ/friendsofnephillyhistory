"use client";

import { useState } from "react";
import { inductees, type Inductee } from "@/data/inductees";

interface InducteeForm {
    name: string;
    years: string;
    category: Inductee["category"] | "";
    inductionYear: number;
    shortBio: string;
    fullBio: string;
    neighborhood: string;
    achievements: string;
}

export default function InducteesAdminPage() {
    const [localInductees, setLocalInductees] = useState<Inductee[]>(inductees);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [formData, setFormData] = useState<InducteeForm>({
        name: "",
        years: "",
        category: "",
        inductionYear: new Date().getFullYear(),
        shortBio: "",
        fullBio: "",
        neighborhood: "",
        achievements: "",
    });

    const filteredInductees = localInductees.filter(ind => 
        ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ind.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newInductee: Inductee = {
            id: formData.name.toLowerCase().replace(/\s+/g, '-'),
            name: formData.name,
            years: formData.years,
            category: formData.category as Inductee["category"],
            inductionYear: formData.inductionYear,
            shortBio: formData.shortBio,
            fullBio: formData.fullBio,
            achievements: formData.achievements.split('\n').filter(a => a.trim().length > 0),
        };
        
        setLocalInductees([newInductee, ...localInductees]);
        setIsModalOpen(false);
        setFormData({
            name: "",
            years: "",
            category: "",
            inductionYear: new Date().getFullYear(),
            shortBio: "",
            fullBio: "",
            neighborhood: "",
            achievements: "",
        });
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this inductee?")) {
            setLocalInductees(localInductees.filter(ind => ind.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Inductees</h1>
                    <p className="text-gray-600 mt-1">Manage Hall of Fame inductee profiles</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInductees.map((inductee) => (
                    <div key={inductee.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-32 bg-gradient-to-br from-[var(--primary-700)] to-[var(--primary-900)] flex items-center justify-center">
                            <span className="text-4xl font-bold text-white/20">{inductee.name.charAt(0)}</span>
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
                                <button className="flex-1 px-3 py-1.5 text-sm border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
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

            {/* Add/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-900">Add New Inductee</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
                                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as Inductee["category"] | "" }))}
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
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Neighborhood</label>
                                    <input
                                        type="text"
                                        value={formData.neighborhood}
                                        onChange={(e) => setFormData(prev => ({ ...prev, neighborhood: e.target.value }))}
                                        placeholder="e.g., Tacony, Frankford"
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Achievements (one per line)</label>
                                <textarea
                                    value={formData.achievements}
                                    onChange={(e) => setFormData(prev => ({ ...prev, achievements: e.target.value }))}
                                    rows={3}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    placeholder="Founded organization...&#10;Served as president..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio</label>
                                <textarea
                                    value={formData.shortBio}
                                    onChange={(e) => setFormData(prev => ({ ...prev, shortBio: e.target.value }))}
                                    rows={2}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Biography</label>
                                <textarea
                                    value={formData.fullBio}
                                    onChange={(e) => setFormData(prev => ({ ...prev, fullBio: e.target.value }))}
                                    rows={6}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors"
                                >
                                    Save Inductee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

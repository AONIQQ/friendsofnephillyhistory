"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminAuth } from "@/lib/admin-auth";

interface HistoricalSketch {
    id: string;
    title: string;
    description: string;
    pdfUrl?: string | null;
    pdfFilename?: string | null;
    createdAt: string;
}

interface HistoricalSketchForm {
    title: string;
    description: string;
    pdfUrl: string;
}

interface SketchFilePayload {
    name: string;
    type: string;
    data: string;
}

export default function HistoricalSketchesAdminPage() {
    const router = useRouter();
    const [sketches, setSketches] = useState<HistoricalSketch[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSketch, setEditingSketch] = useState<HistoricalSketch | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState<HistoricalSketchForm>({
        title: "",
        description: "",
        pdfUrl: "",
    });

    useEffect(() => {
        if (!adminAuth.isAuthenticated()) {
            router.push("/admin");
            return;
        }

        const load = async () => {
            try {
                const response = await fetch("/api/historical-sketches");
                const data = await response.json();
                if (Array.isArray(data)) {
                    setSketches(data);
                }
            } catch (err) {
                console.error("Error fetching sketches:", err);
            } finally {
                setIsLoading(false);
            }
        };

        load();
    }, [router]);

    const openModal = (sketch?: HistoricalSketch) => {
        if (sketch) {
            setEditingSketch(sketch);
            setFormData({
                title: sketch.title,
                description: sketch.description,
                pdfUrl: sketch.pdfUrl || "",
            });
        } else {
            setEditingSketch(null);
            setFormData({
                title: "",
                description: "",
                pdfUrl: "",
            });
        }
        setSelectedFile(null);
        setError("");
        setIsModalOpen(true);
    };

    const filteredSketches = sketches.filter((sketch) =>
        sketch.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fileToBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                const base64 = result.split(",").pop() || "";
                resolve(base64);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const password = adminAuth.getAuthToken();
        if (!password) {
            setError("Session expired. Please login again.");
            router.push("/admin");
            return;
        }

        try {
            let filePayload: SketchFilePayload | null = null;
            if (selectedFile) {
                const base64 = await fileToBase64(selectedFile);
                filePayload = {
                    name: selectedFile.name,
                    type: selectedFile.type || "application/pdf",
                    data: base64,
                };
            }

            const response = await fetch("/api/historical-sketches", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: editingSketch ? "update" : "create",
                    id: editingSketch?.id,
                    password,
                    sketch: {
                        title: formData.title.trim(),
                        description: formData.description.trim(),
                        pdfUrl: formData.pdfUrl.trim() || null,
                        file: filePayload,
                    },
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Failed to save sketch");
                return;
            }

            if (Array.isArray(data.sketches)) {
                setSketches(data.sketches);
            }
            setIsModalOpen(false);
            setSelectedFile(null);
        } catch (err) {
            console.error("Error saving sketch:", err);
            setError("Failed to save sketch");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this sketch?")) return;

        const password = adminAuth.getAuthToken();
        if (!password) {
            alert("Session expired. Please login again.");
            router.push("/admin");
            return;
        }

        try {
            const response = await fetch("/api/historical-sketches", {
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
                alert(data.error || "Failed to delete sketch");
                return;
            }

            if (Array.isArray(data.sketches)) {
                setSketches(data.sketches);
            }
        } catch (err) {
            console.error("Error deleting sketch:", err);
            alert("Failed to delete sketch");
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-700)]" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Historical Sketches</h1>
                    <p className="text-gray-600 mt-1">Add PDF-based stories that appear on the public page.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Sketch
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-4">
                <div className="relative">
                    <svg
                        className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search sketches..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                    />
                </div>
            </div>

            {filteredSketches.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
                    <p className="text-gray-500 text-lg">No sketches found</p>
                    <p className="text-gray-400">Click &ldquo;Add Sketch&rdquo; to create one.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSketches.map((sketch) => (
                        <div key={sketch.id} className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">{sketch.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Added {new Date(sketch.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            <p className="text-gray-700 line-clamp-3">{sketch.description}</p>
                            <a
                                href={sketch.pdfUrl || `/api/historical-sketches/${sketch.id}/file`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[var(--primary-700)] font-medium hover:underline"
                            >
                                View PDF
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m-7-7L21 10M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
                                </svg>
                            </a>
                            <div className="flex gap-2 pt-2">
                                <button
                                    onClick={() => openModal(sketch)}
                                    className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(sketch.id)}
                                    className="px-4 py-2 text-red-600 border border-red-100 rounded-lg hover:bg-red-50 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-xl w-full">
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingSketch ? "Edit Historical Sketch" : "Add Historical Sketch"}
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                    {error}
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                                    rows={4}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload PDF</label>
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                                    className="w-full border rounded-lg px-3 py-2 text-sm"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Choose a PDF to store in the database. Leave blank to keep the current file or use the URL field below.
                                </p>
                                {editingSketch && (editingSketch.pdfFilename || editingSketch.pdfUrl) && (
                                    <p className="text-xs text-gray-600 mt-1">
                                        Current file: {editingSketch.pdfFilename || editingSketch.pdfUrl}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">PDF URL (optional)</label>
                                <input
                                    type="text"
                                    value={formData.pdfUrl}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, pdfUrl: e.target.value }))}
                                    placeholder="/historicalsketches/document.pdf or https://example.com/file.pdf"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Provide a URL only if you do not upload a file.
                                </p>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setSelectedFile(null);
                                    }}
                                    className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors"
                                >
                                    {editingSketch ? "Save Changes" : "Save Sketch"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}


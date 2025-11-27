"use client";

import { useState } from "react";

interface GalleryImage {
    id: string;
    title: string;
    url: string;
    category: string;
    year: number;
    uploadDate: string;
}

// Mock data
const mockImages: GalleryImage[] = [
    {
        id: "1",
        title: "2012 Induction Ceremony",
        url: "/inductees/2012-ceremony.jpg",
        category: "Ceremony",
        year: 2012,
        uploadDate: "2024-01-15",
    },
    {
        id: "2",
        title: "Thomas Holme Plaque",
        url: "/inductees/thomas-holme.jpg",
        category: "Historical",
        year: 2009,
        uploadDate: "2024-01-15",
    },
    {
        id: "3",
        title: "St. Katharine Drexel",
        url: "/inductees/katharine-drexel.jpg",
        category: "Portrait",
        year: 2009,
        uploadDate: "2024-01-15",
    },
    {
        id: "4",
        title: "Chris Ferguson NASA",
        url: "/inductees/chris-ferguson.jpg",
        category: "Portrait",
        year: 2012,
        uploadDate: "2024-01-15",
    },
];

export default function GalleryAdminPage() {
    const [images, setImages] = useState<GalleryImage[]>(mockImages);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [filter, setFilter] = useState("all");
    const [formData, setFormData] = useState({
        title: "",
        year: new Date().getFullYear(),
        category: "Ceremony"
    });

    const filteredImages = filter === "all" 
        ? images 
        : images.filter(img => img.category.toLowerCase() === filter.toLowerCase());

    const categories = ["Ceremony", "Historical", "Portrait", "Event"];

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this image?")) {
            setImages(prev => prev.filter(img => img.id !== id));
        }
    };

    const handleUpload = () => {
        const newImage: GalleryImage = {
            id: Date.now().toString(),
            title: formData.title,
            year: formData.year,
            category: formData.category,
            url: "/window.svg", // Placeholder
            uploadDate: new Date().toISOString().split('T')[0]
        };
        setImages([newImage, ...images]);
        setIsUploadModalOpen(false);
        setFormData({ title: "", year: new Date().getFullYear(), category: "Ceremony" });
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
                    <p className="text-gray-600 mt-1">Manage photo gallery and media</p>
                </div>
                <button
                    onClick={() => setIsUploadModalOpen(true)}
                    className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Upload Photos
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 border-b pb-4">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        filter === "all"
                            ? "bg-[var(--primary-700)] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    All Photos
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            filter === category
                                ? "bg-[var(--primary-700)] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                    <div key={image.id} className="group relative bg-white rounded-xl shadow-sm border overflow-hidden">
                        <div className="aspect-square bg-gray-100 relative">
                            {/* In a real app, use Next.js Image component */}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            
                            {/* Overlay Actions */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={() => handleDelete(image.id)}
                                    className="p-2 bg-white text-red-600 rounded-full hover:bg-gray-100"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="p-3">
                            <h3 className="font-medium text-gray-900 truncate">{image.title}</h3>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-gray-500">{image.category}</span>
                                <span className="text-xs text-gray-400">{image.year}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Upload Modal */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-lg w-full">
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-900">Upload Photos</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[var(--primary-500)] hover:bg-[var(--primary-50)] transition-colors cursor-pointer">
                                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                <p className="text-gray-900 font-medium">Click to upload or drag and drop</p>
                                <p className="text-gray-500 text-sm mt-1">SVG, PNG, JPG or GIF (max. 10MB)</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input 
                                        type="text" 
                                        value={formData.title}
                                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                                    <input 
                                        type="number" 
                                        value={formData.year}
                                        onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent" 
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select 
                                        value={formData.category}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    >
                                        <option>Ceremony</option>
                                        <option>Historical</option>
                                        <option>Portrait</option>
                                        <option>Event</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={() => setIsUploadModalOpen(false)}
                                    className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleUpload}
                                    className="flex-1 px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors"
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

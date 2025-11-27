"use client";

import { useState } from "react";

interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    type: "ceremony" | "meeting" | "community";
    isPublished: boolean;
}

const mockEvents: Event[] = [
    {
        id: "1",
        title: "2024 Hall of Fame Induction Ceremony",
        date: "2024-10-15",
        time: "6:00 PM",
        location: "Holy Family University",
        description: "Annual induction ceremony honoring Northeast Philadelphia's finest.",
        type: "ceremony",
        isPublished: true,
    },
    {
        id: "2",
        title: "Nomination Committee Meeting",
        date: "2024-08-15",
        time: "7:00 PM",
        location: "Historical Society of Frankford",
        description: "Review and discussion of submitted nominations.",
        type: "meeting",
        isPublished: true,
    },
    {
        id: "3",
        title: "NE Philly History Walking Tour",
        date: "2024-09-21",
        time: "10:00 AM",
        location: "Pennypack Park",
        description: "Explore historic sites including Thomas Holme's burial site.",
        type: "community",
        isPublished: false,
    },
];

const typeColors = {
    ceremony: "bg-[var(--accent-500)] text-[var(--primary-900)]",
    meeting: "bg-[var(--primary-600)] text-white",
    community: "bg-green-100 text-green-700",
};

export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>(mockEvents);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        type: "ceremony" as Event["type"],
        isPublished: true,
    });

    const openModal = (event?: Event) => {
        if (event) {
            setEditingEvent(event);
            setFormData({
                title: event.title,
                date: event.date,
                time: event.time,
                location: event.location,
                description: event.description,
                type: event.type,
                isPublished: event.isPublished,
            });
        } else {
            setEditingEvent(null);
            setFormData({
                title: "",
                date: "",
                time: "",
                location: "",
                description: "",
                type: "ceremony",
                isPublished: true,
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingEvent) {
            setEvents(prev =>
                prev.map(ev =>
                    ev.id === editingEvent.id
                        ? { ...ev, ...formData }
                        : ev
                )
            );
        } else {
            const newEvent: Event = {
                id: Date.now().toString(),
                ...formData,
            };
            setEvents(prev => [newEvent, ...prev]);
        }
        setIsModalOpen(false);
    };

    const deleteEvent = (id: string) => {
        if (confirm("Are you sure you want to delete this event?")) {
            setEvents(prev => prev.filter(ev => ev.id !== id));
        }
    };

    const togglePublish = (id: string) => {
        setEvents(prev =>
            prev.map(ev =>
                ev.id === id ? { ...ev, isPublished: !ev.isPublished } : ev
            )
        );
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Events</h1>
                    <p className="text-gray-600 mt-1">Manage ceremonies, meetings, and community events</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="px-4 py-2 bg-[var(--primary-700)] text-white rounded-lg hover:bg-[var(--primary-600)] transition-colors flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Event
                </button>
            </div>

            {/* Events List */}
            <div className="bg-white rounded-xl shadow-sm border">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Event</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Date & Time</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Location</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Type</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {events.map((event) => (
                                <tr key={event.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{event.title}</p>
                                            <p className="text-sm text-gray-500 line-clamp-1">{event.description}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-900">{new Date(event.date).toLocaleDateString()}</p>
                                        <p className="text-sm text-gray-500">{event.time}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">{event.location}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded-full ${typeColors[event.type]}`}>
                                            {event.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => togglePublish(event.id)}
                                            className={`px-2 py-1 text-xs rounded-full ${
                                                event.isPublished
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-gray-100 text-gray-600"
                                            }`}
                                        >
                                            {event.isPublished ? "Published" : "Draft"}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => openModal(event)}
                                                className="p-2 text-gray-600 hover:text-[var(--primary-700)] hover:bg-gray-100 rounded-lg transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => deleteEvent(event.id)}
                                                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingEvent ? "Edit Event" : "Add New Event"}
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                    <input
                                        type="text"
                                        value={formData.time}
                                        onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                                        placeholder="e.g., 6:00 PM"
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                    rows={3}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as Event["type"] }))}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                                >
                                    <option value="ceremony">Induction Ceremony</option>
                                    <option value="meeting">Meeting</option>
                                    <option value="community">Community Event</option>
                                </select>
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
                                    Publish immediately
                                </label>
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
                                    {editingEvent ? "Save Changes" : "Create Event"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

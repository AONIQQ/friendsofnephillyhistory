"use client";

import { motion } from "framer-motion";

interface EventCardProps {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    month: string;
    day: string;
    index?: number;
}

export function EventCard({ title, date, time, location, description, month, day, index = 0 }: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-premium border-gold group hover:scale-[1.02] transition-transform duration-300"
        >
            <div className="flex flex-col sm:flex-row gap-6 p-6">
                {/* Date Badge */}
                <div className="flex-shrink-0 self-start">
                    <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-4 text-center min-w-[80px] shadow-lg border-2 border-gold-500">
                        <div className="text-gold-400 text-sm font-bold uppercase tracking-wider">{month}</div>
                        <div className="text-white text-3xl font-bold font-heading mt-1">{day}</div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 font-heading group-hover:text-navy-800 transition-colors">
                        {title}
                    </h3>

                    <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-slate-600">
                            <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-semibold">{date}</span>
                            <span className="text-slate-400">•</span>
                            <span>{time}</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-600">
                            <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{location}</span>
                        </div>
                    </div>

                    <p className="text-slate-700 leading-relaxed">{description}</p>

                    {/* Decorative Element */}
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>
        </motion.div>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Video, FileText, Sparkles, ChevronDown } from "lucide-react";
import * as React from "react";

const bookingOptions = [
    {
        value: "free-consultation",
        label: "Free Consultation",
        description: "30-min discovery call",
        icon: Sparkles,
    },
    {
        value: "design-consultation",
        label: "Design Consultation",
        description: "1-hour paid design session",
        icon: Calendar,
    },
    {
        value: "project-quote",
        label: "Project Quote",
        description: "Full project estimate",
        icon: FileText,
    },
    {
        value: "virtual-walkthrough",
        label: "Virtual Walkthrough",
        description: "Remote video consultation",
        icon: Video,
    },
];

interface ContactFormProps {
    variant?: "light" | "dark";
}

const renovationOptions = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "remodel", label: "Remodel" },
    { value: "new-build", label: "New Build" },
];

export function ContactForm({ variant = "light" }: ContactFormProps) {
    const [selectedBooking, setSelectedBooking] = React.useState("");
    const [selectedRenovation, setSelectedRenovation] = React.useState("");
    const [isSelectOpen, setIsSelectOpen] = React.useState(false);
    const selectRef = React.useRef<HTMLDivElement>(null);

    const isDark = variant === "dark";
    const bgClass = isDark ? "bg-white/5 backdrop-blur-xl border-white/10" : "bg-[#F9F9F9] border-black/5";
    const inputBgClass = isDark ? "bg-white/10 border-white/10 text-white placeholder:text-white/40" : "bg-white border-black/5";
    const labelClass = isDark ? "text-white/60" : "text-[#1A1A1A]/60";
    const buttonClass = isDark
        ? "bg-white text-secondary hover:bg-accent hover:text-white"
        : "bg-[#1A1A1A] text-white hover:bg-accent";

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsSelectOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${bgClass} p-8 md:p-12 rounded-[3rem] shadow-sm border`}
        >
            <form className="space-y-6">
                {/* Booking Type Selection */}
                <div className="space-y-4">
                    <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                        Select Consultation Type <span className="text-accent">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bookingOptions.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => setSelectedBooking(option.value)}
                                className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${selectedBooking === option.value
                                        ? isDark
                                            ? "border-accent bg-accent/10"
                                            : "border-accent bg-accent/5"
                                        : isDark
                                            ? "border-white/10 hover:border-white/20 bg-white/5"
                                            : "border-black/5 hover:border-accent/30 bg-white"
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg ${selectedBooking === option.value ? "bg-accent" : isDark ? "bg-white/10" : "bg-accent/10"}`}>
                                        <option.icon className={`w-4 h-4 ${selectedBooking === option.value ? "text-white" : "text-accent"}`} />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-semibold text-sm ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>
                                            {option.label}
                                        </p>
                                        <p className={`text-xs ${isDark ? "text-white/50" : "text-[#1A1A1A]/50"}`}>
                                            {option.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                        Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Jane Smith"
                        className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all`}
                        required
                    />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                            Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="jane@example.com"
                            className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all`}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass}`}>
                            Phone Number (optional)
                        </label>
                        <input
                            type="tel"
                            placeholder="+1 (951) 239-0523"
                            className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all`}
                        />
                    </div>
                </div>

                {/* Location & Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                            Project Location <span className="text-accent">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="California"
                            className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all`}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                            Type of Renovation <span className="text-accent">*</span>
                        </label>
                        <div className="relative" ref={selectRef}>
                            <button
                                type="button"
                                onClick={() => setIsSelectOpen(!isSelectOpen)}
                                className={`w-full ${inputBgClass} border-2 rounded-xl px-5 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 cursor-pointer hover:border-accent/30 text-left ${selectedRenovation ? (isDark ? "text-white border-white/20" : "text-[#1A1A1A] border-black/10") : (isDark ? "text-white/40 border-white/10" : "text-[#1A1A1A]/40 border-black/5")}`}
                            >
                                <span>{selectedRenovation ? renovationOptions.find(opt => opt.value === selectedRenovation)?.label : "Select..."}</span>
                            </button>
                            <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center transition-colors duration-200 ${isDark ? "text-white/50" : "text-[#1A1A1A]/50"}`}>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSelectOpen ? "rotate-180" : ""}`} strokeWidth={2.5} />
                            </div>
                            
                            <AnimatePresence>
                                {isSelectOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className={`absolute z-50 w-full mt-2 ${isDark ? "bg-background border-white/10" : "bg-white border-black/5"} border-2 rounded-xl shadow-lg overflow-hidden`}
                                    >
                                        {renovationOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedRenovation(option.value);
                                                    setIsSelectOpen(false);
                                                }}
                                                className={`w-full px-5 py-2 text-left transition-all duration-200 border-b last:border-b-0 ${
                                                    selectedRenovation === option.value
                                                        ? isDark
                                                            ? "bg-accent/20 text-accent border-accent/20"
                                                            : "bg-accent/10 text-accent border-accent/20"
                                                        : isDark
                                                            ? "text-white hover:bg-white/5 border-white/10"
                                                            : "text-[#1A1A1A] hover:bg-black/5 border-black/5"
                                                }`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass}`}>
                        Message / Project Brief
                    </label>
                    <textarea
                        placeholder="Tell us about your project vision..."
                        rows={4}
                        className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none`}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`group flex items-center gap-4 ${buttonClass} pl-8 pr-2 py-2 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 w-full justify-center md:w-auto`}
                >
                    Request Free Quote
                    <div className="bg-accent rounded-full p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                        <ArrowRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-accent" />
                    </div>
                </button>
            </form>
        </motion.div>
    );
}

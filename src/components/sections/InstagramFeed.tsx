"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { ExpandableButton } from "@/components/ui/expandable-button";

const reelIds = [
    "DPictttjH0A",
    "DOVL3sODSeY",
    "DS2LHAJDcoQ",
    "DSw-SeejQFH"
];

export function InstagramFeed() {
    return (
        <section className="py-24 md:py-32 bg-white px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px]"
                        >
                            <Instagram className="w-3.5 h-3.5" />
                            Social Feed
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-[40px] leading-tight md:leading-[48px] font-geist! font-medium tracking-tight text-[#1A1A1A]">
                            Follow the <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Journey</span>
                        </h2>
                    </div>

                    <div className="text-left md:text-right space-y-2">
                        <p className="text-[#1A1A1A]/60 text-sm font-medium">
                            TR Investments & Construction • Architectural Design & Construction
                        </p>
                        <p className="text-[#1A1A1A]/40 text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
                            @tr_investbuild on Instagram & Threads
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {reelIds.map((id, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative aspect-9/16 rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-100"
                        >
                            <iframe
                                src={`https://www.instagram.com/reel/${id}/embed/`}
                                className="w-full h-full absolute inset-0"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Group */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <ExpandableButton
                        href="https://instagram.com/tr_investbuild"
                        label="Follow on Instagram"
                        variant="secondary"
                        className="pl-8 pr-2 py-2 text-lg"
                    />
                </div>
            </div>
        </section>
    );
}

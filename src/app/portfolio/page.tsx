"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Residential", "Commercial", "Renovation"];

const projects = [
    {
        id: "modern-coastal-retreat",
        title: "Modern Coastal Retreat",
        location: "Malibu, California",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "downtown-penthouse",
        title: "Downtown Penthouse Transformation",
        location: "San Francisco, California",
        category: "Luxury Apartment",
        image: "https://images.unsplash.com/photo-1600607687940-c52af0424225?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "silicon-valley-smart-home",
        title: "Silicon Valley Smart Home",
        location: "Palo Alto, California",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "beverly-hills-luxury",
        title: "Beverly Hills Luxury Residence",
        location: "Beverly Hills, California",
        category: "Residential Renovation",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "santa-monica-studio",
        title: "Santa Monica Creative Studio",
        location: "Santa Monica, California",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "sonoma-valley-vineyard",
        title: "Sonoma Valley Vineyard Retreat",
        location: "Sonoma Valley, California",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
    },
];

export default function PortfolioPage() {
    const [filter, setFilter] = React.useState("All");

    const filteredProjects = projects.filter(
        (p) => filter === "All" || p.category.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="bg-background text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] py-24 md:py-0 w-full overflow-hidden flex items-center">
                {/* Background Image with Parallax */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${IMAGES.portfolio[0]})` }}
                    />
                    <div className="absolute inset-0 bg-black/75" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10 relative z-10 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 backdrop-blur-md text-accent uppercase tracking-[0.2em] font-bold text-[10px] rounded-full px-4 py-1.5 justify-center mx-auto">
                            Portfolio
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-geist! font-semibold text-white leading-[1.1] tracking-tight">
                            Showcase of <br />
                            <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Our Work</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto space-y-20 py-24 px-6 lg:px-12">

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-black/5 pb-8">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 relative py-2",
                                filter === cat ? "text-accent" : "text-white/40 hover:text-white"
                            )}
                        >
                            {cat}
                            {filter === cat && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-accent"
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Structured Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <Link key={project.id} href={`/portfolio/${project.id}`}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative aspect-3/4 rounded-[2.5rem] overflow-hidden cursor-pointer bg-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                    {/* Category Badge - Top Right */}
                                    <div className="absolute top-6 right-6">
                                        <div className="bg-accent text-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Content - Bottom Left */}
                                    <div className="absolute bottom-10 left-10 right-10 space-y-3">
                                        <h3 className="text-2xl md:text-3xl font-geist! font-medium text-white leading-tight tracking-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <MapPin className="w-4 h-4 text-accent" />
                                            <span className="text-sm font-medium tracking-wide">
                                                {project.location}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}

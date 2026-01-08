"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { Award, Target, Heart, Eye, Quote, ChevronRight, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { VideoSection } from "@/components/sections/VideoSection";
import ceo from "../../../public/image/trinvest.png";

const philosophy = [
    {
        title: "Vision",
        description: "We see beyond the current state to unlock the full potential of every property and land investment.",
        icon: Eye,
    },
    {
        title: "Expertise",
        description: "10+ years of architectural design experience combined with construction management expertise.",
        icon: Award,
    },
    {
        title: "Value Creation",
        description: "Every project is designed to maximize property value and investment returns for developers and investors.",
        icon: Heart,
    },
    {
        title: "Excellence",
        description: "Committing to the highest standards across all our international projects, from concept to completion.",
        icon: Target,
    },
];

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div className="bg-background text-white min-h-screen overflow-x-hidden" ref={containerRef}>
            {/* Hero Section */}
            <section className="relative min-h-screen py-24 md:py-32 w-full overflow-hidden flex items-center">
                {/* Background Image with Parallax */}
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 200]) }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${IMAGES.hero})` }}
                    />
                    <div className="absolute inset-0 bg-black/75" />
                </motion.div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 backdrop-blur-md text-accent uppercase tracking-[0.2em] font-bold text-[10px] rounded-full px-4 py-1.5">
                                The Studio
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-geist! font-semibold text-white leading-[1.1] tracking-tight">
                                About <span className="text-accent italic underline decoration-accent/20 underline-offset-8">TR</span> <br />
                                InvestBuild
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-8 text-white/70 text-lg md:text-xl leading-relaxed font-normal max-w-xl"
                        >
                            <p className="font-geist!">
                                I'm an Architectural Designer with over 10+ years of industry experience, with a background in construction management. I started TR Investments & Construction to help investors & developers unlock land and property potential.
                            </p>
                            <p className="font-geist!">
                                Based in Toronto but working worldwide, we combine architectural design expertise with construction management to transform properties into valuable investments.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex"
                        >
                            <Link
                                href="/portfolio"
                                className="group flex items-center gap-5 bg-white text-secondary pl-8 pr-2 py-2 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl active:scale-95"
                            >
                                View Our Work
                                <div className="bg-accent rounded-full p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                                    <ChevronRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-accent" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl border border-white/10 group">
                            <Image
                                src={ceo}
                                alt="Our Founder"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-accent font-bold mb-1">Founder & Architectural Designer</p>
                                    <p className="text-xl font-geist! font-medium text-white">TR Investments & Construction</p>
                                </div>
                                <div className="p-3 bg-white/10 rounded-full border border-white/10">
                                    <Award className="w-6 h-6 text-accent" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Owner Video Section */}
            <VideoSection videoId={3} />

            <AwardsSection />

            {/* Philosophy Section */}
            <section className="py-32 px-6 lg:px-12 bg-[#FDF8F1] relative">
                <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <span className="text-accent uppercase tracking-[0.4em] font-bold text-[10px]">Our Values</span>
                        <h2 className="text-4xl md:text-6xl font-geist! font-semibold tracking-tight text-secondary">Design <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Philosophy</span></h2>
                        <p className="text-secondary/60 text-lg md:text-xl font-geist!">
                            We believe in unlocking the full potential of every property through expert architectural design and construction management, creating value for investors and developers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {philosophy.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 bg-white shadow-sm border border-black/5 rounded-[2.5rem] hover:shadow-xl hover:border-accent/20 transition-all duration-500 group"
                            >
                                <div className="inline-flex p-5 rounded-2xl bg-accent/10 border border-accent/20 mb-8 group-hover:scale-110 group-hover:bg-accent transition-all duration-500 text-accent group-hover:text-white">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-geist! font-semibold mb-4 text-secondary uppercase tracking-tight">{item.title}</h3>
                                <p className="text-secondary/60 text-base leading-relaxed font-geist!">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-40 px-6 lg:px-12 relative overflow-hidden bg-background">
                {/* Background Parallax Image */}
                <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-700">
                    <Image
                        src={IMAGES.service}
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background z-1" />

                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Quote className="w-20 h-20 text-accent/30 mx-auto mb-8" strokeWidth={1} />
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-geist! font-medium italic text-white leading-tight">
                            "Design is not just what it looks like and feels like. Design is how it works and how it reflects the soul of those who inhabit it."
                        </h3>
                        <div className="mt-12 space-y-2">
                            <p className="text-accent text-xl uppercase tracking-[0.3em] font-black">TR Investments & Construction</p>
                            <p className="text-white/40 text-sm uppercase tracking-widest">Architectural Design & Construction Management</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-black/5" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12 order-2 lg:order-1 text-secondary">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <span className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 backdrop-blur-md text-accent uppercase tracking-[0.2em] font-bold text-[10px] rounded-full px-4 py-1.5">
                                Our Track Record
                            </span>
                            <h2 className="text-4xl md:text-6xl font-geist! font-semibold leading-tight tracking-tight">
                                10+ Years of <br />
                                <span className="text-accent italic">Worldwide Expertise</span>
                            </h2>
                            <div className="space-y-8 text-secondary/60 text-lg font-geist! leading-relaxed">
                                <p>
                                    With over 10+ years of industry experience and a background in construction management, we specialize in helping investors and developers unlock the full potential of their land and properties.
                                </p>
                                <p>
                                    Our unique combination of architectural design expertise and construction management allows us to deliver projects that maximize value while maintaining the highest standards of quality and design.
                                </p>

                                <div className="grid grid-cols-2 gap-10 pt-4">
                                    <div className="space-y-2 group">
                                        <p className="text-5xl md:text-6xl font-geist! font-bold text-secondary group-hover:text-accent transition-colors">50+</p>
                                        <p className="text-[10px] uppercase tracking-widest font-black text-accent/60 flex items-center gap-2">
                                            <Globe className="w-3 h-3" />
                                            Projects Completed
                                        </p>
                                    </div>
                                    <div className="space-y-2 group">
                                        <p className="text-5xl md:text-6xl font-geist! font-bold text-secondary group-hover:text-accent transition-colors">15+</p>
                                        <p className="text-[10px] uppercase tracking-widest font-black text-accent/60 flex items-center gap-2">
                                            <MapPin className="w-3 h-3" />
                                            Cities Worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative aspect-4/3 rounded-[2.5rem] overflow-hidden group shadow-2xl border border-black/5"
                    >
                        <Image
                            src={IMAGES.service}
                            alt="Studio work"
                            fill
                            className="object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 mix-blend-overlay" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

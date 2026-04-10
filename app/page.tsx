"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import profileData from "../data/profile.json";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function ProfilePhoto({ className }: { className?: string }) {
    return (
        <div
            className={clsx(
                "relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 to-primary/20 rounded-full blur-3xl transform rotate-6 scale-110 -z-10" />
            <div className="w-full h-full rounded-full bg-white border-[6px] border-primary shadow-2xl overflow-hidden relative">
                <Image
                    src={profileData.avatar}
                    alt={profileData.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 14rem, (max-width: 768px) 16rem, 20rem"
                />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-orange rounded-full border-4 border-white flex items-center justify-center shadow-lg transform rotate-12">
                <div className="text-white font-bold text-xl leading-none">I</div>
            </div>
        </div>
    );
}

export default function Home() {
    const primaryEmail = profileData.email.split(";")[0]?.trim();

    return (
        <div className="space-y-16 relative">
            <div className="absolute top-0 -left-1/4 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] -z-20 opacity-50" />
            <div className="absolute top-40 -right-1/4 w-full h-[500px] bg-orange/5 rounded-full blur-[120px] -z-20 opacity-50" />
            
            <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] md:grid-rows-[auto_auto_auto] gap-y-6 gap-x-10 md:gap-x-16 pt-10">
                <div className="space-y-4 md:col-start-1 md:row-start-1 min-w-0">
                    <div>
                        <h2 className="text-xl font-bold text-orange tracking-widest uppercase mb-1">Portfolio</h2>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-underline decoration-orange underline-offset-8">
                            {profileData.name}
                        </h1>
                    </div>
                    <p className="text-2xl text-text-secondary font-medium italic">
                        {profileData.title}
                        {profileData.department ? ` · ${profileData.department}` : ""}
                    </p>
                    <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-sm font-bold border border-primary/10">
                        {profileData.affiliation}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex justify-center w-full pt-8 md:pt-0 md:col-start-2 md:row-start-1 md:row-span-3 md:self-center"
                >
                    <ProfilePhoto />
                </motion.div>

                <p className="text-xl text-text-primary leading-relaxed max-w-2xl md:col-start-1 md:row-start-2 min-w-0 font-light">
                    {profileData.bio}
                </p>

                <div className="flex flex-wrap gap-4 pt-4 md:col-start-1 md:row-start-3 md:pt-0">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-xl font-bold hover:bg-orange/90 transition-all shadow-lg hover:shadow-orange/20 transform hover:-translate-y-0.5 group"
                    >
                        Ongoing Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    {profileData.social.scholar && (
                        <a
                            href={profileData.social.scholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md"
                        >
                            <FileText size={18} />
                            Scholar
                        </a>
                    )}
                    
                    {primaryEmail && (
                        <a
                            href={`mailto:${primaryEmail}`}
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary border-2 border-primary/10 rounded-xl font-bold hover:bg-primary/5 transition-all"
                        >
                            <Mail size={18} />
                            Email
                        </a>
                    )}
                </div>
            </section>
        </div>
    );
}
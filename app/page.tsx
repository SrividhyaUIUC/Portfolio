"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import profileData from "../data/profile.json";
import { ArrowRight, FileText, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function ProfilePhoto({ className }: { className?: string }) {
    return (
        <div
            className={clsx(
                "relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-200 rounded-full blur-2xl transform rotate-6 scale-110 -z-10" />
            <div className="w-full h-full rounded-full bg-white border-4 border-white shadow-2xl overflow-hidden relative">
                <Image
                    src={profileData.avatar}
                    alt={profileData.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 14rem, (max-width: 768px) 16rem, 20rem"
                />
            </div>
        </div>
    );
}

export default function Home() {
    const primaryEmail = profileData.email.split(";")[0]?.trim();

    return (
        <div className="space-y-16">
            {/* Single profile image in the DOM (avoids duplicate next/image + priority issues). Grid: mobile = name ? photo ? bio ? actions; md = text column | photo spanning rows. */}
            <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] md:grid-rows-[auto_auto_auto] gap-y-6 gap-x-10 md:gap-x-16 pt-10">
                <div className="space-y-2 md:col-start-1 md:row-start-1 min-w-0">
                    <h2 className="text-xl font-medium text-accent">Hello, I'm</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
                        {profileData.name}
                    </h1>
                    <p className="text-xl text-text-secondary font-light">
                        {profileData.title} at {profileData.affiliation}
                    </p>
                </div>

                <motion.div
                    initial={false}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center w-full pt-2 md:pt-0 md:col-start-2 md:row-start-1 md:row-span-3 md:self-center"
                >
                    <ProfilePhoto />
                </motion.div>

                <p className="text-lg text-text-secondary leading-relaxed max-w-2xl md:col-start-1 md:row-start-2 min-w-0">
                    {profileData.bio}
                </p>

                <div className="flex flex-wrap gap-4 pt-4 md:col-start-1 md:row-start-3 md:pt-0">
                    <a
                        href={profileData.social.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <FileText size={18} />
                        Google Scholar
                    </a>
                    <a
                        href={profileData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-text-primary border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                    >
                        <Linkedin size={18} />
                        LinkedIn
                    </a>
                    {primaryEmail && (
                        <a
                            href={`mailto:${primaryEmail}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-text-primary border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                        >
                            <Mail size={18} />
                            {primaryEmail}
                        </a>
                    )}
                    <Link
                        href="/publications"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-accent hover:text-blue-600 font-medium transition-colors group"
                    >
                        View Publications
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Featured / Quick Links area could go here */}
        </div>
    );
}
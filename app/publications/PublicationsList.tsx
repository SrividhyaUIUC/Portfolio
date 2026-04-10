"use client";

import { useState } from "react";
import type { Publication } from "../lib/publication";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

export default function PublicationsList({ publications }: { publications: Publication[] }) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (slug: string) => {
        setExpandedId(expandedId === slug ? null : slug);
    };

    return (
        <div className="space-y-6">
            {publications.map((pub, index) => (
                <motion.div
                    key={pub.slug || index}
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="content-card overflow-hidden transition-shadow hover:shadow-md"
                >
                    <div
                        className={clsx("p-6 hover:bg-primary/5 transition-colors group", pub.abstract && pub.slug && "cursor-pointer")}
                        onClick={() => pub.abstract && pub.slug && toggleExpand(pub.slug)}
                        role={pub.abstract ? "button" : undefined}
                        tabIndex={pub.abstract ? 0 : undefined}
                        onKeyDown={(e) => {
                            if (!pub.abstract || !pub.slug) return;
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                toggleExpand(pub.slug);
                            }
                        }}
                    >
                        <div className="flex justify-between items-start gap-4">
                            <div className="min-w-0 flex-1 space-y-2">
                                <h2 className="text-xl font-bold leading-tight text-primary group-hover:text-orange transition-colors">
                                    {pub.title}
                                </h2>
                                <p className="text-base leading-snug text-text-primary/70">
                                    {pub.authors}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 gap-y-1 text-sm text-gray">
                                    <span className="rounded-md bg-accent-blue/10 px-2 py-0.5 font-bold tabular-nums text-accent-blue border border-accent-blue/20">
                                        {pub.year}
                                    </span>
                                    <span className="font-semibold text-primary/60 italic">{pub.venue}</span>
                                    {pub.abstract ? (
                                        <span className="flex items-center gap-1 text-xs font-bold text-orange">
                                            {expandedId === pub.slug ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                            {expandedId === pub.slug ? "HIDE ABSTRACT" : "ABSTRACT"}
                                        </span>
                                    ) : null}
                                </div>
                            </div>

                            {pub.link && (
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl p-2.5 bg-primary/5 text-primary transition-all hover:bg-orange hover:text-white shadow-sm"
                                    title="View Paper"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={22} />
                                </a>
                            )}
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedId === pub.slug && pub.abstract && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="border-t border-primary/5 bg-primary/5"
                            >
                                <div className="p-6 pt-3 text-sm leading-relaxed text-text-primary/90 font-light">
                                    <p>{pub.abstract}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}

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
                        className={clsx("p-6", pub.abstract && pub.slug && "cursor-pointer")}
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
                                <h2 className="text-lg font-semibold leading-tight text-slate-900">
                                    {pub.title}
                                </h2>
                                <p className="text-sm leading-snug text-slate-700">
                                    {pub.authors}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 gap-y-1 text-sm text-slate-600">
                                    <span className="rounded-md bg-blue-100 px-2 py-0.5 font-semibold tabular-nums text-blue-950">
                                        {pub.year}
                                    </span>
                                    <span className="text-slate-700">{pub.venue}</span>
                                    {pub.abstract ? (
                                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600">
                                            {expandedId === pub.slug ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                            {expandedId === pub.slug ? "Hide abstract" : "Abstract"}
                                        </span>
                                    ) : null}
                                </div>
                            </div>

                            {pub.link && (
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600"
                                    title="View Paper"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={20} />
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
                                className="border-t border-blue-100 bg-blue-100/50"
                            >
                                <div className="p-6 pt-3 text-sm leading-relaxed text-slate-800">
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

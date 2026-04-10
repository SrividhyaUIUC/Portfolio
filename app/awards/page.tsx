"use client";

import awardsData from "../../data/awards.json";
import { ExternalLink } from "lucide-react";

export default function Awards() {
    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-primary">Awards & Recognitions</h1>
                <p className="text-text-secondary">
                    Select highlights of academic achievements, presentations, and fellowships—editable in <code className="text-sm bg-slate-100 px-1 rounded">data/awards.json</code>.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awardsData.map((award, index) => (
                    <div
                        key={index}
                        className="content-card flex flex-col overflow-hidden group"
                    >
                        <div className="h-2 bg-gradient-to-r from-accent-teal to-primary transition-all group-hover:h-3" />

                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-2">
                                <span className="inline-block rounded-lg bg-accent-teal/10 px-2.5 py-1 text-xs font-bold text-accent-teal border border-accent-teal/20">
                                    {award.year}
                                </span>
                            </div>
                            
                            <h2 className="mb-3 text-2xl font-bold leading-tight text-primary group-hover:text-accent-teal transition-colors">
                                {award.title}
                            </h2>

                            <p className="mb-6 flex-1 text-base leading-relaxed text-text-primary/80 font-normal">
                                {award.description}
                            </p>

                            {award.links && award.links.length > 0 && (
                                <div className="mt-auto flex flex-wrap gap-3 border-t border-primary/5 pt-4">
                                    {award.links.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary/60 transition-colors hover:text-orange"
                                        >
                                            <ExternalLink size={16} />
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

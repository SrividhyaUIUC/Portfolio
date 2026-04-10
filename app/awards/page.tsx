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
                        className="content-card flex flex-col overflow-hidden transition-shadow hover:shadow-md"
                    >
                        <div className="h-1.5 bg-gradient-to-r from-amber-400 to-orange-500" />

                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-2">
                                <span className="inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800">
                                    {award.year}
                                </span>
                            </div>
                            
                            <h2 className="mb-3 text-xl font-bold leading-snug text-slate-900">
                                {award.title}
                            </h2>

                            <p className="mb-6 flex-1 text-base leading-relaxed text-slate-700">
                                {award.description}
                            </p>

                            {award.links && award.links.length > 0 && (
                                <div className="mt-auto flex flex-wrap gap-3 border-t border-slate-100 pt-4">
                                    {award.links.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
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

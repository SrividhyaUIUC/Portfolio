"use client";

import projectsData from "../../data/projects.json";
import { ExternalLink } from "lucide-react";

export default function Projects() {
    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-primary">Projects & Research</h1>
                <p className="text-text-secondary">
                    These projects are currently in progress, with most of the experiments done and manuscript being written and will be published soon!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="content-card flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md"
                    >
                        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />

                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex items-start justify-between gap-3">
                                <h2 className="text-xl font-bold leading-snug text-slate-900">
                                    {project.title}
                                </h2>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 text-slate-500 transition-colors hover:text-blue-600"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>

                            <p className="mb-6 flex-1 text-base leading-relaxed text-slate-700">
                                {project.description}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

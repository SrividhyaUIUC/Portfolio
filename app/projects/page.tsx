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
                        className="content-card flex h-full flex-col overflow-hidden group"
                    >
                        <div className="h-2 bg-gradient-to-r from-accent-light-orange to-accent-yellow transition-all group-hover:h-3" />

                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex items-start justify-between gap-3">
                                <h2 className="text-2xl font-bold leading-tight text-primary group-hover:text-orange transition-colors">
                                    {project.title}
                                </h2>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 p-2 rounded-lg bg-primary/5 text-primary transition-all hover:bg-orange hover:text-white"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>

                            <p className="mb-6 flex-1 text-base leading-relaxed text-text-primary/80 font-normal">
                                {project.description}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-lg bg-accent-yellow/30 px-2.5 py-1 text-xs font-bold text-primary border border-accent-yellow/50"
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

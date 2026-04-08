import fs from "fs";
import path from "path";
import { parseBibTeX } from "./bibtexParser";
import type { Publication } from "./publication";

export type { Publication };

const bibFilePath = path.join(process.cwd(), "data/publications/mypubs.bib");

export function getPublications(): Publication[] {
    try {
        if (!fs.existsSync(bibFilePath)) {
            console.warn("mypubs.bib not found");
            return [];
        }

        const fileContents = fs.readFileSync(bibFilePath, "utf8");
        const entries = parseBibTeX(fileContents);

        const publications: Publication[] = entries.map((entry) => {
            let link = entry.url;
            if (!link && entry.doi) {
                link = `https://doi.org/${entry.doi}`;
            }

            const venue =
                entry.journal || entry.booktitle || entry.school || entry.publisher || entry.type || "N/A";

            return {
                slug: entry.citationKey,
                title: entry.title || "Untitled",
                authors: entry.author || "Unknown Author",
                venue: venue,
                year: entry.year || "n.d.",
                link: link,
                abstract: entry.abstract,
                type: entry.entryType,
            };
        });

        return publications
            .filter((p) => p.title !== "Untitled")
            .sort((a, b) => {
                const yearA = parseInt(a.year) || 0;
                const yearB = parseInt(b.year) || 0;
                if (yearA < yearB) return 1;
                if (yearA > yearB) return -1;
                return 0;
            });
    } catch (err) {
        console.error("getPublications failed:", err);
        return [];
    }
}

import { getPublications } from "../lib/publications";
import PublicationsList from "./PublicationsList";

export default function PublicationsPage() {
    const publications = getPublications();

    return (
        <div className="space-y-10 max-w-4xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-primary">Publications</h1>
                <p className="text-text-secondary">
                    Publications, preprints, and presentations from BibTeX (<code className="text-sm bg-slate-100 px-1 rounded">data/publications/mypubs.bib</code>
                    ). Entries with an abstract can be expanded.
                </p>
            </div>

            <PublicationsList publications={publications} />
        </div>
    );
}

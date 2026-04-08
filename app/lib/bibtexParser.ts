/**
 * Robust BibTeX parser using character iteration/stack instead of Regex for fields.
 */

export interface BibEntry {
    citationKey: string;
    entryType: string;
    [key: string]: string;
}

export function parseBibTeX(bibtex: string): BibEntry[] {
    const entries: BibEntry[] = [];

    let i = 0;
    const len = bibtex.length;

    // Helper to skip whitespace
    function skipWhitespace() {
        while (i < len && /\s/.test(bibtex[i])) i++;
    }

    // Helper to match specific char
    function match(char: string): boolean {
        if (i < len && bibtex[i] === char) {
            i++;
            return true;
        }
        return false;
    }

    while (i < len) {
        skipWhitespace();

        if (bibtex[i] !== '@') {
            i++;
            continue;
        }

        // Found @
        i++;

        // Read entry type
        let typeStart = i;
        while (i < len && /[a-zA-Z]/.test(bibtex[i])) i++;
        const entryType = bibtex.substring(typeStart, i).toLowerCase();

        skipWhitespace();

        // Entry body start
        if (!match('{')) {
            // Maybe comment or preamble without braces? Skip for now.
            continue;
        }

        // Read Citation Key
        skipWhitespace();
        let keyStart = i;
        while (i < len && bibtex[i] !== ',' && bibtex[i] !== '}') i++;
        const citationKey = bibtex.substring(keyStart, i).trim();

        const entry: BibEntry = {
            citationKey,
            entryType,
        };

        if (match(',')) {
            // Parse Fields
            while (i < len) {
                skipWhitespace();

                // Check for end of entry
                if (bibtex[i] === '}') {
                    i++;
                    break;
                }

                // Read Field Name
                let fieldNameStart = i;
                while (i < len && /[a-zA-Z0-9_\-\.]/.test(bibtex[i])) i++;
                const fieldName = bibtex.substring(fieldNameStart, i).toLowerCase();

                skipWhitespace();

                // Expect =
                if (!match('=')) {
                    // If no =, maybe we hit end or something invalid, skip to next comma or close brace
                    while (i < len && bibtex[i] !== ',' && bibtex[i] !== '}') i++;
                    if (match(',')) continue;
                    if (bibtex[i] === '}') { i++; break; }
                }

                skipWhitespace();

                // Read Field Value
                let fieldValue = "";

                if (match('{')) {
                    // Braced value: handle nesting
                    const start = i;
                    let braceDepth = 1;
                    while (i < len && braceDepth > 0) {
                        if (bibtex[i] === '{') braceDepth++;
                        else if (bibtex[i] === '}') braceDepth--;
                        i++;
                    }
                    // Remove limits (last '}')
                    fieldValue = bibtex.substring(start, i - 1);
                } else if (match('"')) {
                    // Quoted value
                    const start = i;
                    let quoteDepth = 1;
                    while (i < len && quoteDepth > 0) {
                        // Handle escaped quotes \"? Simplified: just look for "
                        // BibTeX actually allows nested braces inside quotes too.
                        if (bibtex[i] === '"') quoteDepth--;
                        // Check for braces inside quotes to protect content?
                        // Standard BibTeX: inside "...", { can exist but " closes it.
                        i++;
                    }
                    fieldValue = bibtex.substring(start, i - 1);
                } else {
                    // Number or bare string
                    const start = i;
                    while (i < len && bibtex[i] !== ',' && bibtex[i] !== '}') i++;
                    fieldValue = bibtex.substring(start, i);
                }

                // Clean up value (remove braces, newlines)
                // We keep inner structure but flatten newlines
                let clean = fieldValue.replace(/\s+/g, ' ').trim();
                // Remove LaTeX braces like {Title} -> Title, but keep {{T}itle} -> {T}itle ?
                // User wants "reading full titles". 
                // Typically we want to strip the OUTERMOST braces if they exist, but we already did that by reading content inside {}
                // However, if we have {{Title}}, value is {Title}. We might want to strip ONE level of braces if it wraps everything?
                // Or simply remove all braces for clean text display?
                // Let's just remove ALL braces for display purposes as requested for the "Website"
                clean = clean.replace(/[\{\}]/g, '');
                // Also remove quotes if present? (already handled by substring above mostly)
                // replace inner quotes
                clean = clean.replace(/"/g, '');

                if (fieldName) {
                    entry[fieldName] = clean;
                }

                skipWhitespace();
                match(','); // Optional comma at end of field
            }
        } else {
            // Closed immediately?
            match('}');
        }

        entries.push(entry);
    }

    return entries;
}

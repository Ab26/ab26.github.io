import NodeCache from 'node-cache';
import { search } from 'scholarly';

const cache = new NodeCache({ stdTTL: 86400 }); // Cache for 24 hours

const AUTHOR_ID = 'sXA1mOsAAAAJ';
const AUTHOR_QUERY = `author:${AUTHOR_ID}`;

export async function getPublications() {
    const cacheKey = `publications-${AUTHOR_ID}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
        return cachedData;
    }

    try {
        const searchResults = await search(AUTHOR_QUERY);
        const publications = searchResults.map((result: any) => ({
            title: result.title,
            authors: result.authors || [],
            year: result.year,
            citations: result.citedby || 0,
            venue: result.journal || result.conference || '',
            url: result.url || `https://scholar.google.com/citations?view_op=view_citation&citation_for_view=${result.citationId}`,
        }));

        cache.set(cacheKey, publications);
        return publications;
    } catch (error) {
        console.error('Error fetching publications:', error);
        return [];
    }
}
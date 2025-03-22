import NodeCache from 'node-cache';
import scholarly from 'scholarly';

const cache = new NodeCache({ stdTTL: 86400 }); // Cache for 24 hours

const AUTHOR_ID = 'sXA1mOsAAAAJ';

export async function getPublications() {
    const cacheKey = `publications-${AUTHOR_ID}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
        return cachedData;
    }

    try {
        const author = await scholarly.author(AUTHOR_ID);
        const publications = await Promise.all(
            author.publications.map(async (pub: any) => {
                const details = await scholarly.publication(pub.id);
                return {
                    title: details.title,
                    authors: details.authors,
                    year: details.year,
                    citations: details.citations,
                    venue: details.venue,
                    url: details.url,
                    abstract: details.abstract,
                };
            })
        );

        cache.set(cacheKey, publications);
        return publications;
    } catch (error) {
        console.error('Error fetching publications:', error);
        return [];
    }
}
import { NextResponse } from 'next/server';
import { getPublications } from '@/utils/scholar';

export async function GET() {
    try {
        const publications = await getPublications();
        return NextResponse.json(publications);
    } catch (error) {
        console.error('Error in publications API:', error);
        return NextResponse.json({ error: 'Failed to fetch publications' }, { status: 500 });
    }
}
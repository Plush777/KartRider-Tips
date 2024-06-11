import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(req) {
    const imagesDirectory = path.join(process.cwd(), '/public/images/tier');
    const filenames = fs.readdirSync(imagesDirectory);
    const images = filenames.map((name) => `/images/tier/${name}`);

    return NextResponse.json(images);
}
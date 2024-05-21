// app/api/getResume/route.jsx
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
    try {
        const fileName = request.nextUrl.searchParams.get('file'); // Get filename from query parameter

        if (!fileName) {
            return new NextResponse('Missing filename', { status: 400 }); // Bad Request if filename is missing
        }

        const filePath = path.join(process.cwd(), 'public', fileName);

        if (!fs.existsSync(filePath)) {
            return new NextResponse('File not found', { status: 404 }); // Not Found if file doesn't exist
        }

        const fileStream = fs.createReadStream(filePath);
        const fileExtension = path.extname(fileName).toLowerCase();

        const contentTypeMap = {
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.pdf': 'application/pdf',
            // ... Add more types as needed
        };
        const contentType = contentTypeMap[fileExtension] || 'application/octet-stream';

        return new NextResponse(fileStream, {
            status: 200,
            headers: {
                'Content-Disposition': `attachment; filename="${fileName}"`,
                'Content-Type': contentType,
            },
        });
    } catch (error) {
        console.error('Error handling file download:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

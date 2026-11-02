import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * API Route to serve "sanjay Professional resume.pdf" reliably across all browsers and iframe environments.
 * Supports both direct binary PDF download and base64 payload for client-side Blob creation.
 */
export async function GET(req: NextRequest) {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'sanjay Professional resume.pdf'
    );
    const fileBuffer = fs.readFileSync(filePath);

    const format = req.nextUrl.searchParams.get('format');
    if (format === 'base64') {
      return NextResponse.json({
        filename: 'sanjay Professional resume.pdf',
        mimeType: 'application/pdf',
        size: fileBuffer.length,
        base64: fileBuffer.toString('base64'),
      });
    }

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          'attachment; filename="sanjay Professional resume.pdf"',
        'Content-Length': String(fileBuffer.length),
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Resume file not found' },
      { status: 404 }
    );
  }
}

import { ImageResponse } from 'next/og';

/**
 * OpenGraph Image generator (1200x630)
 * Renders Sanjay's name, role line, and location for social media previews.
 */
export const alt = 'Sanjay — Aspiring Full-Stack Web Developer (AI-Assisted)';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1220',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '9999px',
              background: '#2563EB',
            }}
          />
          <span
            style={{
              color: '#60A5FA',
              fontSize: '22px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Fresher · Villupuram, Tamil Nadu
          </span>
        </div>

        <h1
          style={{
            fontSize: '76px',
            fontWeight: 800,
            color: '#E5E7EB',
            margin: '0 0 16px 0',
            letterSpacing: '-2px',
          }}
        >
          Sanjay
        </h1>

        <p
          style={{
            fontSize: '32px',
            color: '#94A3B8',
            margin: '0 0 40px 0',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Aspiring Full-Stack Web Developer (AI-Assisted) | Python Fundamentals
        </p>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            borderTop: '1px solid #1E293B',
            paddingTop: '32px',
            width: '100%',
          }}
        >
          <span style={{ color: '#60A5FA', fontSize: '20px' }}>
            Raja Salon Website
          </span>
          <span style={{ color: '#475569', fontSize: '20px' }}>·</span>
          <span style={{ color: '#94A3B8', fontSize: '20px' }}>
            Skibui Technologies Intern
          </span>
          <span style={{ color: '#475569', fontSize: '20px' }}>·</span>
          <span style={{ color: '#94A3B8', fontSize: '20px' }}>
            B.Sc. Physics (2026)
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

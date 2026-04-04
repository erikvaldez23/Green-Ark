import React from 'react';
import heroImage from '../../../assets/gallery_pool.png';
import GalleryGrid from './GalleryGrid';

const Gallery = () => {
    return (
        <div style={{
            flex: 1,
            height: '100%',
            backgroundColor: '#000',
            position: 'relative',
            padding: '20px',
            boxSizing: 'border-box',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        }}>
            {/* Hero */}
            <div style={{
                width: '100%',
                height: '85vh',
                minHeight: '600px',
                borderRadius: '28px',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
            }}>
                <img
                    src={heroImage}
                    alt="Gallery Showcase"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Multi-layer gradient */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                        linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%),
                        linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 60%)
                    `,
                }} />

                {/* Text */}
                <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50px',
                    color: '#fff',
                }}>
                    <span style={{
                        display: 'block',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: '#DFC789',
                        marginBottom: '12px',
                    }}>Visual Narrative</span>
                    <h1 className="mobile-font-h1" style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        margin: 0,
                        lineHeight: 1.05,
                        letterSpacing: '-0.035em',
                        textShadow: '0 4px 30px rgba(0,0,0,0.4)',
                    }}>
                        Gallery Showcase
                    </h1>
                </div>
            </div>

            {/* Gallery Grid */}
            <GalleryGrid />
        </div>
    );
};

export default Gallery;

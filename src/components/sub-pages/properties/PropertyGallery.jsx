import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PropertyGallery = ({ images = [] }) => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    const nextImage = () => setLightboxIndex((prev) => (prev + 1) % images.length);

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    };

    if (!images || images.length === 0) return null;

    // Build bento-style layout: first image is large hero, others fill the grid
    const [heroImg, ...restImgs] = images;

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <style>{`
                .pg-overlay {
                    position: fixed; inset: 0;
                    background: rgba(0,0,0,0.95);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: pg-fadein 0.25s ease;
                }
                @keyframes pg-fadein { from { opacity: 0; } to { opacity: 1; } }
                .pg-lightbox-img {
                    max-width: 88vw;
                    max-height: 82vh;
                    border-radius: 16px;
                    object-fit: contain;
                    box-shadow: 0 32px 80px rgba(0,0,0,0.8);
                }
                .pg-lb-btn {
                    position: fixed;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255,255,255,0.08);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 50%;
                    width: 52px; height: 52px;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; color: #fff;
                    transition: background 0.3s ease;
                    z-index: 10001;
                }
                .pg-lb-btn:hover { background: rgba(223,199,137,0.15); border-color: rgba(223,199,137,0.4); }
                .pg-lb-close {
                    position: fixed; top: 24px; right: 24px;
                    background: rgba(255,255,255,0.08);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 50%;
                    width: 44px; height: 44px;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; color: #fff;
                    transition: background 0.3s ease;
                    z-index: 10001;
                }
                .pg-lb-close:hover { background: rgba(220,50,50,0.3); border-color: rgba(220,50,50,0.4); }
                .pg-thumb {
                    border-radius: 20px;
                    overflow: hidden;
                    cursor: pointer;
                    border: 1px solid #1e1e1e;
                    position: relative;
                    transition: transform 0.4s ease, border-color 0.3s ease;
                }
                .pg-thumb:hover {
                    transform: scale(1.02);
                    border-color: rgba(223,199,137,0.25);
                }
                .pg-thumb img {
                    width: 100%; height: 100%;
                    object-fit: cover; display: block;
                    transition: transform 0.6s ease;
                }
                .pg-thumb:hover img { transform: scale(1.06); }
                .pg-thumb-overlay {
                    position: absolute; inset: 0;
                    background: rgba(0,0,0,0);
                    transition: background 0.3s ease;
                }
                .pg-thumb:hover .pg-thumb-overlay {
                    background: rgba(0,0,0,0.18);
                }
                .pg-counter {
                    position: fixed; bottom: 28px; left: 50%;
                    transform: translateX(-50%);
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.15em;
                    color: #888;
                    z-index: 10001;
                    text-transform: uppercase;
                }
            `}</style>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="pg-overlay"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    style={{ outline: 'none' }}
                    ref={el => el && el.focus()}
                >
                    <button className="pg-lb-close" onClick={closeLightbox}>
                        <X size={18} />
                    </button>

                    <button className="pg-lb-btn" style={{ left: '20px' }} onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                        <ChevronLeft size={22} />
                    </button>

                    <img
                        src={images[lightboxIndex]}
                        alt={`Gallery ${lightboxIndex + 1}`}
                        className="pg-lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button className="pg-lb-btn" style={{ right: '20px' }} onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                        <ChevronRight size={22} />
                    </button>

                    <div className="pg-counter">{lightboxIndex + 1} / {images.length}</div>
                </div>
            )}

            {/* Section header */}
            <div>
                <span className="section-label">Interior &amp; Exterior</span>
                <span className="section-divider" />
                <h2 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    color: '#f0f0f0',
                    margin: 0,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                }}>
                    Property Gallery
                </h2>
            </div>

            {/* Bento grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'auto',
                gap: '16px',
                width: '100%',
            }}>
                {/* Hero image — spans 2 cols + 2 rows */}
                <div
                    className="pg-thumb"
                    style={{ gridColumn: '1 / 3', gridRow: '1 / 3', height: '520px' }}
                    onClick={() => openLightbox(0)}
                >
                    <img src={heroImg} alt="Gallery Hero" />
                    <div className="pg-thumb-overlay" />
                </div>

                {/* Remaining thumbs */}
                {restImgs.slice(0, 4).map((img, i) => (
                    <div
                        key={i}
                        className="pg-thumb"
                        style={{ height: '252px' }}
                        onClick={() => openLightbox(i + 1)}
                    >
                        <img src={img} alt={`Gallery ${i + 2}`} />
                        <div className="pg-thumb-overlay" />
                    </div>
                ))}

                {/* Remaining images in a sub-row */}
                {images.slice(5).length > 0 && images.slice(5).map((img, i) => (
                    <div
                        key={i + 5}
                        className="pg-thumb"
                        style={{ height: '260px' }}
                        onClick={() => openLightbox(i + 5)}
                    >
                        <img src={img} alt={`Gallery ${i + 6}`} />
                        <div className="pg-thumb-overlay" />
                    </div>
                ))}
            </div>

            {/* View count */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <div style={{ height: '1px', width: '40px', background: '#222' }} />
                <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#444',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                }}>
                    {images.length} photos — click to enlarge
                </span>
            </div>
        </div>
    );
};

export default PropertyGallery;

import React from 'react';

// Importing existing assets to populate the grid
import img1 from '../../../assets/listing_opulence.png';
import img2 from '../../../assets/listing_harmony.png';
import img3 from '../../../assets/listing_prestige.png';
import img4 from '../../../assets/gallery_pool.png';
import img5 from '../../../assets/gallery_bedroom.png';
import img6 from '../../../assets/luxury_estate_hero.png';

const GalleryGrid = () => {
    const items = [
        { src: img1, alt: "Luxury Estate",   span: "col-2 row-1" },
        { src: img2, alt: "Modern Design",   span: "col-1 row-1" },
        { src: img3, alt: "Coastal View",    span: "col-1 row-2" },
        { src: img4, alt: "Bespoke Details", span: "col-1 row-1" },
        { src: img5, alt: "Intimate Spaces", span: "col-2 row-2" },
        { src: img6, alt: "Master Bedroom",  span: "col-1 row-2" },
        { src: img2, alt: "Harmony House",  span: "col-1 row-1" },
        { src: img4, alt: "Crystal Pool",    span: "col-1 row-1" },
    ];

    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            paddingTop: '40px',
            paddingBottom: '80px',
        }}>
            <style>{`
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-auto-rows: 240px;
                    gap: 16px;
                    width: 100%;
                }
                .gallery-item {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    background: #0a0a0a;
                    border: 1px solid #141414;
                    cursor: pointer;
                    transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.6s ease;
                }
                .gallery-item:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                    z-index: 10;
                    border-color: rgba(255,255,255,0.05);
                }
                .gallery-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 1.2s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease;
                }
                .gallery-item:hover img {
                    transform: scale(1.08);
                }
                .gallery-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
                    opacity: 0.4;
                    transition: opacity 0.5s ease;
                }
                .gallery-item:hover .gallery-overlay {
                    opacity: 0.8;
                }
                .gallery-caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 24px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    color: #fff;
                    text-transform: uppercase;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
                }
                .gallery-item:hover .gallery-caption {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Grid Spans */
                .col-2 { grid-column: span 2; }
                .row-2 { grid-row: span 2; }

                @media (max-width: 1024px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .col-2 { grid-column: span 1; }
                }
                @media (max-width: 600px) {
                    .gallery-grid {
                        grid-template-columns: 1fr !important;
                        grid-auto-rows: 280px;
                    }
                    .row-2 { grid-row: span 1; }
                    .col-2 { grid-column: span 1; }
                }
            `}</style>

            {/* Section Header */}
            <div className="section-animate" style={{ marginBottom: '40px' }}>
                <span className="section-label">Featured Collection</span>
                <span className="section-divider" />
            </div>

            {/* Grid */}
            <div className="gallery-grid">
                {items.map((item, i) => (
                    <div 
                        key={i} 
                        className={`gallery-item ${item.span}`}
                    >
                        <img src={item.src} alt={item.alt} />
                        <div className="gallery-overlay" />
                        <span className="gallery-caption">{item.alt}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryGrid;

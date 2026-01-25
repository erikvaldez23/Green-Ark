import React from 'react';

// Importing existing assets to populate the grid
import img1 from '../../../assets/listing_opulence.png';
import img2 from '../../../assets/listing_harmony.png';
import img3 from '../../../assets/listing_prestige.png';
import img4 from '../../../assets/gallery_pool.png';
import img5 from '../../../assets/gallery_bedroom.png';
import img6 from '../../../assets/luxury_estate_hero.png';
// Re-using some to fill the grid if needed
import img7 from '../../../assets/listing_opulence.png';
import img8 from '../../../assets/gallery_pool.png';

const GalleryGrid = () => {
    // We'll define a simple configuration for our items to create a masonry/bento feel
    // On mobile, these spans will be ignored due to the media query behavior (auto-fit)
    // or we can just rely on auto-fit.
    // For a robust implementation without external CSS files, we'll use inline styles with a simple responsive approach.

    return (
        <div style={{
            width: '100%',
            padding: '0 20px', // Match parent padding if needed, or handled by parent
            boxSizing: 'border-box',
        }}>
            <h2 style={{
                color: '#fff',
                fontFamily: "'Inter', sans-serif",
                fontSize: '2rem',
                marginBottom: '30px',
                textAlign: 'left'
            }}>
                Featured Collection
            </h2>

            <div style={{
                display: 'grid',
                // This creates a responsive grid that automatically adjusts columns
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                width: '100%',
            }}>
                {/* Item 1 - Wide if there's space */}
                <GridItem src={img1} alt="Luxury Villa" />

                {/* Item 2 - Tall */}
                <GridItem src={img2} alt="Modern Home" />

                {/* Item 3 */}
                <GridItem src={img3} alt="Estate Night" />

                {/* Item 4 - Wide */}
                <GridItem src={img4} alt="Poolside" style={{ gridColumn: 'span 2' }} />

                {/* Item 5 */}
                <GridItem src={img5} alt="Bedroom Interior" />

                {/* Item 6 - Wide */}
                <GridItem src={img6} alt="Estate Hero" style={{ gridColumn: 'span 2' }} />

                {/* Item 7 */}
                <GridItem src={img7} alt="Luxury Detail" />

                {/* Item 8 */}
                <GridItem src={img8} alt="Pool Detail" />
            </div>
        </div>
    );
};

// Helper component for individual grid items
const GridItem = ({ src, alt, style }) => {
    return (
        <div style={{
            borderRadius: '30px',
            overflow: 'hidden',
            height: '300px', // Fixed height for uniformity in rows
            position: 'relative',
            // Default behavior is to take 1 cell, but can be overridden
            ...style
        }}>
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
            {/* Optional: Add a subtle overlay on hover or always? 
               Reference image has clean images. Let's keep it clean.
           */}
        </div>
    );
};

export default GalleryGrid;

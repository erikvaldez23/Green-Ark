import React from 'react';
import heroImage from '../../../assets/listing_opulence.png'; // Using an existing high-quality image as placeholder
import PropertiesGrid from './PropertiesGrid';

const PropertiesPage = () => {
    return (
        <div style={{
            flex: 1,
            height: '100%',
            backgroundColor: '#000',
            position: 'relative',
            padding: '20px',
            boxSizing: 'border-box',
            overflowY: 'auto', // Enable vertical scrolling
            display: 'flex',
            flexDirection: 'column',
            gap: '20px', // Spacing between Hero and Grid
        }}>
            {/* 
              Hero Container 
              We want a large image taking up most of the space, 
              rounded similar to the home page hero.
           */}
            <div style={{
                width: '100%',
                // Make hero take adequate height, perhaps slightly less than full viewport to encourage scrolling
                height: '85vh',
                minHeight: '600px',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0, // Prevent shrinking
            }}>
                <img
                    src={heroImage}
                    alt="Property Showcase"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />

                {/* Gradient Overlay for text readability */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)',
                }}></div>

                {/* Text Content */}
                <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    left: '60px',
                    color: '#fff',
                }}>
                    <h1 style={{
                        fontFamily: "'Inter', sans-serif", // Matching Home hero font
                        fontSize: '4rem',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.1,
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    }}>
                        Property Showcase
                    </h1>
                </div>
            </div>

            {/* Properties Grid Section */}
            <PropertiesGrid />
        </div>
    );
};

export default PropertiesPage;

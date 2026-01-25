import React from 'react';
import listingOpulence from '../assets/listing_opulence.png';
import listingPrestige from '../assets/listing_prestige.png';
import listingHarmony from '../assets/listing_harmony.png';
import { Sun } from 'lucide-react'; // For the 'Light Mode' button lookalike in screenshot if needed, but screenshot shows View All. 
// Actually screenshot shows View All at top right. And a "Light Mode" fab at bottom right of screen (which we removed from home).
// Let's focus on the section content: Title "New Listings", Button "View All", and 3 Cards.

const listings = [
    { id: 1, title: 'Opulence', image: listingOpulence },
    { id: 2, title: 'Prestige', image: listingPrestige },
    { id: 3, title: 'Harmony', image: listingHarmony },
];

const NewListings = () => {
    return (
        <div style={{
            padding: '40px 20px',
            color: '#fff',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
            }}>
                <h2 style={{
                    fontSize: '3.5rem',
                    margin: 0,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif"
                }}>
                    New Listings
                </h2>

                <button style={{
                    background: 'transparent',
                    border: '1px solid #333',
                    color: '#fff',
                    borderRadius: '20px',
                    padding: '10px 24px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                }}>
                    View All
                </button>
            </div>

            {/* Grid of Cards */}
            <div style={{
                display: 'flex',
                gap: '20px',
                width: '100%',
            }}>
                {listings.map((item) => (
                    <div key={item.id} style={{
                        flex: 1,
                        aspectRatio: '1 / 1', // Square-ish cards
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)'
                        }}></div>

                        {/* Title */}
                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '30px',
                            fontSize: '2rem',
                            fontWeight: 700,
                        }}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default NewListings;

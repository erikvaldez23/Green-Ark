import React, { useState, useEffect } from 'react';
import galleryBg from '../../../assets/listing_harmony.png';
import globeImg from '../../../assets/dark_globe.png';
import img2 from '../../../assets/listing_opulence.png';
import img3 from '../../../assets/gallery_pool.png';
import { Link } from 'react-router-dom';
import { Clock, Building2, TrendingUp, Trophy } from 'lucide-react';

const AboutHighlights = () => {
    // Stats Carousel State
    const [statsIndex, setStatsIndex] = useState(0);
    const stats = [
        { value: '25+', label: 'Years of Experience', icon: <Clock size={32} color="#DFC789" /> },
        { value: '100+', label: 'Exclusive Properties', icon: <Building2 size={32} color="#DFC789" /> },
        { value: '$1B+', label: 'Total Sales Volume', icon: <TrendingUp size={32} color="#DFC789" /> },
        { value: '50+', label: 'International Awards', icon: <Trophy size={32} color="#DFC789" /> }
    ];

    // Gallery Carousel State
    const [galleryIndex, setGalleryIndex] = useState(0);
    const galleryImages = [galleryBg, img2, img3];

    // Carousel Timer
    useEffect(() => {
        const statsInterval = setInterval(() => {
            setStatsIndex((prev) => (prev + 1) % stats.length);
        }, 3000);

        const galleryInterval = setInterval(() => {
            setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
        }, 4000);

        return () => {
            clearInterval(statsInterval);
            clearInterval(galleryInterval);
        };
    }, []);

    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            backgroundColor: '#000', // Ensure dark background
            marginTop: '60px'
        }}>
            {/* Descriptive Text */}
            {/* Text Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '900px',
            }}>
                <h2 style={{
                    color: '#fff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '3rem',
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.1,
                }}>
                    We're not just developers. We're system designers for the next century.
                </h2>
                <p style={{
                    color: '#aaa',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    lineHeight: '1.6',
                    margin: 0,
                }}>
                    Premier commercial real estate investment company with a focus on high-value properties in emerging markets.
                </p>
            </div>

            {/* Cards Row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                width: '100%',
            }}>
                {/* Card 1: Stats Carousel */}
                <div style={{
                    backgroundColor: '#111',
                    borderRadius: '30px',
                    height: '250px',
                    padding: '30px',
                    boxSizing: 'border-box',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid #222',
                    overflow: 'hidden', // Hide overflow for slide effect if implemented, or just clean cut
                }}>
                    <div style={{
                        alignSelf: 'flex-end',
                        animation: 'fadeIn 0.5s ease-in-out', // Animate icon change too
                    }}
                        key={`icon-${statsIndex}`} // Key change triggers animation
                    >
                        {stats[statsIndex].icon}
                    </div>

                    {/* Carousel Content */}
                    <div style={{
                        color: '#fff',
                        fontFamily: "'Inter', sans-serif",
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'opacity 0.5s ease', // Simple fade transition logic could be improved with separate components but this is basic re-render
                        opacity: 1, // To do real animation we'd need CSS keys or a library, sticking to state update for now
                    }}>
                        <div key={statsIndex} style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>
                                {stats[statsIndex].value}
                            </div>
                            <span style={{ display: 'block', fontSize: '1rem', fontWeight: 400, opacity: 0.7, marginTop: '5px' }}>
                                {stats[statsIndex].label}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Card 2: Gallery Link & Carousel */}
                <Link to="/gallery" style={{ textDecoration: 'none' }}>
                    <div style={{
                        borderRadius: '30px',
                        height: '250px',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: '1px solid #222',
                    }}>
                        {galleryImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Our Gallery"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.6)',
                                    transition: 'opacity 1s ease, transform 1s ease',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    opacity: index === galleryIndex ? 1 : 0,
                                    transform: index === galleryIndex ? 'scale(1.05)' : 'scale(1)',
                                }}
                            />
                        ))}

                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '30px',
                            color: '#fff',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '2rem',
                            fontWeight: 700,
                            zIndex: 2,
                        }}>
                            Our Gallery
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '30px',
                            right: '30px',
                            zIndex: 2,
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        </div>
                    </div>
                </Link>

                {/* Card 3: Locations */}
                <div style={{
                    backgroundColor: '#111',
                    borderRadius: '30px',
                    height: '250px',
                    padding: '30px',
                    boxSizing: 'border-box',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid #222',
                }}>
                    <h3 style={{
                        color: '#fff',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '2rem',
                        fontWeight: 700,
                        margin: '0 0 20px 0',
                        position: 'relative',
                        zIndex: 2,
                    }}>
                        Innovation Pillars
                    </h3>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        color: '#ccc',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.2rem',
                        position: 'relative',
                        zIndex: 2,
                    }}>
                        <span>Innovation 1</span>
                        <span>Innovation 2</span>
                        <span>Innovation 3</span>
                    </div>

                    {/* Globe Image positioned on the right */}
                    <img
                        src={globeImg}
                        alt="Globe"
                        style={{
                            position: 'absolute',
                            right: '-50px',
                            top: '10%',
                            height: '140%', // Oversized to look like the reference
                            objectFit: 'contain',
                            opacity: 0.8,
                            pointerEvents: 'none',
                            zIndex: 1,
                        }}
                    />
                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default AboutHighlights;

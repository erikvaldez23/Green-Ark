import React, { useState, useEffect } from 'react';
import heroImage from '../assets/luxury_estate_hero.png';
import galleryPool from '../assets/gallery_pool.png';
import galleryBedroom from '../assets/gallery_bedroom.png';
import darkGlobe from '../assets/dark_globe.png';
import { ArrowRight, Image as ImageIcon, Clock, Building2, TrendingUp, Trophy } from 'lucide-react';
import Blueprint from './Blueprint';

const Home = () => {
    // Stats Carousel State
    const [statsIndex, setStatsIndex] = useState(0);
    const stats = [
        { value: '25+', label: 'Years of Experience', icon: <Clock size={32} color="#DFC789" /> },
        { value: '500+', label: 'Happy Clients', icon: <Building2 size={32} color="#DFC789" /> },
        { value: '12', label: 'Years Experience', icon: <TrendingUp size={32} color="#DFC789" /> },
        { value: '100+', label: 'Projects Completed', icon: <Trophy size={32} color="#DFC789" /> }
    ];

    // Gallery Carousel State
    const [galleryIndex, setGalleryIndex] = useState(0);
    const galleryImages = [galleryPool, galleryBedroom];

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
            flex: 1,
            height: '100%',
            overflowY: 'auto',
            padding: 0,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            animation: 'fadeIn 0.5s ease-in-out',
        }}>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* TOP SECTION: HERO (65% Height) */}
            <div style={{
                height: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                boxSizing: 'border-box',
                flexShrink: 0
            }}>
                {/* TOP SECTION: HERO (65% Height) */}
                <div style={{
                    flex: '0.65',
                    position: 'relative',
                    width: '100%',
                    borderRadius: '30px',
                    overflow: 'hidden',
                }}>
                    <img
                        src={heroImage}
                        alt="Luxury Estate"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />

                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)',
                    }}></div>

                    <div style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '30px',
                        color: '#fff',
                        maxWidth: '60%',
                    }}>
                        <h2 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '3.5rem',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            margin: 0,
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        }}>
                            Tomorrow's Sustainability Today
                        </h2>
                    </div>

                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        right: '60px',
                        display: 'flex',
                        gap: '15px'
                    }}>
                        <button style={{
                            backgroundColor: '#111',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '30px',
                            padding: '12px 24px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                        }}>
                            Our Properties
                        </button>
                        <button style={{
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            color: '#000',
                            border: 'none',
                            borderRadius: '30px',
                            padding: '12px 24px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: 600
                        }}>
                            Inquire now <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* BOTTOM SECTION: DASHBOARD ROW (35% Height) */}
                <div style={{
                    flex: '0.35',
                    display: 'flex',
                    gap: '20px',
                    minHeight: '0', // Important for flex container nesting
                }}>
                    {/* CARD 1: STATS (Carousel) */}
                    <div style={{
                        flex: 1,
                        backgroundColor: 'rgba(17, 17, 17, 0.6)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '30px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // Center content vertically
                        padding: '30px',
                    }}>
                        <div style={{ position: 'absolute', top: '30px', right: '30px', animation: 'fadeIn 0.5s ease-in-out' }} key={`icon-${statsIndex}`}>
                            {stats[statsIndex].icon}
                        </div>

                        <div style={{
                            color: '#fff',
                            fontFamily: "'Inter', sans-serif",
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end', // Align bottom similar to previous layout? 
                            // Previous layout used flex-end. Let's stick closer to center/bottom.
                            height: '100%',
                        }}>
                            <div key={statsIndex} style={{ animation: 'fadeIn 0.5s ease-in-out', marginTop: 'auto' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>
                                    {stats[statsIndex].value}
                                </div>
                                <span style={{ display: 'block', fontSize: '1rem', fontWeight: 400, opacity: 0.7, marginTop: '5px', color: '#999' }}>
                                    {stats[statsIndex].label}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: GALLERY (Carousel) */}
                    <div style={{
                        flex: 1,
                        backgroundColor: 'rgba(17, 17, 17, 0.6)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '30px',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <ImageIcon size={32} color="#fff" style={{ position: 'absolute', top: '30px', right: '30px', zIndex: 10, opacity: 0.5 }} />

                        {galleryImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Gallery"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    opacity: index === galleryIndex ? 1 : 0,
                                    transition: 'opacity 1s ease, transform 1s ease',
                                    transform: index === galleryIndex ? 'scale(1.05)' : 'scale(1)',
                                }}
                            />
                        ))}

                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '30px',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '2rem',
                            zIndex: 10,
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}>
                            Our Gallery
                        </div>
                    </div>

                    {/* CARD 3: INNOVATION PILLARS */}
                    <div style={{
                        flex: 1,
                        backgroundColor: 'rgba(17, 17, 17, 0.6)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '30px',
                        position: 'relative',
                        overflow: 'hidden',
                        padding: '30px',
                        boxSizing: 'border-box',
                        border: '1px solid #222'
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
                            src={darkGlobe}
                            alt="Globe"
                            style={{
                                position: 'absolute',
                                right: '-50px',
                                top: '10%',
                                height: '140%',
                                objectFit: 'contain',
                                opacity: 0.8,
                                pointerEvents: 'none',
                                zIndex: 1,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* BLUEPRINT SECTION */}
            <Blueprint />
        </div>
    );
};

export default Home;

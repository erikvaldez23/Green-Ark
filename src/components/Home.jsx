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
        { value: '25+', label: 'Years of Experience', icon: <Clock size={28} color="#DFC789" strokeWidth={1.5} /> },
        { value: '500+', label: 'Happy Clients', icon: <Building2 size={28} color="#DFC789" strokeWidth={1.5} /> },
        { value: '12', label: 'Years Experience', icon: <TrendingUp size={28} color="#DFC789" strokeWidth={1.5} /> },
        { value: '100+', label: 'Projects Completed', icon: <Trophy size={28} color="#DFC789" strokeWidth={1.5} /> }
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
            backgroundColor: '#000',
        }}>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .home-hero-btn {
                    padding: 14px 28px;
                    border-radius: 40px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }
                .home-hero-btn-primary {
                    background: #fff;
                    color: #000;
                    border: none;
                }
                .home-hero-btn-primary:hover {
                    background: #DFC789;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(223,199,137,0.2);
                }
                .home-hero-btn-ghost {
                    background: rgba(0,0,0,0.4);
                    color: #fff;
                    border: 1px solid rgba(255,255,255,0.15);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }
                .home-hero-btn-ghost:hover {
                    border-color: #DFC789;
                    color: #DFC789;
                    background: rgba(223,199,137,0.05);
                    transform: translateY(-2px);
                }
                .dashboard-card {
                    background: rgba(14, 14, 14, 0.9);
                    border: 1px solid #1a1a1a;
                    border-radius: 28px;
                    padding: 32px;
                    box-sizing: border-box;
                    transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .dashboard-card:hover {
                    border-color: #2a2a2a;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.5);
                }
                .card-label {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    color: #444;
                    text-transform: uppercase;
                    margin-top: 6px;
                }
                .card-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                    letter-spacing: -0.02em;
                }
            `}</style>

            {/* TOP SECTION: HERO & DASHBOARD */}
            <div className="mobile-height-auto mobile-padding-sm" style={{
                height: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                boxSizing: 'border-box',
                flexShrink: 0
            }}>
                {/* HERO (65% Height) */}
                <div className="mobile-100vh" style={{
                    flex: '0.65',
                    position: 'relative',
                    width: '100%',
                    borderRadius: '28px',
                    overflow: 'hidden',
                }}>
                    <img
                        src={heroImage}
                        alt="Luxury Estate"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />

                    {/* Multi-layer Gradient */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                    }} />

                    {/* Hero Text */}
                    <div className="mobile-hero-text" style={{
                        position: 'absolute',
                        bottom: '44px',
                        left: '44px',
                        color: '#fff',
                        maxWidth: '600px',
                    }}>
                        <span style={{
                            display: 'block',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: '#DFC789',
                            marginBottom: '16px',
                        }}>Architecture for the Next Century</span>
                        <h2 className="mobile-font-h1" style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: '-0.04em',
                            margin: 0,
                            textShadow: '0 4px 30px rgba(0,0,0,0.4)',
                        }}>
                            Tomorrow's Sustainability Today.
                        </h2>
                        
                        <div className="mobile-hero-buttons" style={{
                            display: 'flex',
                            gap: '12px',
                            marginTop: '32px'
                        }}>
                            <button className="home-hero-btn home-hero-btn-primary">
                                Inquire Now <ArrowRight size={16} />
                            </button>
                            <button className="home-hero-btn home-hero-btn-ghost">
                                Our Properties
                            </button>
                        </div>
                    </div>
                </div>

                {/* DASHBOARD ROW (35% Height) */}
                <div className="mobile-col mobile-height-auto" style={{
                    flex: '0.35',
                    display: 'flex',
                    gap: '20px',
                    minHeight: '220px',
                }}>
                    {/* CARD 1: STATS */}
                    <div className="dashboard-card mobile-card-height" style={{ flex: 1 }}>
                        <div style={{ position: 'absolute', top: '32px', right: '32px' }}>
                            {stats[statsIndex].icon}
                        </div>
                        <div style={{ marginTop: 'auto' }}>
                            <div key={statsIndex} style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
                                <div style={{ 
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontSize: '3rem', 
                                    fontWeight: 800, 
                                    lineHeight: 1, 
                                    color: '#fff',
                                    letterSpacing: '-0.04em'
                                }}>
                                    {stats[statsIndex].value}
                                </div>
                                <div className="card-label">{stats[statsIndex].label}</div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: GALLERY */}
                    <div className="dashboard-card mobile-card-height" style={{ flex: 1, padding: 0, cursor: 'pointer' }}>
                        <div style={{
                            position: 'absolute', top: '32px', right: '32px', zIndex: 10,
                            width: '40px', height: '40px', borderRadius: '50%',
                            background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <ImageIcon size={18} color="#fff" strokeWidth={1.5} />
                        </div>

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
                                    inset: 0,
                                    opacity: index === galleryIndex ? 0.7 : 0,
                                    transition: 'opacity 1s ease, transform 1s ease',
                                    transform: index === galleryIndex ? 'scale(1.05)' : 'scale(1)',
                                }}
                            />
                        ))}
                        
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        }} />

                        <div style={{
                            position: 'absolute',
                            bottom: '32px',
                            left: '32px',
                            zIndex: 10,
                        }}>
                            <h3 className="card-title" style={{ fontSize: '1.4rem' }}>Our Gallery</h3>
                            <div className="card-label" style={{ color: '#aaa', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                View Collection <ArrowRight size={10} />
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: PILLARS */}
                    <div className="dashboard-card mobile-card-height" style={{ flex: 1 }}>
                        <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '16px' }}>
                            Innovation Pillars
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.9rem',
                            fontWeight: 300,
                            color: '#777',
                            position: 'relative',
                            zIndex: 2,
                        }}>
                            <span style={{ color: '#aaa' }}>01 — Smart Systems</span>
                            <span>02 — Net Zero Energy</span>
                            <span>03 — Adaptive Life</span>
                        </div>

                        {/* Globe Image */}
                        <img
                            src={darkGlobe}
                            alt="Globe"
                            style={{
                                position: 'absolute',
                                right: '-40px',
                                bottom: '-20px',
                                height: '110%',
                                objectFit: 'contain',
                                opacity: 0.15,
                                pointerEvents: 'none',
                                mixBlendMode: 'screen',
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

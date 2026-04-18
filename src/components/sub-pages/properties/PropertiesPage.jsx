import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize2, ArrowRight, Sparkles } from 'lucide-react';
import propertyData from './propertyData';
import PropertiesGrid from './PropertiesGrid';

// The featured/spotlight property (index 0 = Azure Villa by default)
const SPOTLIGHT_ID = 1;

const PropertiesPage = () => {
    const navigate = useNavigate();
    const spotlight = propertyData.find(p => p.id === SPOTLIGHT_ID) || propertyData[0];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Green Ark Properties",
        "itemListElement": propertyData.map((prop, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://www.greenark.com/property/${prop.id}`
        }))
    };

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
            <Helmet>
                <title>Exclusive Properties | Green Ark</title>
                <meta name="description" content="Browse our luxury sustainable real estate portfolio. Forward-thinking homes built for a new era." />
                <link rel="canonical" href="https://www.greenark.com/properties" />
                <meta property="og:title" content="Exclusive Properties | Green Ark" />
                <meta property="og:description" content="Browse our luxury sustainable real estate portfolio. Forward-thinking homes built for a new era." />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <style>{`
                .pp-spotlight-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #DFC789;
                    color: #000;
                    border: none;
                    border-radius: 999px;
                    padding: 14px 28px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: opacity 0.25s ease, transform 0.25s ease;
                    letter-spacing: 0.01em;
                }
                .pp-spotlight-btn:hover {
                    opacity: 0.88;
                    transform: translateY(-2px);
                }
                .pp-stat-chip {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    background: rgba(255,255,255,0.07);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 999px;
                    padding: 7px 16px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.82rem;
                    font-weight: 500;
                    color: #ddd;
                }
                .pp-spotlight-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    background: rgba(223,199,137,0.1);
                    border: 1px solid rgba(223,199,137,0.28);
                    border-radius: 999px;
                    padding: 6px 16px;
                    margin-bottom: 20px;
                }
            `}</style>

            {/* ── Spotlight Hero ── */}
            <div style={{
                width: '100%',
                height: '85vh',
                minHeight: '600px',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
                cursor: 'pointer',
            }}
                onClick={() => navigate(`/property/${spotlight.id}`)}
            >
                {/* Background Image */}
                <img
                    src={spotlight.heroImage}
                    alt={spotlight.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.8s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)',
                    pointerEvents: 'none',
                }} />

                {/* Content */}
                <div style={{
                    position: 'absolute',
                    bottom: '52px',
                    left: '52px',
                    right: '52px',
                    color: '#fff',
                    pointerEvents: 'none',
                }}>
                    {/* Spotlight label */}
                    <div className="pp-spotlight-pill">
                        <Sparkles size={12} color="#DFC789" strokeWidth={2} />
                        <span style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: '#DFC789',
                        }}>
                            Property Spotlight
                        </span>
                    </div>

                    {/* Location */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '12px' }}>
                        <MapPin size={13} color="#DFC789" strokeWidth={2} />
                        <span style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            color: '#ccc',
                            letterSpacing: '0.04em',
                        }}>
                            {spotlight.location}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="mobile-font-h1" style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        margin: '0 0 6px 0',
                        lineHeight: 1.0,
                        letterSpacing: '-0.03em',
                        textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                    }}>
                        {spotlight.title}
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '1rem',
                        fontWeight: 300,
                        color: '#999',
                        margin: '0 0 28px 0',
                    }}>
                        {spotlight.subtitle}
                    </p>

                    {/* Stat chips + CTA */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', pointerEvents: 'all' }}>
                        <div className="pp-stat-chip">
                            <Bed size={13} color="#DFC789" /> {spotlight.beds} Beds
                        </div>
                        <div className="pp-stat-chip">
                            <Bath size={13} color="#DFC789" /> {spotlight.baths} Baths
                        </div>
                        <div className="pp-stat-chip">
                            <Maximize2 size={13} color="#DFC789" /> {spotlight.area}
                        </div>

                        {/* Price */}
                        <div style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: '#DFC789',
                            marginLeft: '8px',
                        }}>
                            {spotlight.price}
                        </div>

                        {/* CTA button */}
                        <button
                            className="pp-spotlight-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/property/${spotlight.id}`);
                            }}
                            style={{ marginLeft: 'auto' }}
                        >
                            View Property <ArrowRight size={16} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Properties Grid ── */}
            <PropertiesGrid />
        </div>
    );
};

export default PropertiesPage;

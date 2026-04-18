import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Maximize2, Calendar } from 'lucide-react';
import propertyData from './propertyData';
import PropertyHighlights from './PropertyHighlights';
import PropertyGallery from './PropertyGallery';



const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const propertyIndex = parseInt(id, 10) - 1;
    const property = propertyData[propertyIndex] || propertyData[0];

    const { title, subtitle, location, price, description, features, heroImage } = property;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": title,
        "description": description,
        "url": `https://www.greenark.com/property/${id}`,
        "offers": {
            "@type": "Offer",
            "price": price.replace(/[^0-9.-]+/g, ""),
            "priceCurrency": "USD"
        }
    };

    return (
        <div style={{
            flex: 1,
            height: '100%',
            backgroundColor: '#000',
            position: 'relative',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            boxSizing: 'border-box',
        }}>
            <Helmet>
                <title>{title} | Green Ark Properties</title>
                <meta name="description" content={`${title} - ${subtitle} located in ${location}. ${description.substring(0, 150)}...`} />
                <link rel="canonical" href={`https://www.greenark.com/property/${id}`} />
                <meta property="og:title" content={`${title} | Green Ark`} />
                <meta property="og:description" content={`${title} - ${subtitle} located in ${location}.`} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <style>{`
                .pd-hero-btn {
                    position: absolute;
                    top: 32px;
                    left: 32px;
                    background: rgba(255,255,255,0.08);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 50%;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #fff;
                    z-index: 10;
                    transition: background 0.3s ease, border-color 0.3s ease;
                }
                .pd-hero-btn:hover {
                    background: rgba(223,199,137,0.15);
                    border-color: rgba(223,199,137,0.4);
                }
                .pd-status-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(223,199,137,0.12);
                    border: 1px solid rgba(223,199,137,0.3);
                    border-radius: 999px;
                    padding: 6px 16px;
                    margin-bottom: 20px;
                }
                .pd-stat-badge {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.07);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 999px;
                    padding: 8px 18px;
                    color: #fff;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.85rem;
                    font-weight: 500;
                }
                .pd-content {
                    padding: 60px 48px;
                    display: flex;
                    flex-direction: column;
                    gap: 80px;
                    box-sizing: border-box;
                }
                @media (max-width: 768px) {
                    .pd-hero-btn { top: 20px; left: 20px; }
                    .pd-content { padding: 32px 20px; gap: 50px; }
                    .pd-stats-row { flex-wrap: wrap !important; gap: 10px !important; }
                }
            `}</style>

            {/* ── Hero ── */}
            <div style={{
                width: '100%',
                height: '90vh',
                minHeight: '580px',
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
            }}>
                {/* Background Image */}
                <img
                    src={property.heroImage}
                    alt={property.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Multi-stop gradient overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.15) 100%)',
                }} />

                {/* Back Button */}
                <button className="pd-hero-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                </button>

                {/* Hero Content */}
                <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    left: '48px',
                    right: '48px',
                    color: '#fff',
                }}>
                    {/* Status pill */}
                    <div className="pd-status-pill">
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#DFC789', display: 'inline-block', flexShrink: 0 }} />
                        <span style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: '#DFC789',
                        }}>{property.status}</span>
                    </div>

                    {/* Location line */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                        <MapPin size={14} color="#DFC789" strokeWidth={2} />
                        <span style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            color: '#ccc',
                            letterSpacing: '0.05em',
                        }}>{property.location}</span>
                    </div>

                    {/* Title */}
                    <h1 className="mobile-font-h1" style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 800,
                        margin: '0 0 6px 0',
                        lineHeight: 1.0,
                        letterSpacing: '-0.03em',
                        color: '#ffffff',
                        textShadow: '0 2px 24px rgba(0,0,0,0.4)',
                    }}>
                        {property.title}
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '1rem',
                        fontWeight: 300,
                        color: '#aaa',
                        margin: '0 0 32px 0',
                        letterSpacing: '0.02em',
                    }}>{property.subtitle}</p>

                    {/* Stat badges row */}
                    <div className="pd-stats-row" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <div className="pd-stat-badge">
                            <Bed size={14} color="#DFC789" /> {property.beds} Beds
                        </div>
                        <div className="pd-stat-badge">
                            <Bath size={14} color="#DFC789" /> {property.baths} Baths
                        </div>
                        <div className="pd-stat-badge">
                            <Maximize2 size={14} color="#DFC789" /> {property.area}
                        </div>
                        <div className="pd-stat-badge">
                            <Calendar size={14} color="#DFC789" /> Built {property.yearBuilt}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Body Content ── */}
            <div className="pd-content">
                <PropertyHighlights
                    price={property.price}
                    area={property.area}
                    address={property.location}
                    beds={property.beds}
                    baths={property.baths}
                    description={property.description}
                    features={property.features}
                />
                <PropertyGallery images={property.galleryImages} />
            </div>
        </div>
    );
};

export default PropertyDetails;

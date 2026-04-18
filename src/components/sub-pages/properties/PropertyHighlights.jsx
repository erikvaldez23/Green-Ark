import React from 'react';
import { DollarSign, Maximize2, MapPin, Bed, Bath, CheckCircle2 } from 'lucide-react';

const MetricCard = ({ icon, value, label }) => (
    <div style={{
        backgroundColor: '#0d0d0d',
        borderRadius: '24px',
        padding: '32px',
        border: '1px solid #1e1e1e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '180px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.4s ease, transform 0.4s ease',
    }}
        onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#2e2e2e';
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#1e1e1e';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
    >
        {/* Subtle glow */}
        <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(223,199,137,0.12), transparent)',
        }} />

        {/* Icon */}
        <div style={{
            width: '48px', height: '48px', borderRadius: '14px',
            background: 'rgba(223,199,137,0.08)',
            border: '1px solid rgba(223,199,137,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
            {icon}
        </div>

        {/* Values */}
        <div>
            <div style={{
                color: '#ffffff',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 700,
                margin: '0 0 4px 0',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
            }}>
                {value}
            </div>
            <span style={{
                color: '#555',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
            }}>
                {label}
            </span>
        </div>
    </div>
);

const PropertyHighlights = ({
    price = '$12,500,000',
    area = '12,500 sq ft',
    address = '1234 Luxury Lane, Beverly Hills, CA 90210',
    beds = 6,
    baths = 8,
    description = 'This architectural masterpiece redefines luxury living. Spanning over 12,000 square feet, the residence offers a seamless blend of indoor and outdoor spaces, perfect for entertaining on a grand scale.',
    features = [],
}) => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '60px' }}>
            <style>{`
                .ph-feature-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid #222;
                    border-radius: 999px;
                    padding: 8px 20px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.82rem;
                    font-weight: 500;
                    color: #bbb;
                    transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
                    cursor: default;
                }
                .ph-feature-tag:hover {
                    background: rgba(223,199,137,0.08);
                    border-color: rgba(223,199,137,0.3);
                    color: #DFC789;
                }
                .ph-divider-line {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, #1e1e1e, transparent);
                }
            `}</style>

            {/* ── Metrics Grid ── */}
            <div>
                {/* Section Header */}
                <div style={{ marginBottom: '32px' }}>
                    <span className="section-label">Property Details</span>
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
                        At a Glance
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '16px',
                    width: '100%',
                }}>
                    <MetricCard
                        icon={<DollarSign size={22} color="#DFC789" strokeWidth={1.5} />}
                        value={price}
                        label="Listing Price"
                    />
                    <MetricCard
                        icon={<Maximize2 size={22} color="#DFC789" strokeWidth={1.5} />}
                        value={area}
                        label="Total Area"
                    />
                    <MetricCard
                        icon={<Bed size={22} color="#DFC789" strokeWidth={1.5} />}
                        value={beds}
                        label="Bedrooms"
                    />
                    <MetricCard
                        icon={<Bath size={22} color="#DFC789" strokeWidth={1.5} />}
                        value={baths}
                        label="Bathrooms"
                    />
                    <MetricCard
                        icon={<MapPin size={22} color="#DFC789" strokeWidth={1.5} />}
                        value={address}
                        label="Location"
                    />
                </div>
            </div>

            {/* ── Description ── */}
            <div>
                <div style={{ marginBottom: '32px' }}>
                    <span className="section-label">Overview</span>
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
                        Property Overview
                    </h2>
                </div>

                <p className="section-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.9,
                    color: '#777',
                    maxWidth: '800px',
                }}>
                    {description}
                </p>
            </div>

            {/* ── Features ── */}
            {features.length > 0 && (
                <div>
                    <div style={{ marginBottom: '32px' }}>
                        <span className="section-label">Amenities & Features</span>
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
                            What's Included
                        </h2>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                    }}>
                        {features.map((feature, i) => (
                            <div key={i} className="ph-feature-tag">
                                <CheckCircle2 size={13} color="#DFC789" strokeWidth={2} />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="ph-divider-line" />
        </div>
    );
};

export default PropertyHighlights;

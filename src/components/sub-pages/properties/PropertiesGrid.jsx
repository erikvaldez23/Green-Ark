import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import propertyData from './propertyData';

const PropertiesGrid = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const handleLearnMore = (property) => {
        navigate(`/property/${property.id}`);
    };

    return (
        <div style={{ width: '100%', boxSizing: 'border-box' }}>
            {/* Header */}
            <div style={{ marginBottom: '12px' }}>
                <span className="section-label">Our Listings</span>
                <span className="section-divider" />
                <h3 className="section-heading mobile-font-h1">Properties</h3>
            </div>

            <div style={{
                padding: '20px 0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
            }}>
                {propertyData.map((prop, index) => (
                    <div key={prop.id} style={{
                        position: 'relative',
                        height: '400px', // Increased height to accommodate content
                        borderRadius: '30px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                        boxShadow: hoveredIndex === index ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
                        border: '1px solid #222',
                    }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            src={prop.heroImage}
                            alt={prop.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.5s ease',
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: hoveredIndex === index
                                ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)' // Darker on hover
                                : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
                            transition: 'background 0.3s ease',
                        }}></div>

                        {/* Text Content */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '30px',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}>
                            <h3 style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                margin: 0,
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                            }}>
                                {prop.title}
                            </h3>

                            <p style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: '0.9rem',
                                fontWeight: 400,
                                color: '#aaa',
                                margin: 0,
                            }}>
                                {prop.subtitle}
                            </p>

                            {/* Learn More button — fades in on hover */}
                            <div style={{
                                maxHeight: hoveredIndex === index ? '60px' : '0',
                                opacity: hoveredIndex === index ? 1 : 0,
                                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                                transition: 'all 0.35s ease',
                                overflow: 'hidden',
                                marginTop: '4px',
                            }}>
                                <button style={{
                                    backgroundColor: '#DFC789',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '10px 24px',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    letterSpacing: '0.02em',
                                }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLearnMore(prop);
                                    }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertiesGrid;

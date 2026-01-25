import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import heroImg from '../../../assets/luxury_estate_hero.png'; // Default/Fallback image
import PropertyHighlights from './PropertyHighlights';
import PropertyGallery from './PropertyGallery';

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // In a real app, fetch property data by ID here.
    // For now, we'll use a placeholder or static content for the Hero.
    const property = {
        title: "The Azure Villa", // Placeholder title
        location: "Coastal Luxury",
        image: heroImg
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
            gap: '20px',
            padding: '20px',
            boxSizing: 'border-box',
        }}>
            {/* Hero Section */}
            <div style={{
                width: '100%',
                height: '85vh',
                minHeight: '600px',
                borderRadius: '30px',
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
            }}>
                {/* Background Image */}
                <img
                    src={property.image}
                    alt={property.title}
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
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)',
                }}></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#fff',
                        zIndex: 10,
                        transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                >
                    <ArrowLeft size={24} />
                </button>

                {/* Hero Content */}
                <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    left: '60px',
                    color: '#fff',
                    maxWidth: '800px',
                }}>
                    <h4 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: '#DFC789', // Gold
                        margin: '0 0 15px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                    }}>
                        {property.location}
                    </h4>
                    <h1 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '4rem',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.1,
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    }}>
                        {property.title} {id && `(${id})`}
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div style={{ width: '100%', boxSizing: 'border-box' }}>
                <PropertyHighlights />
                <PropertyGallery />
            </div>
        </div>
    );
};

export default PropertyDetails;

import React from 'react';
import projectImage from '../../../assets/listing_prestige.png'; // High-quality building image

const ArkProjectSpotlight = () => {
    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            marginBottom: '40px',
        }}>
            <div style={{
                position: 'relative',
                width: '100%',
                height: '85vh',
                borderRadius: '30px',
                overflow: 'hidden',
            }}>
                {/* Background Image */}
                <img
                    src={projectImage}
                    alt="Project Spotlight"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />

                {/* Dark Gradient Overlay for text readability */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
                }}></div>

                {/* Content Overlay */}
                <div style={{
                    position: 'absolute',
                    top: '60px',
                    left: '30px',
                    bottom: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    maxWidth: '600px',
                    gap: '20px',
                }}>
                    {/* Header */}
                    <h3 style={{
                        color: '#DFC789', // Gold color
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        margin: 0,
                    }}>
                        Project Spotlight
                    </h3>

                    {/* Project Title */}
                    <h2 style={{
                        color: '#fff',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.1,
                    }}>
                        The Sentient Villa
                    </h2>

                    {/* Description */}
                    <p style={{
                        color: '#ccc',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.1rem',
                        fontWeight: 300,
                        lineHeight: 1.6,
                        margin: 0,
                    }}>
                        Experience the world's first fully autonomous luxury residence. Powered by Ark OS, The Sentient Villa adapts to your lifestyle, managing energy, security, and ambiance with predictive AI.
                    </p>

                    {/* Action Button */}
                    <button style={{
                        backgroundColor: '#DFC789',
                        color: '#000',
                        border: 'none',
                        borderRadius: '30px',
                        padding: '12px 30px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                        cursor: 'pointer',
                        alignSelf: 'flex-start',
                        marginTop: '10px',
                    }}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArkProjectSpotlight;

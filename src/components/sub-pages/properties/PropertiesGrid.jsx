import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import opulenceImg from '../../../assets/listing_opulence.png';
import harmonyImg from '../../../assets/listing_harmony.png';
import prestigeImg from '../../../assets/listing_prestige.png';
import poolImg from '../../../assets/gallery_pool.png';
import bedroomImg from '../../../assets/gallery_bedroom.png';
import heroImg from '../../../assets/luxury_estate_hero.png';

// Mock Data
const properties = [
    { title: 'The Azure Villa', subtitle: "Coastal Luxury", description: "Experience unparalleled ocean views and modern design in this exclusive coastal retreat.", image: poolImg },
    { title: 'Opulence Estate', subtitle: "Historic Grandeur", description: "A masterpiece of architecture featuring sprawling gardens and timeless elegance.", image: opulenceImg },
    { title: 'Serenity Heights', subtitle: "Mountain Escape", description: "Find peace above the clouds with this sustainable, off-grid mountain sanctuary.", image: bedroomImg },
    { title: 'Prestige Manor', subtitle: "Urban Sophistication", description: "Located in the heart of the city, offering world-class amenities and privacy.", image: prestigeImg },
    { title: 'Harmony Home', subtitle: "Eco-Friendly Living", description: "Designed in harmony with nature, featuring net-zero energy systems.", image: harmonyImg },
    { title: 'Legacy Ranch', subtitle: "Countryside Estate", description: "Acres of pristine land perfect for equestrian pursuits and private living.", image: heroImg },
    { title: 'The Vertex', subtitle: "Modern Penthouse", description: "Sky-high luxury with panoramic city views and smart home integration.", image: harmonyImg },
    { title: 'Golden Sands', subtitle: "Beachfront Paradise", description: "Direct beach access with private dunes and resort-style facilities.", image: opulenceImg },
];

const PropertiesGrid = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const handleLearnMore = (index) => {
        navigate(`/property/${index + 1}`);
    };

    return (
        <div style={{ width: '100%', boxSizing: 'border-box' }}>
            {/* Header */}
            <h3 style={{
                color: '#DFC789', // Gold color
                fontFamily: "'Inter', sans-serif",
                fontSize: '4rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                margin: '0 0 20px 0',
                paddingLeft: '10px'
            }}>
                Properties Showcase
            </h3>

            <div style={{
                padding: '20px 0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
            }}>
                {properties.map((prop, index) => (
                    <div key={index} style={{
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
                            src={prop.image}
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
                            gap: '10px',
                            transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(0)', // Keep stable or animate? Standard position is better.
                        }}>
                            <h3 style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '2rem',
                                fontWeight: 700,
                                margin: 0,
                                lineHeight: 1.1,
                            }}>
                                {prop.title}
                            </h3>

                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '1rem',
                                fontWeight: 400,
                                color: '#ccc',
                                margin: 0,
                                opacity: hoveredIndex === index ? 0 : 1, // Hide subtitle on hover to make room? Or keep? User asked for description BELOW header.
                                height: hoveredIndex === index ? '0' : 'auto',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                            }}>
                                {prop.subtitle}
                            </p>

                            {/* Hover Content Wrapper */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                                maxHeight: hoveredIndex === index ? '200px' : '0',
                                opacity: hoveredIndex === index ? 1 : 0,
                                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.4s ease',
                                overflow: 'hidden',
                            }}>
                                <p style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.95rem',
                                    fontWeight: 300,
                                    color: '#ddd',
                                    margin: 0,
                                    lineHeight: 1.5,
                                }}>
                                    {prop.description}
                                </p>

                                <button style={{
                                    backgroundColor: '#DFC789',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '10px 24px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    width: 'fit-content',
                                    fontFamily: "'Inter', sans-serif",
                                }}
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent parent click if parent has one
                                        handleLearnMore(index);
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

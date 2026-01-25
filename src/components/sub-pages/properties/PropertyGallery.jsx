import React from 'react';
import poolImg from '../../../assets/gallery_pool.png';
import bedroomImg from '../../../assets/gallery_bedroom.png';
import opulenceImg from '../../../assets/listing_opulence.png';
import harmonyImg from '../../../assets/listing_harmony.png';
import prestigeImg from '../../../assets/listing_prestige.png';
import heroImg from '../../../assets/luxury_estate_hero.png';
import heroImg1 from '../../../assets/luxury_estate_hero.png';
import heroImg2 from '../../../assets/luxury_estate_hero.png';

const PropertyGallery = () => {
    const images = [
        poolImg,
        bedroomImg,
        opulenceImg,
        harmonyImg,
        prestigeImg,
        heroImg,
        heroImg1,
        heroImg2
    ];

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            marginTop: '40px'
        }}>
            <h3 style={{
                color: '#fff',
                fontFamily: "'Inter', sans-serif",
                fontSize: '2rem',
                fontWeight: 700,
                margin: 0,
                borderLeft: '4px solid #DFC789', // Gold accent line
                paddingLeft: '20px',
            }}>
                Property Gallery
            </h3>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '20px',
                width: '100%',
            }}>
                {images.map((img, index) => (
                    <div key={index} style={{
                        height: '300px',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: 'pointer',
                        border: '1px solid #222',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.children[0].style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.children[0].style.transform = 'scale(1)';
                        }}
                    >
                        <img
                            src={img}
                            alt={`Gallery Image ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.5s ease',
                            }}
                        />
                        {/* Hover Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0)',
                            transition: 'background 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyGallery;

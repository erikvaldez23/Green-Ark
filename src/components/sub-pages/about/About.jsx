import React from 'react';
import { Helmet } from 'react-helmet-async';
import heroImage from '../../../assets/listing_harmony.png'; // Using listing_harmony as placeholder
import AboutHighlights from './AboutHighlights';
import AboutMission from './AboutMission';

const About = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Green Ark",
        "description": "Learn about Green Ark's mission to reshape luxury real estate through sustainability and Ark OS."
    };

    return (
        <div style={{
            flex: 1,
            height: '100%',
            backgroundColor: '#000',
            position: 'relative',
            padding: '20px',
            boxSizing: 'border-box',
            overflowY: 'auto', // Enable vertical scrolling
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        }}>
            <Helmet>
                <title>About Us | Green Ark</title>
                <meta name="description" content="Learn about Green Ark's mission to reshape luxury real estate through sustainability and decentralized technology." />
                <link rel="canonical" href="https://www.greenark.com/about" />
                <meta property="og:title" content="About Us | Green Ark" />
                <meta property="og:description" content="Learn about Green Ark's mission to reshape luxury real estate through sustainability and decentralized technology." />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            {/* 
              Hero Container 
            */}
            <div style={{
                width: '100%',
                height: '85vh',
                minHeight: '600px',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
            }}>
                <img
                    src={heroImage}
                    alt="About Green Ark"
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

                {/* Text Content */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '40px',
                    color: '#fff',
                }}>
                    <span style={{
                        display: 'block',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: '#DFC789',
                        marginBottom: '12px',
                    }}>Our Company</span>
                    <h1 className="mobile-font-h1" style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.05,
                        letterSpacing: '-0.03em',
                        textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                    }}>
                        About Green Ark
                    </h1>
                </div>
            </div>

            {/* About Highlights Section */}
            <AboutHighlights />
            <AboutMission />
        </div>
    );
};

export default About;

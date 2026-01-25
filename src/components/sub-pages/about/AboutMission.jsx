import React from 'react';

const AboutMission = () => {
    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            gap: '80px',
            paddingTop: '80px',
            paddingBottom: '80px',
            borderTop: '1px solid #333',
            borderBottom: '1px solid #333',
        }}>
            {/* Mission Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <h3 style={{
                    color: '#e0e0e0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '3.5rem', // Large, bold header
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.1,
                }}>
                    Our Mission
                </h3>
                <p style={{
                    color: '#ccc',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    lineHeight: '1.6',
                    margin: 0,
                    maxWidth: '800px', // Limit width for readability
                }}>
                    To create high-impact, intelligent, and globally connected developments that are sustainable, data-driven, and community-first.
                </p>
            </div>

            {/* Philosophy Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <h3 style={{
                    color: '#e0e0e0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '3.5rem', // Large, bold header
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.1,
                }}>
                    Our Philosophy
                </h3>
                <p style={{
                    color: '#ccc',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    lineHeight: '1.6',
                    margin: 0,
                    maxWidth: '800px',
                }}>
                    We believe the future of real estate isn’t about buildings. It’s about designing environments that learn, evolve, and serve generations to come. With AI in our tools and purpose in our process, we build with reverence.
                </p>
            </div>
        </div>
    );
};

export default AboutMission;

import React from 'react';
import { BrainCircuit, Building2, Home, Recycle } from 'lucide-react';

const Blueprint = () => {
    const accentColor = '#DFC789'; // Gold

    const items = [
        {
            icon: <BrainCircuit size={48} color={accentColor} strokeWidth={1.5} />,
            title: 'Smart Cities',
            desc: 'Designed with AI, powered by purpose.'
        },
        {
            icon: <Building2 size={48} color={accentColor} strokeWidth={1.5} />,
            title: 'Mixed-Use Towers',
            desc: 'Modular, efficient, connected.'
        },
        {
            icon: <Home size={48} color={accentColor} strokeWidth={1.5} />,
            title: 'Eco Communities',
            desc: 'Off-grid carbon aware. Future ready.'
        },
        {
            icon: <Recycle size={48} color={accentColor} strokeWidth={1.5} />,
            title: 'Regenerative Projects',
            desc: 'Built to give back more than they take.'
        },
    ];

    return (
        <div style={{
            width: '100%',
            padding: '80px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '80px',
            boxSizing: 'border-box',
        }}>
            {/* Title */}
            <div style={{ width: '100%', textAlign: 'left' }}>
                <h2 style={{
                    color: '#fff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '4rem',
                    fontWeight: 700,
                    margin: '0 0 20px 0',
                    lineHeight: 1.1,
                    letterSpacing: '1px',
                }}>
                    Our Blueprint for the Future
                </h2>
                <div style={{
                    width: '100px',
                    height: '2px',
                    backgroundColor: accentColor,
                    opacity: 0.8
                }}></div>
            </div>

            {/* Grid of Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                width: '100%',
            }}>
                {items.map((item, index) => (
                    <div key={index} style={{
                        backgroundColor: 'rgba(17, 17, 17, 0.6)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '30px',
                        padding: '40px 30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '25px',
                        border: '1px solid #222',
                        transition: 'all 0.4s ease',
                        cursor: 'default',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.borderColor = accentColor;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = '#222';
                        }}
                    >
                        <div style={{
                            marginBottom: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {item.icon}
                        </div>
                        <div>
                            <h3 style={{
                                color: '#fff',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: '1.75rem',
                                margin: '0 0 15px 0',
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                color: '#ccc',
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '1.1rem',
                                margin: 0,
                                lineHeight: '1.6',
                                fontWeight: 300,
                            }}>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quote */}
            <div style={{
                marginTop: '40px',
                textAlign: 'center',
            }}>
                <p style={{
                    color: accentColor,
                    fontFamily: "'Italiana', serif",
                    fontSize: '3.5rem',
                    fontStyle: 'italic',
                    margin: 0,
                    lineHeight: '1.2',
                }}>
                    "The best way to predict the future is to create it."
                </p>
            </div>
        </div>
    );
};

export default Blueprint;

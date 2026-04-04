import React from 'react';
import { BrainCircuit, Building2, Home, Recycle } from 'lucide-react';

const Blueprint = () => {
    const accentColor = '#DFC789';

    const items = [
        {
            icon: <BrainCircuit size={36} color={accentColor} strokeWidth={1.5} />,
            number: '01',
            title: 'Smart Cities',
            desc: 'Designed with AI, powered by purpose.'
        },
        {
            icon: <Building2 size={36} color={accentColor} strokeWidth={1.5} />,
            number: '02',
            title: 'Mixed-Use Towers',
            desc: 'Modular, efficient, connected.'
        },
        {
            icon: <Home size={36} color={accentColor} strokeWidth={1.5} />,
            number: '03',
            title: 'Eco Communities',
            desc: 'Off-grid, carbon aware. Future ready.'
        },
        {
            icon: <Recycle size={36} color={accentColor} strokeWidth={1.5} />,
            number: '04',
            title: 'Regenerative Projects',
            desc: 'Built to give back more than they take.'
        },
    ];

    return (
        <div style={{
            width: '100%',
            padding: '100px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
            boxSizing: 'border-box',
            borderTop: '1px solid #1a1a1a',
        }}>
            <style>{`
                .blueprint-card {
                    background: rgba(14, 14, 14, 0.8);
                    border: 1px solid #1a1a1a;
                    border-radius: 24px;
                    padding: 36px 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    transition: border-color 0.4s ease, transform 0.4s ease;
                    cursor: default;
                }
                .blueprint-card::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 1px;
                    background: linear-gradient(90deg, #DFC789, transparent);
                    transition: width 0.5s ease;
                }
                .blueprint-card:hover::after {
                    width: 100%;
                }
                .blueprint-card:hover {
                    border-color: #2a2a2a;
                    transform: translateY(-5px);
                }
                .blueprint-card-num {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    color: #DFC789;
                    text-transform: uppercase;
                }
                .blueprint-card-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #e0e0e0;
                    margin: 0;
                    letter-spacing: -0.01em;
                    transition: color 0.3s;
                }
                .blueprint-card:hover .blueprint-card-title {
                    color: #fff;
                }
                .blueprint-card-desc {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 300;
                    color: #555;
                    line-height: 1.7;
                    margin: 0;
                }
                .blueprint-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    width: 100%;
                }
                .blueprint-quote {
                    font-family: 'Italiana', serif;
                    font-size: clamp(1.8rem, 3vw, 3rem);
                    font-style: italic;
                    color: #DFC789;
                    margin: 0;
                    line-height: 1.3;
                    text-align: center;
                    opacity: 0.8;
                }
                @media (max-width: 768px) {
                    .blueprint-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
            `}</style>

            {/* Header */}
            <div className="section-animate">
                <span className="section-label">What We Build</span>
                <span className="section-divider" />
                <h2 className="section-heading">Our Blueprint<br />for the Future</h2>
                <p className="section-body" style={{ maxWidth: '520px' }}>
                    Every structure we conceive is a living system — built to adapt, sustain, and outlast the century.
                </p>
            </div>

            {/* Card Grid */}
            <div className="blueprint-grid section-animate">
                {items.map((item, i) => (
                    <div key={i} className="blueprint-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span className="blueprint-card-num">{item.number}</span>
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="blueprint-card-title">{item.title}</h3>
                            <p className="blueprint-card-desc" style={{ marginTop: '8px' }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quote */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0',
                padding: '60px 20px',
                borderTop: '1px solid #1a1a1a',
                borderBottom: '1px solid #1a1a1a',
                position: 'relative',
            }}>
                {/* Decorative quotemark */}
                <span style={{
                    fontFamily: "'Italiana', serif",
                    fontSize: '8rem',
                    lineHeight: 1,
                    color: '#1a1a1a',
                    userSelect: 'none',
                    marginBottom: '-20px',
                }}>"</span>

                <p style={{
                    fontFamily: "'Italiana', serif",
                    fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                    fontStyle: 'italic',
                    color: '#c0c0c0',
                    margin: '0 0 28px 0',
                    lineHeight: 1.35,
                    textAlign: 'center',
                    maxWidth: '680px',
                    fontWeight: 400,
                }}>
                    The best way to predict the future is to create it.
                </p>

                {/* Author line */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                }}>
                    <div style={{ width: '30px', height: '1px', background: '#333' }} />
                    <span style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#444',
                    }}>Person</span>
                    <div style={{ width: '30px', height: '1px', background: '#333' }} />
                </div>
            </div>
        </div>
    );
};

export default Blueprint;

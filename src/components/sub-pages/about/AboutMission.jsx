import React from 'react';

const pillars = [
    { number: '01', title: 'Sustainability' },
    { number: '02', title: 'Intelligence' },
    { number: '03', title: 'Community' },
    { number: '04', title: 'Longevity' },
];

const AboutMission = () => {
    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            marginTop: '80px',
            paddingTop: '80px',
            paddingBottom: '100px',
            borderTop: '1px solid #1a1a1a',
        }}>
            <style>{`
                @keyframes expandLine {
                    from { width: 0; }
                    to { width: 60px; }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .mission-section {
                    animation: fadeUp 0.7s ease forwards;
                }
                .mission-divider {
                    display: block;
                    width: 60px;
                    height: 1px;
                    background: #DFC789;
                    margin-bottom: 28px;
                    animation: expandLine 0.8s ease forwards;
                }
                .mission-label {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #DFC789;
                    margin: 0 0 16px 0;
                }
                .mission-heading {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(2.2rem, 4vw, 3.5rem);
                    font-weight: 700;
                    color: #f0f0f0;
                    margin: 0 0 24px 0;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }
                .mission-body {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.1rem;
                    font-weight: 300;
                    color: #888;
                    line-height: 1.8;
                    margin: 0;
                    max-width: 560px;
                }
                .mission-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    align-items: start;
                }
                .mission-right-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding-top: 4px;
                }
                .mission-right-meta span {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.8rem;
                    color: #444;
                    letter-spacing: 0.05em;
                }

                /* — Pillars — */
                .pillars-row {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    margin-top: 60px;
                }
                .pillar-card {
                    position: relative;
                    padding: 40px 32px 36px;
                    border: 1px solid #1a1a1a;
                    border-radius: 20px;
                    box-sizing: border-box;
                    overflow: hidden;
                    transition: border-color 0.4s ease, transform 0.4s ease;
                    cursor: default;
                }
                .pillar-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at bottom left, rgba(223,199,137,0.06) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    border-radius: inherit;
                }
                .pillar-card:hover::before {
                    opacity: 1;
                }
                .pillar-card:hover {
                    border-color: #2d2d2d;
                    transform: translateY(-4px);
                }
                .pillar-card-number {
                    font-family: 'Inter', sans-serif;
                    font-size: clamp(3.5rem, 5vw, 5rem);
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.04em;
                    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: block;
                    margin-bottom: 32px;
                    transition: background 0.4s ease;
                    user-select: none;
                }
                .pillar-card:hover .pillar-card-number {
                    background: linear-gradient(135deg, #DFC789 0%, #a8945a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .pillar-card-title {
                    font-family: 'Inter', sans-serif;
                    font-size: 1.05rem;
                    font-weight: 500;
                    color: #888;
                    margin: 0;
                    letter-spacing: 0.01em;
                    transition: color 0.3s ease;
                }
                .pillar-card:hover .pillar-card-title {
                    color: #ccc;
                }
                .pillar-card-line {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 1px;
                    background: linear-gradient(90deg, #DFC789, transparent);
                    transition: width 0.5s ease;
                }
                .pillar-card:hover .pillar-card-line {
                    width: 100%;
                }

                @media (max-width: 768px) {
                    .mission-layout {
                        grid-template-columns: 1fr !important;
                    }
                    .mission-right-meta {
                        display: none !important;
                    }
                    .pillars-row {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 12px !important;
                        margin-top: 40px !important;
                    }
                    .pillar-card {
                        padding: 28px 22px 26px !important;
                    }
                }
            `}</style>

            {/* — MISSION — */}
            <div className="mission-section" style={{ marginBottom: '80px' }}>
                <p className="mission-label">01 — Mission</p>
                <span className="mission-divider" />

                <div className="mission-layout">
                    <div>
                        <h3 className="mission-heading">Our Mission</h3>
                        <p className="mission-body">
                            To create high-impact, intelligent, and globally connected developments that are sustainable, data-driven, and community-first.
                        </p>
                    </div>
                    <div className="mission-right-meta">
                        <span>EST. 2024</span>
                        <span>GLOBALLY CONNECTED</span>
                        <span>SUSTAINABILITY FORWARD</span>
                    </div>
                </div>
            </div>

            {/* — PHILOSOPHY — */}
            <div className="mission-section" style={{ animationDelay: '0.15s' }}>
                <p className="mission-label">02 — Philosophy</p>
                <span className="mission-divider" />

                <div className="mission-layout">
                    <div>
                        <h3 className="mission-heading">Our Philosophy</h3>
                        <p className="mission-body">
                            We believe the future of real estate isn't about buildings. It's about designing environments that learn, evolve, and serve generations to come. With AI in our tools and purpose in our process, we build with reverence.
                        </p>
                    </div>
                    <div className="mission-right-meta">
                        <span>PURPOSE-DRIVEN</span>
                        <span>AI-POWERED</span>
                        <span>GENERATIONAL IMPACT</span>
                    </div>
                </div>

                {/* — PILLARS — */}
                <div className="pillars-row">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="pillar-card">
                            <span className="pillar-card-number">{pillar.number}</span>
                            <p className="pillar-card-title">{pillar.title}</p>
                            <div className="pillar-card-line" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMission;

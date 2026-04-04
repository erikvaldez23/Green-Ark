import React from 'react';
import projectImage from '../../../assets/listing_prestige.png';

const ArkProjectSpotlight = () => {
    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            marginBottom: '20px',
        }}>
            <style>{`
                .spotlight-hero {
                    position: relative;
                    width: 100%;
                    height: 88vh;
                    border-radius: 28px;
                    overflow: hidden;
                }
                .spotlight-content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 52px;
                    max-width: 620px;
                    gap: 0;
                    box-sizing: border-box;
                }
                .spotlight-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 20px;
                    width: fit-content;
                }
                .spotlight-tag-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #DFC789;
                    flex-shrink: 0;
                }
                .spotlight-tag-text {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: #DFC789;
                }
                .spotlight-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(2.4rem, 5vw, 4rem);
                    font-weight: 800;
                    color: #fff;
                    margin: 0 0 16px 0;
                    line-height: 1.05;
                    letter-spacing: -0.035em;
                    text-shadow: 0 4px 30px rgba(0,0,0,0.4);
                }
                .spotlight-desc {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 300;
                    color: rgba(255,255,255,0.55);
                    line-height: 1.75;
                    margin: 0 0 32px 0;
                    max-width: 440px;
                }
                .spotlight-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.15);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 40px;
                    padding: 13px 28px;
                    color: #fff;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
                    width: fit-content;
                }
                .spotlight-btn:hover {
                    background: rgba(223,199,137,0.15);
                    border-color: rgba(223,199,137,0.4);
                    transform: translateY(-2px);
                }
                .spotlight-meta-strip {
                    position: absolute;
                    bottom: 52px;
                    right: 52px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-items: flex-end;
                }
                .spotlight-meta-item {
                    text-align: right;
                }
                .spotlight-meta-val {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                    letter-spacing: -0.03em;
                    line-height: 1;
                }
                .spotlight-meta-label {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.6rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.35);
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin-top: 4px;
                }
                @media (max-width: 768px) {
                    .spotlight-hero { height: auto; min-height: 70vh; }
                    .spotlight-content {
                        padding: 32px 24px !important;
                        max-width: 100% !important;
                        position: relative !important;
                        top: auto; left: auto; bottom: auto;
                        justify-content: flex-end;
                    }
                    .spotlight-meta-strip { display: none !important; }
                }
            `}</style>

            <div className="spotlight-hero">
                {/* Background Image */}
                <img
                    src={projectImage}
                    alt="The Sentient Villa — Project Spotlight"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />

                {/* Multi-layer gradient */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                        linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.05) 100%),
                        linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)
                    `,
                }} />

                {/* Left content */}
                <div className="spotlight-content">
                    <div className="spotlight-tag">
                        <div className="spotlight-tag-dot" />
                        <span className="spotlight-tag-text">Project Spotlight</span>
                    </div>

                    <h2 className="spotlight-title">The Sentient Villa</h2>

                    <p className="spotlight-desc">
                        The world's first fully autonomous luxury residence. Powered by Ark OS — adapts to your lifestyle, managing energy, security, and ambiance with predictive AI.
                    </p>

                    <button className="spotlight-btn">
                        View Details
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>

                {/* Right meta strip */}
                <div className="spotlight-meta-strip">
                    <div className="spotlight-meta-item">
                        <div className="spotlight-meta-val">$4.8M</div>
                        <div className="spotlight-meta-label">Valuation</div>
                    </div>
                    <div className="spotlight-meta-item">
                        <div className="spotlight-meta-val">8,400 ft²</div>
                        <div className="spotlight-meta-label">Living Space</div>
                    </div>
                    <div className="spotlight-meta-item">
                        <div className="spotlight-meta-val">A+</div>
                        <div className="spotlight-meta-label">ESG Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArkProjectSpotlight;

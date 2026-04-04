import React from 'react';
import heroImage from '/coin2.png';
import ArkUnlockFuture from './ArkUnlockFuture';

const ArkCrypto = () => {
    const stats = [
        { label: 'Total Supply', value: '100M', unit: 'ARK' },
        { label: 'Holders', value: '12.4K', unit: '+' },
        { label: 'Avg. APY', value: '18', unit: '%' },
        { label: 'Backed Assets', value: '$2.1B', unit: '' },
    ];

    return (
        <div style={{
            flex: 1,
            height: '100%',
            backgroundColor: '#000',
            position: 'relative',
            padding: '20px',
            boxSizing: 'border-box',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
        }}>
            <style>{`
                @keyframes coinFloat {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50%       { transform: translateY(-16px) rotate(3deg); }
                }
                @keyframes coinGlow {
                    0%, 100% { opacity: 0.3; }
                    50%       { opacity: 0.55; }
                }
                .ark-hero {
                    width: 100%;
                    min-height: 88vh;
                    border-radius: 28px;
                    background: radial-gradient(ellipse at 70% 50%, rgba(223,199,137,0.07) 0%, transparent 65%),
                                radial-gradient(ellipse at 20% 80%, rgba(223,199,137,0.04) 0%, transparent 50%),
                                #080808;
                    border: 1px solid #1a1a1a;
                    position: relative;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    padding: 60px;
                    box-sizing: border-box;
                    flex-shrink: 0;
                }
                .ark-hero-glow {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(223,199,137,0.12) 0%, transparent 70%);
                    right: -50px;
                    top: 50%;
                    transform: translateY(-50%);
                    animation: coinGlow 4s ease-in-out infinite;
                    pointer-events: none;
                }
                .ark-coin-img {
                    width: 100%;
                    max-width: 380px;
                    margin: 0 auto;
                    display: block;
                    animation: coinFloat 6s ease-in-out infinite;
                    filter: drop-shadow(0 30px 60px rgba(223,199,137,0.2));
                }
                .ark-hero-left {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .ark-hero-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid #2a2a2a;
                    border-radius: 40px;
                    padding: 8px 16px;
                    margin-bottom: 32px;
                    width: fit-content;
                }
                .ark-hero-tag-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #DFC789;
                    animation: coinGlow 2s ease-in-out infinite;
                }
                .ark-hero-tag-text {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #DFC789;
                }
                .ark-hero-h1 {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(3rem, 5vw, 5.5rem);
                    font-weight: 800;
                    color: #f0f0f0;
                    line-height: 1.0;
                    letter-spacing: -0.04em;
                    margin: 0 0 24px 0;
                }
                .ark-hero-h1 span {
                    color: #DFC789;
                }
                .ark-hero-p {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1rem;
                    font-weight: 300;
                    color: #666;
                    line-height: 1.75;
                    margin: 0 0 40px 0;
                    max-width: 440px;
                }
                .ark-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #DFC789;
                    border: none;
                    border-radius: 40px;
                    padding: 14px 32px;
                    color: #000;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: background 0.3s ease, transform 0.3s ease;
                }
                .ark-btn-primary:hover {
                    background: #f0d98a;
                    transform: translateY(-2px);
                }
                .ark-btn-ghost {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: transparent;
                    border: 1px solid #222;
                    border-radius: 40px;
                    padding: 14px 32px;
                    color: #888;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: border-color 0.3s ease, color 0.3s ease;
                }
                .ark-btn-ghost:hover {
                    border-color: #DFC789;
                    color: #DFC789;
                }
                .ark-stats-strip {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    border: 1px solid #1a1a1a;
                    border-radius: 24px;
                    overflow: hidden;
                    margin-top: 20px;
                }
                .ark-stat {
                    padding: 36px 32px;
                    border-right: 1px solid #1a1a1a;
                    box-sizing: border-box;
                    transition: background 0.3s ease;
                }
                .ark-stat:last-child { border-right: none; }
                .ark-stat:hover { background: rgba(255,255,255,0.02); }
                .ark-stat-value {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(2rem, 3vw, 2.8rem);
                    font-weight: 800;
                    color: #f0f0f0;
                    letter-spacing: -0.04em;
                    line-height: 1;
                    margin-bottom: 8px;
                }
                .ark-stat-value span {
                    color: #DFC789;
                    font-size: 0.6em;
                    font-weight: 600;
                    letter-spacing: 0;
                    vertical-align: super;
                }
                .ark-stat-label {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #444;
                }
                @media (max-width: 768px) {
                    .ark-hero {
                        grid-template-columns: 1fr !important;
                        min-height: auto !important;
                        padding: 36px 24px !important;
                        gap: 40px;
                    }
                    .ark-hero-glow { display: none; }
                    .ark-coin-img { max-width: 260px !important; }
                    .ark-stats-strip {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .ark-stat {
                        border-bottom: 1px solid #1a1a1a;
                        padding: 24px 20px !important;
                    }
                    .ark-stat:nth-child(odd) {
                        border-right: 1px solid #1a1a1a !important;
                    }
                    .ark-stat:nth-child(even) { border-right: none; }
                }
            `}</style>

            {/* ─ HERO ─ */}
            <div className="ark-hero">
                <div className="ark-hero-glow" />

                {/* Left: Text */}
                <div className="ark-hero-left">
                    {/* <div className="ark-hero-tag">
                        <div className="ark-hero-tag-dot" />
                        <span className="ark-hero-tag-text">Live on Mainnet</span>
                    </div> */}

                    <h1 className="ark-hero-h1">
                        The Coin<br />Built for<br /><span>Real Assets.</span>
                    </h1>
                    <p className="ark-hero-p">
                        Ark Coin bridges the gap between decentralized finance and tangible real estate value. Secure, scalable, and built with purpose.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <button className="ark-btn-primary">
                            Get ARK
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                        <button className="ark-btn-ghost">Learn More</button>
                    </div>
                </div>

                {/* Right: Coin Image */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={heroImage} alt="Ark Coin" className="ark-coin-img" />
                </div>
            </div>

            {/* ─ STATS STRIP ─ */}
            <div className="ark-stats-strip">
                {stats.map((s, i) => (
                    <div key={i} className="ark-stat">
                        <div className="ark-stat-value">
                            {s.value}{s.unit && <span>{s.unit}</span>}
                        </div>
                        <div className="ark-stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* ─ FEATURES ─ */}
            <ArkUnlockFuture />
        </div>
    );
};

export default ArkCrypto;

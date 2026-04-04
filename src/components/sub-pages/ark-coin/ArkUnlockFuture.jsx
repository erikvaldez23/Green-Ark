import React from 'react';
import { PieChart, Landmark, Leaf } from 'lucide-react';

const features = [
    {
        id: '01',
        title: 'Fractional Ownership',
        description: 'Own a piece of every Green Ark asset you believe in. Invest with flexibility and ease — from a single token.',
        icon: <PieChart size={20} color="#DFC789" strokeWidth={1.5} />,
        tag: 'Invest',
    },
    {
        id: '02',
        title: 'Governance Voting',
        description: 'Shape the future of Ark through community decisions. Your voice matters in every proposal our ecosystem puts forward.',
        icon: <Landmark size={20} color="#DFC789" strokeWidth={1.5} />,
        tag: 'Participate',
    },
    {
        id: '03',
        title: 'ESG Rewards',
        description: 'Earn sustainability rewards and gain exclusive insights via ArkOS. Profitable, responsible, and future-proof.',
        icon: <Leaf size={20} color="#DFC789" strokeWidth={1.5} />,
        tag: 'Earn',
    },
];

const ArkUnlockFuture = () => {
    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            paddingTop: '80px',
            paddingBottom: '100px',
            borderTop: '1px solid #1a1a1a',
            marginTop: '20px',
        }}>
            <style>{`
                .auf-row {
                    display: flex;
                    align-items: center;
                    padding: 44px 0;
                    border-top: 1px solid #141414;
                    gap: 40px;
                    transition: background 0.3s ease;
                    position: relative;
                }
                .auf-row:last-child {
                    border-bottom: 1px solid #141414;
                }
                .auf-row-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0%;
                    height: 1px;
                    background: linear-gradient(90deg, #DFC789, transparent);
                    transition: width 0.5s ease;
                }
                .auf-row:hover .auf-row-line {
                    width: 100%;
                }
                .auf-num {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(3rem, 4vw, 4rem);
                    font-weight: 800;
                    letter-spacing: -0.06em;
                    line-height: 1;
                    background: linear-gradient(135deg, #1e1e1e 0%, #111 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    min-width: 80px;
                    transition: background 0.4s ease;
                    user-select: none;
                    flex-shrink: 0;
                }
                .auf-row:hover .auf-num {
                    background: linear-gradient(135deg, #DFC789 0%, #a8945a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .auf-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(1.4rem, 2.5vw, 2rem);
                    font-weight: 700;
                    color: #d0d0d0;
                    margin: 0 0 4px 0;
                    letter-spacing: -0.025em;
                    transition: color 0.3s ease;
                    flex: 1;
                }
                .auf-row:hover .auf-title {
                    color: #fff;
                }
                .auf-desc {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 300;
                    color: #555;
                    line-height: 1.75;
                    margin: 0;
                    flex: 1.2;
                    max-width: 480px;
                }
                .auf-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid #1f1f1f;
                    border-radius: 30px;
                    padding: 8px 16px;
                    color: #444;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    flex-shrink: 0;
                    transition: border-color 0.3s ease, color 0.3s ease;
                }
                .auf-row:hover .auf-tag {
                    border-color: #DFC789;
                    color: #DFC789;
                }
                @media (max-width: 768px) {
                    .auf-row {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 16px !important;
                        padding: 32px 0 !important;
                    }
                    .auf-tag { display: none !important; }
                    .auf-desc { max-width: 100% !important; }
                }
            `}</style>

            {/* Header */}
            <div className="section-animate" style={{ marginBottom: '60px' }}>
                <span className="section-label">Token Utility</span>
                <span className="section-divider" />
                <h2 className="section-heading">Unlock the<br />Future of Finance</h2>
                <p className="section-body" style={{ maxWidth: '480px', marginTop: '8px' }}>
                    Three core pillars that make Ark Coin more than a token — a complete financial ecosystem anchored in real-world value.
                </p>
            </div>

            {/* Feature Rows */}
            <div>
                {features.map((feature, i) => (
                    <div key={i} className="auf-row">
                        <div className="auf-row-line" />
                        <span className="auf-num">{feature.id}</span>
                        <h4 className="auf-title">{feature.title}</h4>
                        <p className="auf-desc">{feature.description}</p>
                        <div className="auf-tag">
                            {feature.icon}
                            {feature.tag}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArkUnlockFuture;

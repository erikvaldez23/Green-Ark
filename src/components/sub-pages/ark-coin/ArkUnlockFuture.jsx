import React, { useState } from 'react';
import { PieChart, Landmark, Leaf } from 'lucide-react';

const ArkUnlockFuture = () => {
    const features = [
        {
            id: '01',
            title: 'Fractional Ownership',
            description: 'Own a piece of every Green Ark asset you believe in. Invest with flexibility and ease.',
            icon: <PieChart size={24} color="#DFC789" /> // Gold color
        },
        {
            id: '02',
            title: 'Governance Voting',
            description: 'Shape the future of Ark through community decisions. Your voice matters in our ecosystem.',
            icon: <Landmark size={24} color="#DFC789" />
        },
        {
            id: '03',
            title: 'ESG Rewards',
            description: 'Earn sustainability rewards & gain exclusive insights via ArkOS. Profitable and responsible.',
            icon: <Leaf size={24} color="#DFC789" />
        }
    ];

    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '80px',
        }}>
            {/* Main Section Header */}
            <div style={{ marginBottom: '60px', textAlign: 'left' }}>
                <h3 style={{
                    color: '#DFC789',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '3rem',
                    fontWeight: 700,
                    margin: 0,
                }}>
                    Unlock the Future
                </h3>
            </div>

            {/* List Rows */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '40px 0',
                            borderTop: '1px solid #222',
                            borderBottom: index === features.length - 1 ? '1px solid #222' : 'none',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        {/* Left: Number & Title */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flex: 1 }}>
                            <span style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: '#333', // Dark text for subtle number look
                            }}>
                                {feature.id}
                            </span>
                            <h4 style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '2rem',
                                fontWeight: 600,
                                color: '#fff',
                                margin: 0,
                            }}>
                                {feature.title}
                            </h4>
                        </div>

                        {/* Center: Description */}
                        <div style={{ flex: 1.5, paddingRight: '40px' }}>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '1.1rem',
                                color: '#aaa',
                                lineHeight: '1.5',
                                margin: 0,
                            }}>
                                {feature.description}
                            </p>
                        </div>

                        {/* Right: Icon */}
                        <div>
                            {feature.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArkUnlockFuture;

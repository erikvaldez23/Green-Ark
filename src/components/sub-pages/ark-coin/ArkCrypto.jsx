import React from 'react';
import heroImage from '/coin2.png'; // Using dark globe as a placeholder for crypto/tech feel
import ArkUnlockFuture from './ArkUnlockFuture';
const ArkCrypto = () => {
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
                    alt="Ark Crypto"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
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
                    bottom: '30px',
                    left: '30px',
                    color: '#fff',
                }}>
                    <h1 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '4rem',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.1,
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    }}>
                        Ark Crypto
                    </h1>
                </div>
            </div>

            {/* Content Placeholder */}
            {/* Unlock Future Section */}
            <ArkUnlockFuture />
        </div>
    );
};

export default ArkCrypto;

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
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        }}>
            {/* 
              Hero Container 
            */}
            <div style={{
                width: '100%',
                height: '65vh',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
            }}>
                {/* Left Side: Image */}
                <div style={{
                    flex: 1,
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img
                        src={heroImage}
                        alt="Ark Coin Logo"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            display: 'block',
                        }}
                    />
                </div>

                {/* Right Side: Text Content */}
                <div style={{
                    flex: 1,
                    // paddingRight: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: '#fff',
                }}>
                    <h1 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '4.5rem',
                        fontWeight: 700,
                        margin: '0 0 15px 0',
                        lineHeight: 1.1,
                    }}>
                        Ark Coin
                    </h1>
                    <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.25rem',
                        color: '#ccc',
                        lineHeight: 1.6,
                        margin: 0,
                        maxWidth: '600px',
                        fontWeight: 400,
                    }}>
                        The future of decentralized finance. Unlocking new possibilities with secure, fast, and scalable technology built for the modern economy. Join the revolution and power your digital assets with Ark Coin.
                    </p>
                </div>
            </div>

            {/* Content Placeholder */}
            {/* Unlock Future Section */}
            <ArkUnlockFuture />
        </div>
    );
};

export default ArkCrypto;

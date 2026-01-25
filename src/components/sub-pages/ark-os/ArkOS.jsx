import React from 'react';
import heroImage from '../../../assets/dark_globe.png'; // Placeholder for OS/Tech feel
import ArkProjectSpotlight from './ArkProjectSpotlight';
import PropertiesGrid from '../properties/PropertiesGrid';
const ArkOS = () => {
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
            {/* Project Spotlight Section as Hero */}
            <ArkProjectSpotlight />

            {/* Properties Grid */}
            <PropertiesGrid />

        </div>
    );
};

export default ArkOS;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import heroImage from '../../../assets/dark_globe.png'; // Placeholder for OS/Tech feel
import ArkProjectSpotlight from './ArkProjectSpotlight';
import PropertiesGrid from '../properties/PropertiesGrid';
const ArkOS = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Ark OS",
        "applicationCategory": "Smart Home Operating System",
        "description": "The AI-powered ecosystem automating sustainable luxury homes."
    };

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
            <Helmet>
                <title>Ark OS | Smart Home Technology</title>
                <meta name="description" content="Discover Ark OS - The world's first fully autonomous luxury residence operating system managing energy, security, and ambiance." />
                <link rel="canonical" href="https://www.greenark.com/ark-os" />
                <meta property="og:title" content="Ark OS | Smart Home Technology" />
                <meta property="og:description" content="Discover Ark OS - The world's first fully autonomous luxury residence operating system managing energy, security, and ambiance." />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>
            
            {/* Project Spotlight Section as Hero */}
            <ArkProjectSpotlight />

            {/* Properties Grid */}
            <PropertiesGrid />

        </div>
    );
};

export default ArkOS;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';
import NewListings from './NewListings';

const HomeWrapper = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Green Ark",
        "url": "https://www.greenark.com"
    };

    return (
        <div style={{
            flex: 1,
            height: '100%',
            overflowY: 'auto', // Enable vertical scrolling
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Helmet>
                <title>Green Ark | Sustainable Luxury Real Estate</title>
                <meta name="description" content="Discover tomorrow's sustainability today with Green Ark's premium properties, combining cutting-edge technology and eco-friendly design." />
                <link rel="canonical" href="https://www.greenark.com/" />
                <meta property="og:title" content="Green Ark | Sustainable Luxury Real Estate" />
                <meta property="og:description" content="Discover tomorrow's sustainability today with Green Ark's premium properties." />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            {/* Home Section (Hero + Stats) - Taking up full viewport height initially to be "above fold" */}
            <div style={{ minHeight: '100vh' }}>
                <Home />
            </div>

            {/* New Listings Section */}
            {/* <NewListings /> */}
        </div>
    );
};

export default HomeWrapper;

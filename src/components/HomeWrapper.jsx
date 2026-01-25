import React from 'react';
import Home from './Home';
import NewListings from './NewListings';

const HomeWrapper = () => {
    return (
        <div style={{
            flex: 1,
            height: '100%',
            overflowY: 'auto', // Enable vertical scrolling
            display: 'flex',
            flexDirection: 'column',
        }}>
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

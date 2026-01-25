import React from 'react';
import { DollarSign, Maximize, MapPin, CheckCircle } from 'lucide-react';

const PropertyHighlights = ({
    price = "$12,500,000",
    area = "12,500 sq ft",
    address = "1234 Luxury Lane, Beverly Hills, CA 90210",
    description = "This architectural masterpiece redefines luxury living. Spanning over 12,000 square feet, the residence offers a seamless blend of indoor and outdoor spaces, perfect for entertaining on a grand scale. Every detail has been meticulously curated, from the imported Italian marble floors to the custom walnut cabinetry. The state-of-the-art smart home system controls lighting, climate, and security with a touch, while the zero-edge infinity pool creates a visual connection with the horizon."
}) => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
        }}>
            {/* Metrics Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                width: '100%',
            }}>
                {/* Metric Card 1: Price */}
                <div style={{
                    backgroundColor: '#111',
                    borderRadius: '30px',
                    padding: '30px',
                    border: '1px solid #222',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '200px',
                    position: 'relative',
                }}>
                    <div style={{ alignSelf: 'flex-end' }}>
                        <DollarSign size={32} color="#DFC789" />
                    </div>
                    <div>
                        <div style={{
                            color: '#fff',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            margin: '0 0 5px 0',
                            lineHeight: 1,
                        }}>
                            {price}
                        </div>
                        <span style={{
                            color: '#999',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1rem',
                            fontWeight: 400,
                        }}>
                            Listing Price
                        </span>
                    </div>
                </div>

                {/* Metric Card 2: Area */}
                <div style={{
                    backgroundColor: '#111',
                    borderRadius: '30px',
                    padding: '30px',
                    border: '1px solid #222',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '200px',
                    position: 'relative',
                }}>
                    <div style={{ alignSelf: 'flex-end' }}>
                        <Maximize size={32} color="#DFC789" />
                    </div>
                    <div>
                        <div style={{
                            color: '#fff',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            margin: '0 0 5px 0',
                            lineHeight: 1,
                        }}>
                            {area}
                        </div>
                        <span style={{
                            color: '#999',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1rem',
                            fontWeight: 400,
                        }}>
                            Total Area
                        </span>
                    </div>
                </div>

                {/* Metric Card 3: Address */}
                <div style={{
                    backgroundColor: '#111',
                    borderRadius: '30px',
                    padding: '30px',
                    border: '1px solid #222',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '200px',
                    position: 'relative',
                }}>
                    <div style={{ alignSelf: 'flex-end' }}>
                        <MapPin size={32} color="#DFC789" />
                    </div>
                    <div>
                        <div style={{
                            color: '#fff',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1.5rem', // Smaller font for address to fit?
                            fontWeight: 600,
                            margin: '0 0 5px 0',
                            lineHeight: 1.2,
                        }}>
                            {address}
                        </div>
                        <span style={{
                            color: '#999',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1rem',
                            fontWeight: 400,
                        }}>
                            Location
                        </span>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '800px', // Limit width for readability
            }}>
                <h3 style={{
                    color: '#fff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                    margin: 0,
                    borderLeft: '4px solid #DFC789', // Gold accent line
                    paddingLeft: '20px',
                }}>
                    Property Overview
                </h3>
                <p style={{
                    color: '#ccc',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    margin: 0,
                    textAlign: 'left',
                }}>
                    {description}
                </p>

                {/* Optional Feature List could go here if needed, keeping it simple for now as requested */}
            </div>
        </div>
    );
};

export default PropertyHighlights;

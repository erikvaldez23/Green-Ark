import React from 'react';
import { Helmet } from 'react-helmet-async';
import heroImage from '../../../assets/listing_prestige.png'; // Using listing_prestige as distinctive hero
import ContactForm from './ContactForm';

const Contact = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Green Ark",
        "description": "Get in touch with Green Ark to inquire about sustainable luxury real estate opportunities."
    };

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
            <Helmet>
                <title>Contact Us | Green Ark</title>
                <meta name="description" content="Get in touch with Green Ark to inquire about our sustainable luxury real estate properties and investment opportunities." />
                <link rel="canonical" href="https://www.greenark.com/contact" />
                <meta property="og:title" content="Contact Us | Green Ark" />
                <meta property="og:description" content="Get in touch with Green Ark to inquire about our sustainable luxury real estate properties and investment opportunities." />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            {/* <div style={{
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
                    alt="Contact Us"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />

                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)',
                }}></div>

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
                        Contact Us
                    </h1>
                </div>
            </div> */}


            {/* Contact Form Section */}
            <ContactForm />
        </div>
    );
};

export default Contact;

import React from 'react';

const ContactForm = () => {
    const inputStyle = {
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #222',
        borderRadius: 0,
        padding: '14px 0',
        color: '#e0e0e0',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '1rem',
        fontWeight: 300,
        boxSizing: 'border-box',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    };

    const labelStyle = {
        display: 'block',
        color: '#444',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: '4px',
    };

    return (
        <div style={{
            width: '100%',
            padding: '60px 20px 40px',
            boxSizing: 'border-box',
        }}>
            <style>{`
                .cf-input:focus {
                    border-bottom-color: #DFC789 !important;
                }
                .cf-input::placeholder {
                    color: #333;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-weight: 300;
                }
                .cf-select {
                    -webkit-appearance: none;
                    appearance: none;
                    background: transparent;
                    color: #333;
                }
                .cf-select option {
                    background: #0a0a0a;
                    color: #e0e0e0;
                }
                .cf-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }
                .cf-submit {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: transparent;
                    border: 1px solid #2a2a2a;
                    border-radius: 40px;
                    padding: 16px 40px;
                    color: #e0e0e0;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.85rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    cursor: pointer;
                    margin-top: 40px;
                    transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
                }
                .cf-submit:hover {
                    border-color: #DFC789;
                    color: #DFC789;
                    background: rgba(223,199,137,0.04);
                }
                @media (max-width: 768px) {
                    .cf-row {
                        grid-template-columns: 1fr !important;
                        gap: 0 !important;
                    }
                }
            `}</style>

            {/* Header */}
            <div className="section-animate" style={{ marginBottom: '60px' }}>
                <span className="section-label">Get in Touch</span>
                <span className="section-divider" />
                <h2 className="section-heading">Let's start<br />a conversation.</h2>
                <p className="section-body" style={{ maxWidth: '480px', marginTop: '4px' }}>
                    Whether you're buying, selling, or simply curious — we're here for it. Reach out and we'll respond within one business day.
                </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                {/* Name + Email */}
                <div className="cf-row" style={{ marginBottom: '0' }}>
                    <div>
                        <label style={labelStyle}>Name</label>
                        <input className="cf-input" type="text" placeholder="First & Last Name" style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Email</label>
                        <input className="cf-input" type="email" placeholder="Email Address" style={inputStyle} />
                    </div>
                </div>

                {/* Phone + Location */}
                <div className="cf-row" style={{ marginTop: '32px' }}>
                    <div>
                        <label style={labelStyle}>Phone</label>
                        <input className="cf-input" type="tel" placeholder="Phone Number" style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Location</label>
                        <div style={{ position: 'relative' }}>
                            <select className="cf-input cf-select" style={inputStyle}>
                                <option value="" disabled>Select...</option>
                                <option value="france">France</option>
                                <option value="germany">Germany</option>
                                <option value="switzerland">Switzerland</option>
                                <option value="other">Other</option>
                            </select>
                            <div style={{
                                position: 'absolute', right: 0, top: '50%',
                                transform: 'translateY(-50%)', pointerEvents: 'none', color: '#444',
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service */}
                <div style={{ marginTop: '32px' }}>
                    <label style={labelStyle}>Service</label>
                    <div style={{ position: 'relative' }}>
                        <select className="cf-input cf-select" style={inputStyle}>
                            <option value="" disabled>Select...</option>
                            <option value="buying">Buying</option>
                            <option value="selling">Selling</option>
                            <option value="investment">Investment</option>
                            <option value="consulting">Consulting</option>
                        </select>
                        <div style={{
                            position: 'absolute', right: 0, top: '50%',
                            transform: 'translateY(-50%)', pointerEvents: 'none', color: '#444',
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div style={{ marginTop: '32px' }}>
                    <label style={labelStyle}>Message</label>
                    <textarea
                        className="cf-input"
                        placeholder="What do you need help with?"
                        rows="5"
                        style={{ ...inputStyle, resize: 'none' }}
                    />
                </div>

                {/* Submit */}
                <button type="submit" className="cf-submit">
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

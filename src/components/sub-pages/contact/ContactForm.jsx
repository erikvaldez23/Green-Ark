import React from 'react';

const ContactForm = () => {
    // Shared input style
    const inputStyle = {
        width: '100%',
        backgroundColor: '#0a0a0a',
        border: '1px solid #222',
        borderRadius: '8px',
        padding: '12px 16px',
        color: '#fff',
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
        boxSizing: 'border-box',
        outline: 'none',
        marginBottom: '20px',
    };

    const labelStyle = {
        display: 'block',
        color: '#888',
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.85rem',
        marginBottom: '8px',
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '1800px',
            margin: '0 auto',
            padding: '40px 20px',
            boxSizing: 'border-box',
        }}>
            <h2 style={{
                color: '#fff',
                fontFamily: "'Inter', sans-serif",
                fontSize: '3rem',
                fontWeight: 600,
                marginBottom: '40px',
            }}>
                Contact Form
            </h2>

            <form onSubmit={(e) => e.preventDefault()}>

                {/* Name */}
                <label style={labelStyle}>Name</label>
                <input
                    type="text"
                    placeholder="First & Last Name"
                    style={inputStyle}
                />

                {/* Email */}
                <label style={labelStyle}>Email</label>
                <input
                    type="email"
                    placeholder="Email Address"
                    style={inputStyle}
                />

                {/* Phone */}
                <label style={labelStyle}>Phone</label>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    style={inputStyle}
                />

                {/* Location */}
                <label style={labelStyle}>Location</label>
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                    <select style={{ ...inputStyle, appearance: 'none', marginBottom: 0 }}>
                        <option value="" disabled selected>Select...</option>
                        <option value="france">France</option>
                        <option value="germany">Germany</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="other">Other</option>
                    </select>
                    {/* Arrow Icon */}
                    <div style={{
                        position: 'absolute',
                        right: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: '#666'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>

                {/* Service */}
                <label style={labelStyle}>Service</label>
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                    <select style={{ ...inputStyle, appearance: 'none', marginBottom: 0 }}>
                        <option value="" disabled selected>Select...</option>
                        <option value="buying">Buying</option>
                        <option value="selling">Selling</option>
                        <option value="investment">Investment</option>
                        <option value="consulting">Consulting</option>
                    </select>
                    {/* Arrow Icon */}
                    <div style={{
                        position: 'absolute',
                        right: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: '#666'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>


                {/* Message */}
                <label style={labelStyle}>Message</label>
                <textarea
                    placeholder="What do you need help with?"
                    rows="6"
                    style={{ ...inputStyle, resize: 'vertical' }}
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #222',
                        borderRadius: '8px',
                        padding: '16px',
                        color: '#fff',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginTop: '10px',
                        transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#111'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#0a0a0a'}
                >
                    Submit
                </button>

            </form>
        </div>
    );
};

export default ContactForm;

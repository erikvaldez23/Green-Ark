import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

import { Link, useLocation } from 'react-router-dom'; // Import useLocation if we want active styling later

const Sidebar = () => {
  // Optional: could use location to style active links
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#DFC789' : '#fff', // Lighter gold color for active state
    textDecoration: 'none',
    transition: 'color 0.3s'
  });

  return (
    <nav style={{
      width: '300px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px 0',
      boxSizing: 'border-box',
      backgroundColor: '#000',
      color: '#fff',
      flexShrink: 0,
    }}>
      {/* Logo */}
      <div style={{ paddingLeft: '0', textAlign: 'center' }}>
        <img
          src="/greenark-logo.png"
          alt="Green Ark Logo"
          style={{
            maxWidth: '180px',
            height: 'auto',
            marginBottom: '10px'
          }}
        />
        {/* Keeping text as accessible fallback or sub-brand if needed, 
            but user asked to add logo. If logo includes text, we might want to hide this. 
            For now, I'll keep it as the image might just be the mark. 
            Actually, let's assume logo replaces text or sits above it. 
            I will hide the text for now to see if the logo is sufficient, 
            or keep it if it looks like just an icon. 
            Let's keep the text but reduce margin if needed.
        */}
      </div>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center navigation links
        gap: '10px',
        fontSize: '1.5rem',
        fontWeight: 300,
        fontFamily: "'Inter', sans-serif"
      }}>
        <Link to="/" style={linkStyle('/')}>Home</Link>
        <Link to="/about" style={linkStyle('/about')}>About Us</Link>
        {/* <Link to="/properties" style={linkStyle('/properties')}>Properties</Link> */}
        {/* <Link to="/gallery" style={linkStyle('/gallery')}>Gallery</Link> */}
        <Link to="/ark-crypto" style={linkStyle('/ark-crypto')}>Ark Crypto</Link>
        <Link to="/ark-os" style={linkStyle('/ark-os')}>Ark OS</Link>
        <Link to="/blogs" style={linkStyle('/blogs')}>Blogs</Link>
        <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
      </div>

      {/* Social Icons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        paddingLeft: '0',
      }}>
        <a href="#"><Instagram size={24} strokeWidth={1.5} /></a>
        <a href="#"><Twitter size={24} strokeWidth={1.5} /></a> {/* Using Twitter as "X" proxy if X icon not available, or custom SVG */}
        <a href="#"><Facebook size={24} strokeWidth={1.5} /></a>
      </div>
    </nav>
  );
};

export default Sidebar;

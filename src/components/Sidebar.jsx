import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = (path) => ({
        color: location.pathname === path ? '#DFC789' : '#fff',
        textDecoration: 'none',
        transition: 'color 0.3s'
    });

    const handleNavClick = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div
                className="mobile-show"
                style={{
                    display: 'none',
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    zIndex: 10000,
                    cursor: 'pointer',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    padding: '10px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
            </div>

            <nav
                className={isOpen ? "mobile-sidebar-active" : "mobile-hide"}
                style={{
                    width: '300px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '60px 0 40px',
                    boxSizing: 'border-box',
                    backgroundColor: '#000',
                    color: '#fff',
                    flexShrink: 0,
                }}
            >
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
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    fontFamily: "'Inter', sans-serif"
                }}>
                    <Link to="/" style={linkStyle('/')} onClick={handleNavClick}>Home</Link>
                    <Link to="/about" style={linkStyle('/about')} onClick={handleNavClick}>About Us</Link>
                    <Link to="/ark-crypto" style={linkStyle('/ark-crypto')} onClick={handleNavClick}>Ark Crypto</Link>
                    <Link to="/ark-os" style={linkStyle('/ark-os')} onClick={handleNavClick}>Ark OS</Link>
                    <Link to="/blogs" style={linkStyle('/blogs')} onClick={handleNavClick}>Blogs</Link>
                    <Link to="/contact" style={linkStyle('/contact')} onClick={handleNavClick}>Contact</Link>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    paddingLeft: '0',
                }}>
                    <a href="#"><Instagram size={24} strokeWidth={1.5} /></a>
                    <a href="#"><Twitter size={24} strokeWidth={1.5} /></a>
                    <a href="#"><Facebook size={24} strokeWidth={1.5} /></a>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogData } from './blogData';

const BlogsGrid = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            paddingTop: '40px',
            paddingBottom: '80px',
        }}>
            <style>{`
                .blogs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 24px;
                    width: 100%;
                }
                .blog-card {
                    position: relative;
                    height: 380px;
                    border-radius: 24px;
                    overflow: hidden;
                    cursor: pointer;
                    background: #0a0a0a;
                    border: 1px solid #1a1a1a;
                    transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
                }
                .blog-card:hover {
                    transform: translateY(-8px);
                    border-color: #2a2a2a;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
                }
                .blog-card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
                    opacity: 0.7;
                }
                .blog-card:hover .blog-card-img {
                    transform: scale(1.08);
                    opacity: 0.85;
                }
                .blog-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, 
                        rgba(0,0,0,0.95) 0%, 
                        rgba(0,0,0,0.4) 50%, 
                        rgba(0,0,0,0.1) 100%);
                    transition: background 0.5s ease;
                }
                .blog-card:hover .blog-card-overlay {
                    background: linear-gradient(to top, 
                        rgba(0,0,0,1) 0%, 
                        rgba(0,0,0,0.5) 50%, 
                        rgba(0,0,0,0.2) 100%);
                }
                .blog-card-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .blog-card-category {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #DFC789;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .blog-card-category::before {
                    content: '';
                    width: 12px;
                    height: 1px;
                    background: #DFC789;
                }
                .blog-card-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                    line-height: 1.25;
                    letter-spacing: -0.02em;
                    transition: color 0.3s ease;
                }
                .blog-card:hover .blog-card-title {
                    color: #fff;
                }
                .blog-card-meta {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.8rem;
                    font-weight: 400;
                    color: #555;
                    margin-top: 4px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: color 0.3s ease;
                }
                .blog-card:hover .blog-card-meta {
                    color: #888;
                }
                .blog-card-arrow {
                    position: absolute;
                    top: 32px;
                    right: 32px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 1px solid rgba(255,255,255,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    transform: translateX(10px);
                    opacity: 0;
                    transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
                }
                .blog-card:hover .blog-card-arrow {
                    transform: translateX(0);
                    opacity: 1;
                    border-color: #DFC789;
                    color: #DFC789;
                }
                @media (max-width: 768px) {
                    .blogs-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .blog-card {
                        height: 320px;
                    }
                    .blog-card-arrow {
                        display: none;
                    }
                }
            `}</style>

            {/* Section Header */}
            <div className="section-animate" style={{ marginBottom: '40px' }}>
                <span className="section-label">Latest Insights</span>
                <span className="section-divider" />
            </div>

            {/* Grid */}
            <div className="blogs-grid">
                {blogData.map((post) => (
                    <div key={post.id} className="blog-card" onClick={() => navigate(`/blog/${post.id}`)}>
                        <img src={post.image} alt={post.title} className="blog-card-img" />
                        <div className="blog-card-overlay" />
                        
                        <div className="blog-card-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </div>

                        <div className="blog-card-content">
                            <span className="blog-card-category">{post.category}</span>
                            <h3 className="blog-card-title">{post.title}</h3>
                            <div className="blog-card-meta">
                                <span>{post.date}</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#333' }} />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogsGrid;

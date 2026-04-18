import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogData } from './blogData';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Scroll to top when loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const blogIndex = parseInt(id, 10) - 1;
    const blog = blogData[blogIndex] || blogData[0];

    const { title, category, date, author, readTime, image, content } = blog;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "image": [
            "https://www.greenark.com" + image
        ],
        "datePublished": new Date(date).toISOString(),
        "author": [{
            "@type": "Person",
            "name": author
        }]
    };

    return (
        <div style={{
            flex: 1,
            height: '100%',
            backgroundColor: '#000',
            position: 'relative',
            overflowY: 'auto',
            padding: '20px',
            boxSizing: 'border-box',
        }}>
            <Helmet>
                <title>{title} | Green Ark Blog</title>
                <meta name="description" content={`Read our latest insights on ${category}: ${title}.`} />
                <link rel="canonical" href={`https://www.greenark.com/blog/${id}`} />
                <meta property="og:title" content={`${title} | Green Ark Blog`} />
                <meta property="og:description" content={`Read our latest insights on ${category}: ${title}.`} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <style>{`
                .blog-hero {
                    width: 100%;
                    height: 60vh;
                    min-height: 400px;
                    border-radius: 28px;
                    overflow: hidden;
                    position: relative;
                    margin-bottom: 40px;
                }
                .blog-hero-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .blog-hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);
                }
                .blog-hero-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 50px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .blog-back-btn {
                    position: absolute;
                    top: 40px;
                    left: 40px;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(0,0,0,0.4);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 40px;
                    padding: 12px 24px;
                    color: #fff;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                }
                .blog-back-btn:hover {
                    background: rgba(223,199,137,0.15);
                    border-color: rgba(223,199,137,0.4);
                    color: #DFC789;
                }
                .blog-meta-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 16px;
                    flex-wrap: wrap;
                }
                .blog-pill {
                    background: rgba(223,199,137,0.15);
                    border: 1px solid rgba(223,199,137,0.3);
                    color: #DFC789;
                    padding: 6px 16px;
                    border-radius: 40px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                }
                .blog-meta-text {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 0.85rem;
                    color: #aaa;
                    font-weight: 400;
                }
                .blog-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: clamp(2rem, 4vw, 3.5rem);
                    font-weight: 800;
                    color: #fff;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    margin: 0;
                }
                .blog-content-container {
                    max-width: 740px;
                    margin: 0 auto;
                    padding: 0 20px 80px 20px;
                    color: #d0d0d0;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }
                .blog-paragraph {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin-bottom: 32px;
                    font-weight: 300;
                }
                .blog-pullquote {
                    font-family: 'Italiana', serif;
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-style: italic;
                    color: #DFC789;
                    line-height: 1.35;
                    margin: 60px 0;
                    padding-left: 30px;
                    border-left: 2px solid #DFC789;
                    font-weight: 400;
                }
                @media (max-width: 768px) {
                    .blog-hero-content {
                        padding: 30px 20px;
                    }
                    .blog-back-btn {
                        top: 20px;
                        left: 20px;
                    }
                    .blog-hero {
                        height: 50vh;
                    }
                    .blog-pullquote {
                        margin: 40px 0;
                        padding-left: 20px;
                    }
                }
            `}</style>
            
            {/* Hero Image Section */}
            <div className="blog-hero">
                <button className="blog-back-btn" onClick={() => navigate('/blogs')}>
                    <ArrowLeft size={16} /> Back to Blogs
                </button>

                <img src={image} alt={title} className="blog-hero-img" />
                <div className="blog-hero-overlay" />

                <div className="blog-hero-content">
                    <div className="blog-meta-row">
                        <span className="blog-pill">{category}</span>
                        <span className="blog-meta-text">{date}</span>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#555' }} />
                        <span className="blog-meta-text">{readTime}</span>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#555' }} />
                        <span className="blog-meta-text">By {author}</span>
                    </div>
                    <h1 className="blog-title">{title}</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="blog-content-container">
                {content.map((paragraph, idx) => {
                    // Render quotes distinctly (checking if the text starts with quote, or we know idx 2 is a quote)
                    if (paragraph.indexOf('The most significant shift') === 0 || paragraph.startsWith('"')) {
                        return <p key={idx} className="blog-pullquote">"{paragraph.replace(/^"|"$/g, '')}"</p>;
                    }
                    return <p key={idx} className="blog-paragraph">{paragraph}</p>;
                })}
            </div>
            
        </div>
    );
};

export default BlogDetails;

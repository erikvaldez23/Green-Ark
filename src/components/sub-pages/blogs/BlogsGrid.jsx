import React from 'react';

// Importing existing assets for mock data
import img1 from '../../../assets/listing_opulence.png';
import img2 from '../../../assets/gallery_bedroom.png';
import img3 from '../../../assets/listing_harmony.png';
import img4 from '../../../assets/gallery_pool.png';
import img5 from '../../../assets/listing_prestige.png';
import img6 from '../../../assets/luxury_estate_hero.png';

const BlogsGrid = () => {
    // Mock Data
    const blogPosts = [
        { id: 1, date: 'Sep 27, 2025', category: 'Buying Tips', title: 'Top 10 Tips for First-Time Home Buyers', image: img1 },
        { id: 2, date: 'Sep 27, 2025', category: 'Selling Tips', title: 'How to Stage Your Home for a Quick Sale', image: img2 },
        { id: 3, date: 'Sep 27, 2025', category: 'Market Insights', title: 'Understanding Real Estate Market Trends in 2025', image: img3 },
        { id: 4, date: 'Sep 27, 2025', category: 'Selling Tips', title: '5 Common Mistakes When Selling Your Home', image: img4 },
        { id: 5, date: 'Sep 27, 2025', category: 'Investment Tips', title: 'How to Invest in Rental Properties Successfully', image: img5 },
        { id: 6, date: 'Sep 27, 2025', category: 'Market Insights', title: 'Understanding Property Valuation Methods', image: img6 },
        { id: 6, date: 'Sep 27, 2025', category: 'Market Insights', title: 'Understanding Property Valuation Methods', image: img6 },
        { id: 6, date: 'Sep 27, 2025', category: 'Market Insights', title: 'Understanding Property Valuation Methods', image: img6 },
    ];

    return (
        <div style={{
            width: '100%',
            boxSizing: 'border-box',
            // marginTop: '60px',
        }}>
            {/* <h2 style={{
                color: '#fff',
                fontFamily: "'Inter', sans-serif",
                fontSize: '2rem',
                marginBottom: '30px',
            }}>
                Latest Insights
            </h2> */}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
            }}>
                {blogPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

// Sub-component for individual card
const BlogCard = ({ post }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                height: '250px', // Fixed height for consistency
                cursor: 'pointer',
                border: '1px solid',
                borderColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : '#333',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered
                    ? '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.05)'
                    : '0 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            {/* Background Image */}
            <img
                src={post.image}
                alt={post.title}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), filter 0.8s ease',
                    filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                    display: 'block',
                }}
            />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: isHovered
                    ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)',
                transition: 'background 0.5s ease',
                pointerEvents: 'none',
            }}></div>

            {/* Content Content - Bottom aligned */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                pointerEvents: 'none', // Text doesn't block hover on image
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
                {/* Meta Row */}
                <div style={{
                    display: 'flex',
                    gap: '15px',
                    fontSize: '0.75rem',
                    color: isHovered ? '#fff' : '#ccc',
                    marginBottom: '8px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    transition: 'color 0.5s ease',
                }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {post.category}
                    </span>
                </div>

                {/* Title */}
                <h3 style={{
                    color: '#fff',
                    margin: 0,
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    lineHeight: '1.4',
                }}>
                    {post.title}
                </h3>
            </div>
        </div>
    );
};

export default BlogsGrid;

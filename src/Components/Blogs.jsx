import React, { useState } from 'react';
import './Blogs.css'; // Ensure this CSS file contains appropriate styles
import blog1 from '../Assets/Blogs/blog1.webp';
import blog2 from '../Assets/Blogs/blog2.jpg';
import blog3 from '../Assets/Blogs/blog3.webp';
import Footer from './Footer';

const Blogs = () => {
    const [expandedBlog, setExpandedBlog] = useState(null);

    const handleReadMore = (id) => {
        setExpandedBlog(expandedBlog === id ? null : id);
    };

    const blogs = [
        {
            id: 1,
            title: 'The Benefits of Organic Herbs',
            description: 'Organic herbs offer a range of health benefits, including boosting immunity, reducing stress, and improving digestion...',
            fullDescription: 'Organic herbs offer a range of health benefits, including boosting immunity, reducing stress, and improving digestion. These natural remedies have been used for centuries in traditional medicine to enhance well-being and treat various ailments. Herbs like Ashwagandha, Echinacea, and Ginger are known for their therapeutic properties. Incorporating these herbs into your daily routine can support overall health and wellness...',
            image: blog1,
        },
        {
            id: 2,
            title: 'How to Grow Your Own Organic Herb Garden',
            description: 'Growing your own organic herb garden is easier than you think. Learn the basics of planting and caring for herbs...',
            fullDescription: 'Growing your own organic herb garden is easier than you think. With a few simple steps, you can cultivate fresh, organic herbs right in your own backyard. Start by choosing a sunny spot and using high-quality soil. Herbs like Basil, Mint, and Thyme thrive in home gardens. Regular watering, pruning, and harvesting will keep your herbs healthy and productive...',
            image: blog2,
        },
        {
            id: 3,
            title: 'Top 10 Organic Herbs for Cooking',
            description: 'Enhance your culinary skills with these top 10 organic herbs. Discover their uses and benefits in the kitchen...',
            fullDescription: 'Enhance your culinary skills with these top 10 organic herbs. From Basil and Oregano to Rosemary and Thyme, these herbs add depth and flavor to your dishes. Each herb has unique culinary uses and health benefits. For example, Rosemary is great for roast meats, while Basil is perfect for Italian dishes. Experimenting with these herbs can elevate your cooking and provide fresh flavors...',
            image: blog3,
        }
    ];

    return (
        <div>
            <div className="blogs">
                <h1>Read Our Blog</h1>
                <div className="blog-list">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blog-card">
                            <img src={blog.image} alt={blog.title} className="blog-image" style={{ height:'250px' }}/>
                            <div className="blog-content">
                                <h2>{blog.title}</h2>
                                <p>
                                    {expandedBlog === blog.id ? blog.fullDescription : blog.description}
                                </p>
                                <button className="read-more" onClick={() => handleReadMore(blog.id)}>
                                    {expandedBlog === blog.id ? 'Show Less' : 'Read More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;
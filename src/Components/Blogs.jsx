import React from 'react';
import './Blogs.css';
import blog1 from '../Assets/Blogs/blog1.webp';
import blog2 from '../Assets/Blogs/blog2.jpg';
import blog3 from '../Assets/Blogs/blog3.webp';

import Footer from './Footer'

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: 'The Benefits of Organic Herbs',
            description: 'Organic herbs offer a range of health benefits, including...',
            image: blog1,
        },
        {
            id: 2,
            title: 'How to Grow Your Own Organic Herb Garden',
            description: 'Growing your own organic herb garden is easier than you think...',
            image: blog2,
        },
        {
            id: 3,
            title: 'Top 10 Organic Herbs for Cooking',
            description: 'Enhance your culinary skills with these top 10 organic herbs...',
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
                        <img src={blog.image} alt={blog.title} style={{ height: '260px' }}className="blog-image" />
                        <div className="blog-content">
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            <button className="read-more">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Blogs;

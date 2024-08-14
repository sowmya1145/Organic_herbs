import React, { useState } from 'react';
import address from '../Assets/Contact/icons8-address-50.png';
import mail from '../Assets/Contact/icons8-mail-24.png';
import phone from '../Assets/Contact/icons8-phone-50.png';
import './Contact.css'; // Ensure this CSS file contains appropriate styles
import Footer from './Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Full Name is required.";
        if (!formData.email) {
            formErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid.";
        }
        if (!formData.message) formErrors.message = "Message is required.";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);

        // Simulate sending data to an API (replace this with actual API call)
        setTimeout(() => {
            console.log('Form Data Submitted:', formData);
            setLoading(false);
            setFormSubmitted(true);
        }, 2000);
    };

    const locations = [
        {
            name: 'Indo Herbal Products Unit',
            address: 'Plot No. 28, 29 Sector 1-B, & Plot No 17 Sector 12 IIE Raipur, SIDCUL, Haridwar - 249403 Uttarakhand',
            phone: '+91 981 0045 811',
            mapLink: 'https://goo.gl/maps/YOUR_MAP_LINK_HERE', // Replace with actual Google Maps link
            mapEmbedSrc: 'https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE', // Replace with actual embed link
        },
        
    ];


    return (
        <div>
        <div className="contact-section">
            <div className="contact-info">
                <h2 style={{ color:'#4CAF50' }}>Contact Us</h2>
                <p style={{ color:'black' }}>For general enquiries: please fill out the form below. Our team will respond to your queries within 5 working days</p>
                <div className="contact-details">
                    <div className="contact-item">
                       <img src={address}></img>
                        <p style={{ color:'black' }}>123 Greenleaf Avenue
Botanica City, FL 56789
United States</p>
                    </div>
                    <div className="contact-item">
                    <img src={phone}></img>
                        <p style={{ color:'black' }}>+1 (555) 123-4567</p>
                    </div>
                    <div className="contact-item">
                    <img src={mail} style={{ height:'55px' }}></img>
                        <p style={{ color:'black' }}>Flora@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-form-container">
                {formSubmitted ? (
                    <div className="thank-you-message">
                        <h2 style={{ color:'black' }}>Thank you for contacting us!</h2>
                        <p style={{ color:'black' }}>We will get back to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <button type="submit" className="submit-button" disabled={loading}>
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                )}
            </div>
            
        </div>

        <div className="locations-container">
            <h1 style={{ textAlign:'center' }}>Our Factory Units</h1>
            <h2>Locations</h2>
            <p>Indo Herbal Products  factory units</p>
            {locations.map((location, index) => (
                <div key={index} className="location-card">
                    <div className="location-info">
                        <h3>{location.name}</h3>
                        <p>{location.address}</p>
                        <p>Phone: <a href={`tel:${location.phone}`}>{location.phone}</a></p>
                        <a href={location.mapLink} target="_blank" rel="noopener noreferrer">
                            Open Google Maps →
                        </a>
                    </div>
                    <div className="location-map">
                    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.728712369024!2d78.08158657597321!3d29.914759036497602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909291e5abcb747%3A0x51e4a9a9f196fc03!2sPlot%20No%2017%2C%20Sector%2012%2C%20IIE%2C%20Ranipur%2C%20SIDCUL%2C%20Haridwar%2C%20Uttarakhand%20249403!5e0!3m2!1sen!2sin!4v1691836165674!5m2!1sen!2sin" 
    width="400"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade">
</iframe>

                    </div>
                </div>
            ))}
        </div>

        <Footer/>
        </div>
    );
};

export default Contact;

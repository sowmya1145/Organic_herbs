import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: 'Commercial Building',
    contractStatus: 'Yes',
    identity: 'International Real Estate Investor',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Atlas 1031 Exchange has proudly served clients seeking I.R.C § 1031 counsel as Qualified Intermediaries with precision and excellence for over 18 years. We often personally meet with clients, and speak at educational events on “Tax Deferred Exchanges.”</p>
      <p>Email: info@atlas1031.com</p>
      <p>Phone: 1-800-227-1031</p>
      <p>Fax: 1-850-201-6911</p>
      <p>Naples Office: 1908 Timarron Way, Naples, FL 34109</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>What is the property being sold?</label>
          <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
            <option value="Commercial Building">Commercial Building</option>
            <option value="Residential Property">Residential Property</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div>
          <label>In Contract?</label>
          <select name="contractStatus" value={formData.contractStatus} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label>How do you identify yourself?</label>
          <select name="identity" value={formData.identity} onChange={handleChange}>
            <option value="International Real Estate Investor">International Real Estate Investor</option>
            <option value="Domestic Real Estate Investor">Domestic Real Estate Investor</option>
            <option value="Real Estate Agent">Real Estate Agent</option>
          </select>
        </div>
        <div>
          <label>How may we help you?</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

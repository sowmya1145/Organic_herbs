import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', form);
      // Add your form submission logic here
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'This field is required';
    if (!form.phone) newErrors.phone = 'This field is required';
    if (!form.email) newErrors.email = 'This field is required';
    if (!form.subject) newErrors.subject = 'This field is required';
    if (!form.message) newErrors.message = 'This field is required';
    return newErrors;
  };

  return (
    <div className="App">
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Submit Now</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p><i className="fa fa-map-marker"></i> 123, Any Street, 2nd Floor, Delhi, India 110022</p>
        <p><i className="fa fa-phone"></i> +91 1234 123 123</p>
        <p><i className="fa fa-envelope"></i> Support@example.com</p>
      </div>
    </div>
  );
}

export default Contact;

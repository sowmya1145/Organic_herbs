import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import leftImage from '../Assets/Background/Register.jpeg'; // Adjust the path accordingly
import './Register.css';


const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    emailOrPhone: '',
    password: '',
    confirmpassword: '',
    phonenumber: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.termsAccepted) {
      alert('You must accept the Privacy Policy');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/reg', formData);
      console.log('User registered:', response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('There was an error registering the user!', error);
      alert('Registration failed');
    }
  };

  return (
    <div>
    <div className="sow">
      <div className="register-container">
        <div className="image-container">
          <img src={leftImage} alt="Left panel" />
        </div>
        <div className="form-container">
          <h1>Register Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="fullname" style={{ textAlign: 'left' }}>Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" style={{ textAlign: 'left' }}>Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" style={{ textAlign: 'left' }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmpassword" style={{ textAlign: 'left' }}>Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phonenumber" style={{ textAlign: 'left' }}>Phone Number</label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">I accept the Privacy Policy</label>
            </div>
            <button type="submit" className="register-button">Register</button>
          </form>
          <p className="login-link">Already have an account? <Link to="/Login">Log In</Link></p>
        </div>
      </div>
      
    </div>
    <br/>
   
    </div>
  );
};

export default Register;

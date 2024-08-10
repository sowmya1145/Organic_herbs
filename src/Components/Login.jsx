import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import illustration from '../Assets/Background/Register.jpeg'; // Adjust the path accordingly
import './Login.css';


function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', loginData);
      console.log('User logged in:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed');
    }
  };

  return (
    <div className="soww">
    <div className="login-container">
      <div className="image-container">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="login-form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">Don't have an account? <Link to="/Register">Register here</Link></p>
       { /*<p className="forgot-password"><Link to="/forgot-password">Forgot password?</Link></p>*/}
      </div>
    </div>
    </div>
  );
}

export default Login;

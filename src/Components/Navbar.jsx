// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../Assets/Navbar/add.png';
import logo from '../Assets/Navbar/logo1.jpg';
import './Navbar.css';


const Navbar = ({ cartItemCount }) => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <div className="navbar-brand-info">
          <span className="navbar-brand-name">Flora</span>
          
        </div>
       
      </div>


      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="About">About</Link></li>
        <li><Link to="Blogs">Blogs</Link></li>
        <li><Link to="Contact">Contact Us</Link></li>
       
        <li className="cart-container">
          <Link to="/cart">
            <img src={cart} alt="Cart" className="cart-icon" />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
        </li>
      </ul>
     <Link to="Register"> <button className="signin-button">Sign Up</button></Link>
    </nav>
  );
}

export default Navbar;

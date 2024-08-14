import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Greens from './Components/Greens/Greens';
import Cart from './Components/Herbal/Cart';
import Herbal from './Components/Herbal/Herbal';
import { useCart } from './Components/Herbal/useCart';
import Home from './Components/Home';
import Login from './Components/Login';
import Medicinal from './Components/Medicinal/Medicinal';
import Navbar from './Components/Navbar';
import PlaceOrder from './Components/Placeorder/PlaceOrder';
import Register from './Components/Register';
import Feedback from './Components/Footer/Feedback';

import Product from './Components/Products/Product';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
 
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const {
    cartItems,
    handleAddToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
    handleClearCart,
  } = useCart();

  const handlePlaceOrder = (shippingAddress, paymentMethod) => {
    console.log('Order placed with:', { shippingAddress, paymentMethod, cartItems });
    handleClearCart();
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar
          user={user} // Pass the user data to the Navbar
          cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Product" element={<Product handleAddToCart={handleAddToCart}/>}/>

          <Route path="Medicinal" element={<Medicinal handleAddToCart={handleAddToCart} />} />
          <Route path="Herbal" element={<Herbal handleAddToCart={handleAddToCart} />} />
          <Route path="Greens" element={<Greens handleAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleRemoveItem={handleRemoveItem}
              />
            }
          />
          <Route 
            path="/placeorder" 
            element={
              <PlaceOrder 
                cartItems={cartItems} 
                handlePlaceOrder={handlePlaceOrder}
              />
            } 
          />

          <Route path="Feedback" element={<Feedback />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login setUser={setUser} />} /> {/* Pass setUser to Login */}
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

{/*import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Greens from './Components/Greens/Greens';
import AdminPanel from './Components/Admin/AdminPanel';
import Herbal from './Components/Herbal/Herbal';
import Medicinal from './Components/Medicinal/Medicinal';
import Cart from './Components/Herbal/Cart';
import { useCart } from './Components/Herbal/useCart';
import Navbar from './Components/Navbar';
import UserProfile from './Components/Userprofile/UserProfile';


const App = () => {
  const [user, setUser] = useState(null); // State to manage the logged-in user

  useEffect(() => {
    // Retrieve user data from local storage if available
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const {
    cartItems,
    handleAddToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
  } = useCart();

  return (
    <div>
      <BrowserRouter>
        <Navbar
          user={user} // Pass the user data to the Navbar
          cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Medicinal" element={<Medicinal handleAddToCart={handleAddToCart} />} />
          <Route path="Herbal" element={<Herbal handleAddToCart={handleAddToCart} />} />
          <Route path="Greens" element={<Greens handleAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleRemoveItem={handleRemoveItem}
              />
            }
          />

          <Route path="Userprofile" element={<UserProfile />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login setUser={setUser} />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="AdminPanel" element={<AdminPanel />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
*/}

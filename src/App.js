import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';

import About from './Components/About';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import Contact from './Components/Contact';

import Greens from './Components/Greens/Greens';
import Herbal from './Components/Herbal/Herbal';
import Medicinal from './Components/Medicinal/Medicinal';

import Cart from './Components/Herbal/Cart';
import { useCart } from './Components/Herbal/useCart';
import Navbar from './Components/Navbar';

const App=()=> {
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
      <Navbar cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="About" element={<About/>} />
      

        <Route path="Medicinal" element={<Medicinal handleAddToCart={handleAddToCart} />} />
        <Route path="Herbal" element={<Herbal handleAddToCart={handleAddToCart}/>}/>
        <Route path="Greens" element={<Greens handleAddToCart={handleAddToCart}/>}/>
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        } />
     <Route path="Register" element={<Register/>} />
     <Route path="Login" element={<Login/>} />
     <Route path="Blogs" element={<Blogs/>} />
     <Route path="Contact" element={<Contact/>} />
     

      </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App;

{/*import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Medicinal from './Components/Medicinal/Medicinal';
import Herbal from './Components/Herbal/Herbal';
import Greens from './Components/Greens/Greens';

import { useCart } from './Components/Herbal/useCart';
import Cart from './Components/Herbal/Cart';
import Navbar from './Components/Navbar';


const App=()=> {
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
      <Navbar cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
    <Routes>
    
      <Route path="/" element={<Home/>} />
      
        <Route path="Medicinal" element={<Medicinal handleAddToCart={handleAddToCart} />} />
        <Route path="Herbal" element={<Herbal handleAddToCart={handleAddToCart}/>}/>
        <Route path="Greens" element={<Greens handleAddToCart={handleAddToCart}/>}/>
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        } />
     
      </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App;*/}


// src/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign:'center' }}>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Price: Rs {item.price} per gm</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                  </div>
                  <p>Total: Rs {item.price * item.quantity}</p>
                  <button onClick={() => handleRemoveItem(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Price: Rs {getTotalPrice()}</h3>
           <button className='button button2'>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

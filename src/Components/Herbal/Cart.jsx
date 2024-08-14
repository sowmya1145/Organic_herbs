import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem, handleClearCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  return (
    <div className="cart">
      <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="cart-item">
                  <td><img src={item.image} alt={item.name} className="cart-item-image" /></td>
                  <td>{item.name}</td>
                  <td>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                    </div>
                  </td>
                  <td>Rs {item.price}</td>
                  <td>Rs {item.price * item.quantity}</td>
                  <td><button onClick={() => handleRemoveItem(item)} className="remove-button">🗑</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <h3>Total Price: Rs {getTotalPrice()}</h3>
            <Link to='/PlaceOrder'> <button className="button4 button5">Checkout</button></Link>
            
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


{/*import React from 'react';
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

export default Cart;*/}

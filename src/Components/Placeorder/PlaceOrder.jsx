import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = ({ cartItems = [], handlePlaceOrder }) => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [paypalEmail, setPaypalEmail] = useState('');
  const [bankDetails, setBankDetails] = useState({ accountNumber: '', bankName: '', ifscCode: '' });
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shippingAddress || !phoneNumber) {
      alert('Please enter both shipping address and phone number.');
      return;
    }
    if (paymentMethod === 'creditCard' && (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv)) {
      alert('Please enter complete credit card details.');
      return;
    }
    if (paymentMethod === 'paypal' && !paypalEmail) {
      alert('Please enter your PayPal email.');
      return;
    }
    if (paymentMethod === 'bankTransfer' && (!bankDetails.accountNumber || !bankDetails.bankName || !bankDetails.ifscCode)) {
      alert('Please enter complete bank transfer details.');
      return;
    }
    handlePlaceOrder({ shippingAddress, phoneNumber, paymentMethod, cardDetails, paypalEmail, bankDetails });
    alert('Order placed successfully!');
    navigate('/');
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty. Please add items to your cart before placing an order.</p>;
  }

  return (
    <div className="place-order">
      <h2>Place Your Order</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>Rs {item.price}</td>
                <td>Rs {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total Price: Rs {getTotalPrice()}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="shipping-address">Shipping Address:</label>
          <textarea
            id="shipping-address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number:</label>
          <input
            type="tel"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="payment-method">Payment Method:</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>

        {paymentMethod === 'creditCard' && (
          <div className="credit-card-details">
            <h4>Credit Card Details</h4>
            <div className="form-group">
              <label htmlFor="card-number">Card Number:</label>
              <input
                type="text"
                id="card-number"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input
                type="text"
                id="expiry-date"
                placeholder="MM/YY"
                value={cardDetails.expiryDate}
                onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                required
              />
            </div>
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div className="paypal-details">
            <h4>PayPal Details</h4>
            <div className="form-group">
              <label htmlFor="paypal-email">PayPal Email:</label>
              <input
                type="email"
                id="paypal-email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        {paymentMethod === 'bankTransfer' && (
          <div className="bank-transfer-details">
            <h4>Bank Transfer Details</h4>
            <div className="form-group">
              <label htmlFor="account-number">Account Number:</label>
              <input
                type="text"
                id="account-number"
                value={bankDetails.accountNumber}
                onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bank-name">Bank Name:</label>
              <input
                type="text"
                id="bank-name"
                value={bankDetails.bankName}
                onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ifsc-code">IFSC Code:</label>
              <input
                type="text"
                id="ifsc-code"
                value={bankDetails.ifscCode}
                onChange={(e) => setBankDetails({ ...bankDetails, ifscCode: e.target.value })}
                required
              />
            </div>
          </div>
        )}

        <button type="submit" className="button5 button6">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;

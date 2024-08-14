import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (item) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  };

  const handleDecreaseQuantity = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem.quantity === 1) {
      handleRemoveItem(item);
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
  };

  const handleRemoveItem = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.name !== item.name));
  };

  const handleClearCart = () => {
    setCartItems([]); // Clear all items from the cart
  };

  return {
    cartItems,
    handleAddToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
    handleClearCart,
  };
};

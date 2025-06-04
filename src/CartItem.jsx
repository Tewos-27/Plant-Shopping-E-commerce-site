import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeItem, decrement, addItem } from './CartSlice';
import './CartItem.css';


const CartItem = ({ onContinueShopping }) => {
  // This component displays the items in the shopping cart
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
 

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const cost = parseFloat(item.cost) || 0; // Ensure valid numeric cost
      const quantity = parseInt(item.quantity, 10) || 0; // Ensure valid numeric quantity
      return total + cost * quantity; // Accumulate the total cost
    }, 0);
  };

  // Calculate total cost based on quantity for a specific item
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost) || 0; // Ensure valid numeric cost
    const quantity = parseInt(item.quantity, 10) || 0; // Ensure valid numeric quantity
    return cost * quantity; // Return the total cost for the item
  };

  const handleContinueShopping = () => {
    // Navigate to the product listing page
  };

  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrement(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Cost: ${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item).toFixed(2)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount"></div>
      <div className="continue_shopping_btn">
    
        <a href="Products"><button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button></a>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
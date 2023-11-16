import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div style={{ position: 'fixed', top: 10, right: 10, border: '1px solid #ccc', padding: 10 }}>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name} |
            <strong>Quantity in Cart:</strong> 1
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

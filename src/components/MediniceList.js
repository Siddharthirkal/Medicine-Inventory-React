import React, { useState } from 'react';

const MedicineList = ({ medicines, onAddToCart }) => {
  const handleAddToCart = (index) => {
    onAddToCart(index);
  };

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            <strong>Name:</strong> {medicine.name} |
            <strong>Description:</strong> {medicine.description} |
            <strong>Price:</strong> {medicine.price} |
            <strong>Quantity:</strong> {medicine.quantity === 0 ? 'Out of Stock' : medicine.quantity}
            {medicine.quantity > 0 && (
              <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;

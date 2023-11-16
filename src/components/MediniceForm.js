import React, { useState } from 'react';

const MedicineForm = ({ onAddMedicine }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddMedicine = () => {
    const medicine = {
      name,
      description,
      price,
      quantity,
    };

    onAddMedicine(medicine);

    // Clear the form after adding medicine
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Price:</label>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label>Quantity:</label>
      <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleAddMedicine}>Add Product</button>
    </div>
  );
};

export default MedicineForm;

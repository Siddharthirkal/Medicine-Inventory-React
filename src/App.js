import React, { useState } from 'react';
import MedicineForm from './components/MediniceForm';
import MedicineList from './components/MediniceList';
import Cart from './components/cart';

const App = () => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const handleAddToCart = (index) => {
    const updatedMedicines = [...medicines];
    const updatedCart = [...cart];
    const selectedMedicine = updatedMedicines[index];

    if (selectedMedicine.quantity > 0) {
      selectedMedicine.quantity -= 1;
      updatedCart.push(selectedMedicine);
    }

    setMedicines(updatedMedicines);
    setCart(updatedCart);
  };

  return (
    <div>
      <MedicineForm onAddMedicine={handleAddMedicine} />
      <MedicineList medicines={medicines} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;

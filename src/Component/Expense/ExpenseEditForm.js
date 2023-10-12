

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ExpenseEditForm = (props) => {
  const [editedExpense, setEditedExpense] = useState({
    category: props.category,
    description: props.description,
    price: props.price,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense({
      ...editedExpense,
      [name]: value,
    });
  };

  const handleEditExpense = () => {
    props.onEditExpense(props.id, editedExpense);
  };

  return (
      <div>
        <input
            type="number"
            name="price"
            value={editedExpense.price}
            onChange={handleInputChange}
        />
      
        <input
            type="text"
            name="description"
            value={editedExpense.description}
            onChange={handleInputChange}
          />
          
        <input
            type="text"
            name="category"
            value={editedExpense.category}
            onChange={handleInputChange}
        />
      
      <Button onClick={handleEditExpense}>Update</Button>
    </div>
  );
};

export default ExpenseEditForm;

import React, { useState } from 'react';
import ExpenseEditForm from './ExpenseEditForm';
import { Button } from 'react-bootstrap';

const ExpenseItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };


  const handleSaveEdit = (id, editedExpense) => {
    props.onEditExpense(id, editedExpense);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <ExpenseEditForm
          id={props.id}
          category={props.category}
          description={props.description}
          price={props.price}
          onEditExpense={handleSaveEdit}
        />
      ) : (
        props.id && (<li key={props.id} className='d-flex justify-content-around align-item-center' style={{ borderBottom: '1px solid black' }}>
          <div className='d-flex gap-3 align-item-center mb-2'>
            <h5>{props.category}</h5>
            <h5>{props.description}</h5>
            <h5 style={{ color: 'red' }}>₹ {props.price}</h5>
          </div>
          <div className='d-flex gap-2 mb-2'>
            <Button onClick={handleEditClick} style={{ color: 'green', background: 'black' }}>
              Edit
            </Button>
            <Button onClick={() => props.DeleteExpense(props.id)} style={{ color: 'red', background: 'black' }}>
              Delete
            </Button>
          </div>
        </li>)
      )}
    </>
  );
};

export default ExpenseItem;

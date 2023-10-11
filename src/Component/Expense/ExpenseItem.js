import React from 'react'
import { CardBody } from 'react-bootstrap'

const ExpenseItem = (props) => {
  return (
    <>
      
        <li key={props.id} className='d-flex justify-content-around align-item-center mt-2' style={{ borderBottom: '1px solid black' }}>
            <h5>{props.category}</h5>
            <h6>{props.description}</h6>
            <h6>₹ {props.price}</h6> 
        </li>
      
    </>
  )
}

export default ExpenseItem



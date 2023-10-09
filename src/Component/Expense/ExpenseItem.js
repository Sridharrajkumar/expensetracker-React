import React from 'react'

const ExpenseItem = (props) => {
  return (
          <li key={props.id}>
              <h5>{props.category}</h5>
              <p>{props.description}</p>
              <h6>{props.price}</h6> 
          </li>
  )
}

export default ExpenseItem



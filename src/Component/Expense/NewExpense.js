

import React from 'react'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem'

const NewExpense = () => {

    const [expenses, setexpenses] = useState([]);

    const AddExpense = (expense) => {
        setexpenses([...expenses,expense])
    }


  return (
      <div>
          <ExpenseForm addExpense={AddExpense} />
          <ul>
              {
                  expenses.map((expense) => (
                      <ExpenseItem
                          id={Math.round()}
                          price={expense.price}
                          description={expense.description}
                          category={expense.category}
                      />
                  ))
              }
          </ul>
    </div>
  )
}

export default NewExpense


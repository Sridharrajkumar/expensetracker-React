

import React from 'react'
import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem'
import { Card, CardBody, CardTitle } from 'react-bootstrap';

const NewExpense = () => {

    const [expenses, setexpenses] = useState([]);
    const email = localStorage.getItem('user');
    let user;
    if (email)
    {
        user = email.replace(/[@.]/g, '');
    }
    const AddExpense = async(expense) => {
        setexpenses([...expenses, expense])
        const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(expense)
        })
        const data = await response.json();
    }

    useEffect(() => {
        const fetchFun = async () => {
            let user;
            let pro = [];
          if (email)
          {
              user = email.replace(/[@.]/g, '');
          }
          const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}.json`);
          const data = await response.json();
          for (let key in data)
          {
            pro.push(data[key])
            }
            console.log(pro);
            setexpenses(pro);
          
        }
        fetchFun();
      },[])

  return (
      <div>
          <ExpenseForm addExpense={AddExpense} />
          <Card className=' mt-2' style={{width:'650px', margin:'40px auto'}}> 
              <CardTitle className='d-flex justify-content-center mt-2'>Expenses</CardTitle>
            <ul className='m-4'>
                {
                    expenses.map((expense) => (
                        <CardBody>
                         <ExpenseItem
                            id={Math.round()}
                            price={expense.price}
                            description={expense.description}
                            category={expense.category}
                            />
                        </CardBody>
                    ))
                }
            </ul>
          </Card>
          
    </div>
  )
}

export default NewExpense


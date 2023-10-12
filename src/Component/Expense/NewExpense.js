

import React from 'react'
import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem'
import { Card, CardBody, CardTitle } from 'react-bootstrap';

const NewExpense = () => {


    const [expenses, setexpenses] = useState([]);
    const email = localStorage.getItem('user');
    let user;
    let pro = [];
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
        console.log(data);
    }

    const EditExpense = async (id, editedExpense) => {
        
        const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}/${id}.json`, {
          method: 'PUT', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editedExpense),
        });
        const data = response.json();
        console.log(data);
        fetchFun();
      };

    const DeleteExpense = async(id) => {
        
    const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}/${id}.json`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json();
        console.log(data);
        for (let key in data)
          {
            pro.push({...data[key],id:key});
            }
            console.log(pro);
        fetchFun();
    }

    const fetchFun = async () => {
        
        const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}.json`);
        const data = await response.json();
        for (let key in data)
        {
          pro.push({...data[key],id:key});
          }
          console.log(pro);
          setexpenses(pro);
      }

    useEffect(() =>{
        fetchFun();
      },[])

  return (
      <div>
          <ExpenseForm addExpense={AddExpense} />
          <Card className=' mt-2' style={{width:'700px', margin:'40px auto' , boxSizing:'border-box '}}> 
              <CardTitle className='d-flex justify-content-center mt-2'>Expenses</CardTitle>
            <ul className='m-4'>
                {
                    expenses.map((expense) =>(
                        <CardBody>
                            <ExpenseItem
                                onEditExpense={EditExpense}
                                EditExpense={EditExpense}
                                DeleteExpense={DeleteExpense}
                                id={expense.id}
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




import React from 'react'
import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem'
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseActions } from '../../ContxtStore/ExpenseReducer';
import { saveAs } from 'file-saver';

const NewExpense = () => {
  const [expenses, setexpenses] = useState([]);
  const savedExpense = useSelector(state => state.expenses.expenses);
  const TotalExpense = useSelector(state => state.expenses.totalExpenses);
  const PremiumAmount = 10000;

    const email = localStorage.getItem('user');
    const dispatch = useDispatch();
    let user;
    if (email)
    {
        user = email.replace(/[@.]/g, '');
    }
    const AddExpense = async(expense) => {
        setexpenses([...expenses, expense])
        dispatch(ExpenseActions.AddExpense(expense));
        const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(expense)
        })
        const data = await response.json();
      console.log(data);
  }
  //console.log('saved', savedExpense);
  

    const EditExpense = async (id, editedExpense) => {
        
        const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}/${id}.json`, {
          method: 'PUT', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editedExpense),
        });
        const data = await response.json();
      console.log(data);
      
      if (response.ok)
      {
        dispatch(ExpenseActions.editExpense({id, editedExpense}));
      }
        
      };

    const DeleteExpense = async(id) => {
        
    const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}/${id}.json`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json();
      if (response.ok)
      {
        dispatch(ExpenseActions.deleteExpense(id));
      }
    }

    const fetchFun =  async () => {
        const response = await fetch(`https://expense-tracker-95099-default-rtdb.firebaseio.com/expense/${user}.json`);
         const data = await response.json();
         let pro = [];
        for (let key in data)
        {
          pro.push({ ...data[key], id: key });
          dispatch(ExpenseActions.AddExpense({ ...data[key], id: key }));
          
        }
          console.log(pro);
          setexpenses(pro);
      }

      useEffect(() => {
        if (email)
        {
          fetchFun();
        }
      }, [email])
  
  const HandleDownload = () => {
    let Data = savedExpense.map((expense) => `${expense.category}  ${expense.description}  ${expense.price}`);
    let csvData=`Category,Description,Price\n${Data.join('\n')}`;
    const blob = new Blob([csvData], { type: 'text/csv' });
    saveAs(blob, 'expense.csv');
  }
  

  return (
      <div>
          <ExpenseForm addExpense={AddExpense} />
          <Card className=' mt-2' style={{width:'700px', margin:'40px auto' , boxSizing:'border-box '}}> 
              <CardTitle className='d-flex justify-content-center mt-2'>Expenses</CardTitle>
            <ul className='m-4'>
                {
                    savedExpense.map((expense) =>(
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
        <div className='d-flex justify-content-center align-items-center'>
           {TotalExpense >=PremiumAmount && <Button  style={{width:200 }} onClick={HandleDownload}>Download Expense</Button>}
        </div>
               
          </Card>
    </div>
  )
}

export default NewExpense


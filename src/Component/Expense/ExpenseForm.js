import React, { useEffect, useRef, useState} from 'react'
import { Button, Card, CardBody, FormControl, FormGroup, FormLabel,Form, CardTitle } from 'react-bootstrap'


const ExpenseForm = (props) => {

    const priceRef = useRef();
    const DescriptionRef = useRef();
    const categoryRef = useRef();
  let expense = [];
  const email = localStorage.getItem('user');
   
    const Submithandler = (e) => {
      e.preventDefault();
      const price = priceRef.current.value;
      const description = DescriptionRef.current.value;
      const category = categoryRef.current.value;
        
        const newExpense = {
            price: price,
            description: description,
            category: category
      }
      props.addExpense(newExpense);
  }



  return (
    <>
      <div className='mt-2'>
        <Card>
            <CardTitle className='d-flex justify-content-center'><h4>Add Expenses</h4></CardTitle>
          <CardBody >
              <Form className='d-flex justify-content-around align-items-center'  onSubmit={Submithandler}>
              <FormGroup className='w-25'>
                  <FormLabel>Money Spended</FormLabel>
                  <FormControl type='number' className='form-control-lg' placeholder="Your Expense Amount" ref={priceRef} required />
              </FormGroup>
              <FormGroup className='w-50'>
                  <FormLabel>Description</FormLabel>
                  <FormControl  type='text' className='form-control-lg' placeholder='Enter The Description' ref={DescriptionRef} required /> 
              </FormGroup>
              <FormGroup>
                <FormLabel>Category</FormLabel>
                <FormControl as='select' ref={categoryRef} className='form-control-lg'>
                  <option value='Food'>Food</option>
                  <option value='Petrol'>Petrol</option>
                  <option value='Movie'>Movie</option>
                  <option value='Grocery'>Grocery</option>
                  <option value='Rent'>Rent</option>
                  <option value='EB Bill'>Eb Bill</option>
                </FormControl>
              </FormGroup>
              <Button type='submit' className='p-3'>Add Expense</Button>
            </Form>
          </CardBody>
         </Card>
          </div>
         
    </>
  )
}

export default ExpenseForm


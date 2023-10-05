import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap/esm';



const Signup = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const conPassRef = useRef();
  const [err, seterr] = useState('');

  const SubmitHandler = async(e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const conpass = conPassRef.current.value;

    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtBcO5-Tb9mSfQ7vWfK2dI_FwdDHvCDiw`, {
      method: 'POST',
      body: JSON.stringify({
          email: email,
          password: password,
          returnSEcureToken:true
      }),
      headers:{'Content-Type':'application/json'}
    });
    const data = await response.json();
    if (!data.ok)
    {
      if (data.error)
      {
        seterr(data.error.message);
      }         
    }
    else {
      seterr('user succesfully Signup');
    }
     
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <Card style={{ width: '480px',height: '250px'}}>
        <Card.Body className='w-100'>
         <Card.Title>Sign Up</Card.Title>
          <form onSubmit={SubmitHandler}>
            <input type='email' className="form-control mb-2" id='email' placeholder='Email' ref={emailRef} required></input>
            <input type='password' className="form-control mb-2" id='pass' placeholder='Password' ref={passRef} required></input>
            <input type='email' className="form-control mb-2" id='emailcon' placeholder='Confirm Email' ref={conPassRef} required></input>
            <h6 style={{ color: 'black' }}>{err}</h6>
            <div className='d-flex justify-content-center align-items-center'>
               <button className="btn btn-primary">Submit</button>
            </div>
          </form>
          
          </Card.Body>
      </Card>
    </div>
  )
}

export default Signup


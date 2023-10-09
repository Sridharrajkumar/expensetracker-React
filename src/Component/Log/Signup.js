

import React, { useContext, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap/esm';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContxtStore/AuthContext';



const Signup = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const conPassRef = useRef();
  const [err, seterr] = useState('');
  const [isLogged, setIsLoggedIn] = useState(true);
  const navigator = useNavigate();
  const authcxt = useContext(AuthContext);


  const SwitchHandler = () => {
    setIsLoggedIn(!isLogged);
  }

  const SubmitHandler = async(e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    let conpass = '';
    if (!isLogged)
    {
      conpass = conPassRef.current.value;
    }

    if (isLogged)
    {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtBcO5-Tb9mSfQ7vWfK2dI_FwdDHvCDiw', {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
          }),
          headers:{'Content-Type':'appliaction/json'}  
      })
      const data = await response.json();
      authcxt.login(data.idToken);
      navigator('/store', { replace: true });
      console.log(data);
      if (!data.ok)
      {
        if (data.error)
        {
          seterr(data.error.message);
        }         
      }
      
      

    }
    else
    {
          const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtBcO5-Tb9mSfQ7vWfK2dI_FwdDHvCDiw`, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken:true
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
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Card style={{ width: '480px',height: '250px'}}>
        <Card.Body className='w-100'>
          <Card.Title>{isLogged ? 'LogIn' : 'Sign Up'}</Card.Title>
          <form onSubmit={SubmitHandler}>
            <input type='email' className="form-control mb-2" id='email' placeholder='Email' ref={emailRef} required></input>
            <input type='password' className="form-control mb-2" id='pass' placeholder='Password' ref={passRef} required></input>
            { !isLogged && <input type='email' className="form-control mb-2" id='emailcon' placeholder='Confirm Email' ref={conPassRef} required></input>}
            <h6 style={{ color: 'black' }}>{err}</h6>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <button className="btn btn-primary">Submit</button>
              {isLogged && <a className='text-danger text-decoration-none' href='/forgotpass'>Forget Password</a>}
            </div>
          </form>
          </Card.Body>
      </Card>
      <button className='btn btn-success mt-2' onClick={SwitchHandler}>
        {isLogged ? 'Create New Account?Signup' : 'Already have an account?Login'}
      </button>
    </div>
  )
}

export default Signup


import React, { useRef, useState } from 'react'
import { Card, CardBody, CardTitle,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const emailRef = useRef();
    const navigator = useNavigate();
    const [loader, setLoader] = useState(false);

    const PasswordReset = async (e) => {
        e.preventDefault();
        setLoader(true);
        const email = emailRef.current.value;
        console.log('hi');
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDtBcO5-Tb9mSfQ7vWfK2dI_FwdDHvCDiw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                requestType: "PASSWORD_RESET",
                email:email
            })
        });
     
        const data = await response.json();
        console.log(data);
        setLoader(false);
        navigator('/Login',{ replace: true })
    }

  return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <Card style={{ width: '480px' }}>
             <CardTitle className='d-flex justify-content-center '>Reset Password</CardTitle>
              <CardBody>
                  <form onSubmit={PasswordReset}>
                      <label>Enter Email</label>
                      <input type='email' className="form-control mb-2" ref={emailRef} required/>
                      <Button type='submit' style={{marginLeft:'35%'}}>Submit</Button>
                 </form>
              </CardBody>
          </Card>
          <div>
              {loader && <p>Reset password link as be send to user email</p>}
          </div>
    </div>
  )
}

export default ForgetPassword


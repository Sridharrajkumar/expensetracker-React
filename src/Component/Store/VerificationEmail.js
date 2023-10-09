import React, { useContext, useRef, useState } from 'react'
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap'
import { AuthContext } from '../../ContxtStore/AuthContext';

const VerificationEmail = () => {
    const emailRef = useRef();
    const authcxt = useContext(AuthContext);
    const token = authcxt.token;
    const [err, setErr] = useState('');

    const VericationHandler = async(e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        console.log('hello');

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDtBcO5-Tb9mSfQ7vWfK2dI_FwdDHvCDiw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                requestType: "VERIFY_EMAIL",
                idToken: token
            })
        })

        const data = await response.json();
        console.log(data);
        if (!data.ok)
        {
          if (data.error)
          {
            setErr(data.error.message);
          }         
        }
        else {
          setErr('Verification Link Send to your Email');
        }

    }



  return (
      <div className="d-flex flex-coloumn justify-content-center align-items-center vh-100">
          <Card style={{width: '480px'}}>  
              <CardBody>
                  
                        <CardTitle>Verication Email</CardTitle>
                        <label>Email</label>
                        <input type="email" className="form-control mb-2" ref={emailRef}/>
                        <Button onClick={VericationHandler}>Verify Email</Button>
                        <h6 style={{ color:'black'}}>{err}</h6>
              </CardBody>
          </Card>
    </div>
  )
}

export default VerificationEmail
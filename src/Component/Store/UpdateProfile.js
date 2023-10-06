import React, { useRef, useState } from 'react'
import classes from './UpdataProfile.module.css'
import { Card, CardBody, CardTitle } from 'react-bootstrap';

const UpdateProfile = () => {
    const [updating, setUpdating] = useState(true);
    const nameRef = useRef();
    const photoRef = useRef();


    const SwitchHandler = () => {
        setUpdating(!updating);
    }

    const SubmitHandler = async(e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const photo = photoRef.current.value;
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDtBcO5-Tb9mSfQ7vWfK2dI_FwdDHvCDiw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                displayName: name,
                photoUrl:photo,
            })
        })
        const data = await response.json();
        console.log(data);
    }
  return (
    <>
          <div className={classes.update}>
              <h2>Welcome to Expense Tracker</h2>
              <p><b>{updating ? 'Your Profile is Incomplete': 'Your Profile is 64% completed.A Complete profile has higher Chances of landing a Job '}</b><button className={classes.complete}  onClick={SwitchHandler}>complete now</button></p>
          </div>
          {!updating && 
              <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                  <Card style={{ width: '540px',height: '280px'}}>
                      <div className={classes.top}>
                          <CardTitle>Contact Details</CardTitle>
                          <button className={classes.cancel}>Cancel</button>
                      </div>
                      <CardBody>
                          <form onSubmit={SubmitHandler}>
                              <label className='form-label'>Full Name:</label>
                              <input type='text' className='form-control' ref={nameRef} required/>
                              <label className='form-label' >Profile Photo URL:</label>
                              <input type='link' className='form-control'ref={photoRef} required/>
                              <div className="d-flex justify-content-center ">
                                  <button className="btn btn-primary mt-2" >Update Profile</button>
                              </div>
                          </form>
                      </CardBody>
                  </Card>
              </div>
          }
    </>
  )
}

export default UpdateProfile
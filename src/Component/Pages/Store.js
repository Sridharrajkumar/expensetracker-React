import React from 'react'
import { Link } from 'react-router-dom'
import classes from  './Store.module.css'



const Store = () => {
  return (
      <>
        <div className={classes.update}>
        <h3>Welcome to Expense Tracker</h3>
        <p><b>Your Profile is Incomplete</b><Link className={classes.complete} to="/updateprofile">Complete Now</Link></p>
        </div>
     </>
  )
}

export default Store


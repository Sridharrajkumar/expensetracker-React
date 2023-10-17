import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../../ContxtStore/AuthReducer';
import { ExpenseActions } from '../../ContxtStore/ExpenseReducer';
import { ModeAction } from '../../ContxtStore/ModeReducer';

const ENav = () => {
  const Authselector = useSelector(state => state.auth.isLogged);
  const dispatch = useDispatch();
  const TotalExpense = useSelector(state => state.expenses.totalExpenses);
  const PremiumAmount = 10000;



  const LogOutHandler = () => {
    dispatch(AuthActions.logout())
    dispatch(ExpenseActions.resetExpense())
  }

  const HandleMode = () => {
    dispatch(ModeAction.toggleMode());
    console.log('mode');
  }

  return (
      <>
      <Navbar expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
              <h3>Expense Tracker</h3>
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to='/'><h5>Home</h5></Nav.Link>
            <Nav.Link as={NavLink} to='/store'><h5>Store</h5></Nav.Link>
            <Nav.Link as={NavLink} to='/about'><h5>About</h5></Nav.Link>
            <Nav.Link as={NavLink} to='/'><h5>Contact</h5></Nav.Link>
          </Nav>
          <div className='d-flex gap-2'>
            {!Authselector ? <Button as={NavLink} to='/Login'>LogIn</Button>:<Button onClick={LogOutHandler}>LogOut</Button>}
            {Authselector && <Button as={NavLink} to='/verification'>verification <br/> Email</Button>}
            {TotalExpense >= PremiumAmount && <Button style={{ backgroundColor: 'purple' }} onClick={HandleMode}>Activate <br /> Premium</Button>}
          </div>
       </Container>
      </Navbar>
      </>
  )
}

export default ENav


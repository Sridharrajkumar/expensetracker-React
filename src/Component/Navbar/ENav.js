import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../ContxtStore/AuthContext';

const ENav = () => {
  const AuthCxt = useContext(AuthContext);



  const LogOutHandler = () => {
    AuthCxt.logOut();
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
            {!AuthCxt.islogged ? <Button as={NavLink} to='/Login'>LogIn</Button>:<Button onClick={LogOutHandler}>LogOut</Button>}
            {AuthCxt.islogged && <Button as={NavLink} to='/verification'>verification</Button>}
          </div>
       </Container>
      </Navbar>
      </>
  )
}

export default ENav


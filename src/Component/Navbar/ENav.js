import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ENav = () => {
  return (
      <>
      <Navbar expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
              <h3>MyWebLink</h3>
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to='/'><h5>Home</h5></Nav.Link>
            <Nav.Link as={NavLink} to='/store'><h5>Store</h5></Nav.Link>
            <Nav.Link as={NavLink} to='/about'><h5>About</h5></Nav.Link>
            <Nav.Link as={NavLink} to='/'><h5>Contact</h5></Nav.Link>
          </Nav>
          <div>
            <Button as={NavLink} to='/Login'>LogIn</Button>
          </div>
       </Container>
      </Navbar>
      </>
  )
}

export default ENav


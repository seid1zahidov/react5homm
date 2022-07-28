import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
            <Link className='btnss links' to="/"> home</Link>
                <Link className='btnss links' to="/Products">Products</Link>
                <Link className='btnss links' to="/Addproduct">Add product</Link>
            </Nav>
        </Container>
     </Navbar>
     </>
    </div>
  )
}

export default Header
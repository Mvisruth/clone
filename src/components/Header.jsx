import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand className='text-warning fs-3 fw-bold' href="#home">Christy Anne Jones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">A Year in Tōkyō</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Shop
            </Nav.Link>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link href="#deets">Writings</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav.Link href="#deets"><i class="fa-brands fa-youtube "></i></Nav.Link>
            <Nav.Link href="#deets"><i class="fa-brands fa-instagram"></i></Nav.Link>
            <Nav.Link href="#deets"><i class="fa-brands fa-twitter"></i></Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    </>
  )
}

export default Header
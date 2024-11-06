import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { key, endpoint } from '../Constants';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar-transparent" style={{marginTop: "10px", borderRadius: "10px"}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color: "#FFFFFF"}}>Pixel News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color: "#FFFFFF"}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color: "#FFFFFF"}}>Forum</Nav.Link>
            <Nav.Link href="#" disabled style={{color: "#FFFFFF"}}>
              Categoria
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-custom">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const NavBarTop = () => {
  const [cookies, , removeCookie] = useCookies(['Cookieee']);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('Cookieee', { path: '/' });
    navigate('/Login');
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">TechCart</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Shop">Shop</Nav.Link>
          {cookies.Cookieee ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link href="/Login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logout from './Logout'; // Import the Logout component

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['Cookieee']);
  const [isLoggedin, setisLoggedin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'omar@gmail.com' && password === '1234') {
      setCookie('Cookieee', { email }, { path: '/' });
      setisLoggedin(true);
      navigate('/Shop');
    } else {
      alert('Incorrect username or password');
    }
    console.log('Login attempted with:', { email, password });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          {!isLoggedin ? (
            <>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </>
          ) : (
            <>
              <h2 className="text-center mb-4">Welcome, {email}</h2>
              <Logout setisLoggedin={setisLoggedin} /> 
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

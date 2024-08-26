import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import products from '../Products';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export const calcDiscount = (price, discount) => {
  const discountAmount = price * discount;
  const finalPrice = price - discountAmount;
  return finalPrice.toFixed(2);
};

export const Shop = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1000);
  }, []);

  return (
    <Container fluid className='container-md mt-5 mb-5' style={{ minHeight: '80vh', maxWidth: '90vw' }}>
      <h2 className='text-md-start'>Latest</h2>
      <Form className='mb-3'>
        <Form.Control onChange={(event) => setSearch(event.target.value)} placeholder='Search Items' />
      </Form>

      {loading ? (
        <Spinner animation='border' role='status' variant="dark">
        <span className="visually-hidden">Loading...</span>
         </Spinner>
      ) : (
        <Row xs={3} md={4} className='g-3'>
          {products.filter((item) => {
            return search === '' ? item : item.name.includes(search);
          }).map((product) =>
            <Col key={product.id} className="my-3">
              <Card className="mx-2 d-flex flex-column h-100">
                <Card.Img variant="top" src={product.image} className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                <Card.Body className="flex-grow-1 d-flex flex-column">
                  <Card.Header className='text-capitalize fw-bold mb-0 fs-6' style={{ backgroundColor: 'transparent' }}>
                    {product.name}
                  </Card.Header>
                  <Card.Text className='text-md-center mt-3'>
                    {product.description}
                  </Card.Text>
                  <Card.Text className="text-md-start mt-auto" style={{ color: 'gray' }}>
                    Price: <span style={{ textDecoration: 'line-through' }}>${product.price}</span>
                    <span style={{ color: 'green', marginLeft: 5 }}>${calcDiscount(product.price, product.discount)}</span>
                  </Card.Text>
                  <Button href={`/ProductDetails/${product.id}`} variant="dark" size='sm' className="w-100 mt-3">
                    More details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

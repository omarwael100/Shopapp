import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../Products';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import { calcDiscount } from './Shop';
export const ProductDetails = () => {
    const { productID } = useParams();
    const product = products.find(p => p.id === parseInt(productID));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div>
            <Container className='container-md mt-5 mb-5' fluid>
                <h1 className='text-md-start text-dark fw-bold' style={{ textDecoration: 'underline' }}>{product.name}</h1>
                <Row>
                    
                    <Col xs={12} md={6}>
                        <Image src={product.image} rounded fluid />
                    </Col>

                    <Col xs={12} md={6} >
                        <Card>
                            <Card.Body className='text-md-start '>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-grid gap-2 col-6 '>
                                <Button variant="dark" style={{width:'30vh' }} >Add to Cart</Button>
                                <Button variant="dark" style={{width:'30vh' }}>Buy Now</Button>
                                </div>
                                <div className='me-4'  >
                                    <Card.Text>Price:<span style={{color:'green', fontWeight:'bolder'}}> ${calcDiscount(product.price,product.discount)}</span><span style={{textDecoration:'line-through', marginLeft:5}}>${product.price}</span> </Card.Text>
                                    <Card.Text >Stock:<span style={{color:'orange',fontWeight:'bold'}}>{product.stock}</span><span style={{marginLeft:5}}>Pieces</span></Card.Text>
                                </div>
                                </div>
                                <Card.Text className='mt-3'>{product.description}</Card.Text>
                                <Card.Text>{product.details}</Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {posts} from '../Posts'
import Container from 'react-bootstrap/esm/Container';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';


export const Home = ()=> {

  const [loading,setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  return (

  <Container fluid className='container-md mt-5 mb-5' style={{minHeight: '80vh', maxWidth: '90vw'}}>
    <h2 className=' text-md-start '>Latest</h2>
    {loading ? (
       <Spinner animation='border' role='status' variant="dark">
        <span className="visually-hidden">Loading...</span>
         </Spinner>
    ):(
 <Row xs={3} md={4} className='g-2'  >
  {posts.map((post) =>
  <Col key={post.id}  className="my-3">   
  <Card className="mx-2 h-100" >
    <Card.Header className="d-flex align-items-center">
     <Image variant='top' src={post.imgSrc} roundedCircle/>
     <Card.Text className="text-lg-center fw-bold ms-2" >{post.name}</Card.Text>
     </Card.Header>
     <Card.Body>
        <Card.Text>
            {post.content}
        </Card.Text>

     </Card.Body>
     <small className="text-md-center">Last Update: {post.from}</small>
   </Card>
   </Col>

  

  )}

   </Row>
  )}

 </Container>

  );

}
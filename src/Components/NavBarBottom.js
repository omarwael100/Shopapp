import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const  NavBarBottom= () => {

    return(
        <footer >
      <Navbar bg="dark" data-bs-theme="dark" fixed='bottom'  >
        <Container>
         <Nav className='ms-auto' >
         <Nav.Link href="/Home">Home</Nav.Link>
         <Nav.Link href="/Shop">Shop</Nav.Link>
         </Nav>
        </Container>
        

    </Navbar>
    </footer>


    );
}
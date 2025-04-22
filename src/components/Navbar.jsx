import '../styles/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './Cartwidget'
const Navbars = () => {
    return(
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <img src="./logo.png" alt="" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Celulares</Nav.Link>
            <Nav.Link href="#home">Tablets</Nav.Link>
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Mas Vendidos</Nav.Link>
          </Nav>
        </Container>
        <Cartwidget/>
      </Navbar>
       
        
    )
}

export default Navbars
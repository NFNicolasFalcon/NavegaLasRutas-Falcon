import '../styles/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './Cartwidget'
import { NavLink } from 'react-router-dom'
const Navbars = () => {
    return(
        <Navbar bg="light" data-bs-theme="light">
        <Container className='navContainer'>
        <NavLink to='/'>
          <img src="./logo.png" alt="Logo" />
          </NavLink> 
          <div className='aContainer'>
                <NavLink to='/category/Nuevos'>Nuevos</NavLink>
                <NavLink to='/category/ofertas'>Ofertas</NavLink>
                <NavLink to='/category/mas vendidos'>Más vendidos</NavLink>
            </div>
        </Container>
        <Cartwidget/>
      </Navbar>
       
        
    )
}

export default Navbars
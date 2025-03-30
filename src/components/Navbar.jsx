import '../styles/Navbar.css'
import Cartwidget from './Cartwidget'
const Navbar = () => {
    return(
        <nav className="navContainer">
            <img src="../logo.png" alt="Logo" className='logo'/>
            <div className="aContainer">
                <a>Celulares</a>
                <a>Tablets</a>
                <a>Ofertas</a>
                <a>Mas vendidos</a>
            </div>
            <Cartwidget/>
        </nav>
        
    )
}

export default Navbar
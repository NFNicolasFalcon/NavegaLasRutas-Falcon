
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Itemlistcontainer from './components/Itemlistcontainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Itemlistcontainer greeting='Bienvenidos a Cell-Store 😀'/>
    <ItemDetailContainer/>
    </>
  )
}

export default App
  
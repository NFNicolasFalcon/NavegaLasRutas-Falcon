
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Itemlistcontainer from './components/Itemlistcontainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Itemlistcontainer greeting='Bienvenidos a Cell-Store 😀'/>}/>
    <Route path='/category/:categoryId' element={<Itemlistcontainer greeting='Estas en la categoria:'/>}/>
    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
  
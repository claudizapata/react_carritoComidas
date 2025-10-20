import React from 'react'
import  { Routes, Route} from 'react-router-dom' 
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Nosotros from './pages/Nosotros'
import ProductoDetalle from './pages/DetalleProductos'
import './App.css'



function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={ < Inicio/> } />
        <Route path='/productos' element= { <Productos/>}/>
        <Route path='/nosotros' element= { <Nosotros/> } />
        <Route path='/productos/:id' element= { <ProductoDetalle/> } />
        <Route path='/productos/:categoria/:id' element= { <ProductoDetalle/> } />{/* Categoria y id son rutas dinámicas */}
        <Route path='/productos/categoria/:id' element= { <ProductoDetalle/> }/>{/* En el caso de tener una BD sin categoria, la ponemos estática */}
       {/*  <Route path='/carrito' element={ <CarritoPage/> } /> */}

      </Routes> 
      <Footer/>

      
    </div>
  )
}

export default App
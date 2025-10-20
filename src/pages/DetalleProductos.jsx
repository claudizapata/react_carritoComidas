import React from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';

const ProductoDetalle = () => {
    //Ej: URL ->"/productos/123"
    const {id} = useParams(); //Capturo el id, controlo lo que la ruta va a mostrar en la url
    const location = useLocation()//Con location traigo la información que pasé con el state en Productos.jsx
    const producto = location.state?.producto;
/* 
    //Ej: URL -> "/categoria/electronica/producto/456"
    const { categoriaID, productoId } = useParams();
 */
    if (!producto){//renderizado condicional
        return (
            <div>
                <p>No se pudo cargar el producto</p>
                <Link to="/carrito">
                    <button>Volver a Productos</button>
                </Link>
            </div>
        );
    }

  return (//Acá muestro el renderizado
    <>
    <div style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
        <h2>Detalles del Producto  {id} </h2>
        <hr />
        <ul>
            <li key={producto.id}>
               <p style={{fontSize: "1.8rem"}}>{producto.nombre}</p> 
                <br />
                <p><strong>Descripción: </strong> {producto.descripcion} </p>
                <p><strong>Precio: </strong>  ${producto.precio} </p>
                <img src= {producto.avatar} alt= {producto.nombre} width="35%" />
            </li>
            <hr />
            <Link to={`/productos`}><button>Volver</button></Link>
        </ul>
    </div>
    

    </>
    
  )
}

export default ProductoDetalle
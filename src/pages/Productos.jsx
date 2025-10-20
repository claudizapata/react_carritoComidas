import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarritoCompras from "./Carrito";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);


  useEffect(() => {
      fetch("https://68eed365b06cc802829b672e.mockapi.io/api/productos")
      /* https://www.themealdb.com/api/json/v1/1/categories.php */
      .then(respuesta => respuesta.json()).then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}//Manejo de errores
        setError("Hubo un problema al cargar los productos");
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) =>{
    setCarrito([...carrito,producto]);
    alert(`Producto ${producto.nombre} agregando al carrito`);
  }

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;
  //Si estos dos dan falso renderiza los PRODUCTOS, continúa con el RETURN de abajo

  return (
<>
        {/* <section style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            marginTop: "20px"
            }}>
                
                {/* {productos.map((imagen, index) =>(//INDEX reemplaza al valor del id, index permite mostrar la imagen
                    <img key={index}
                         src={imagen} //URL de la imagen del array
                         alt={`Imagen ${index +1}`}
                         style={{
                            width: "150px",
                            height: "150px"
                         }}
                    />
                ))}
        </section>   */}
        <section className="productos" style={{display: "flex", justifyContent: "center" }} >
            <ul id="lista-productos">
                {productos.map((producto) => ( 
                    <li id="tarjeta" key={producto.id}>
                          <p style={{fontWeight: "bold", fontSize: "1rem"}}>{producto.nombre}</p>
                          <br />
                          <div style={{display: "flex"}}>
                              <img style={{padding: ".2rem", alignContent: ""}} src={producto.avatar} alt={producto.nombre} width="40%" height="40%" />
                              <br />
                              {producto.descripcion}
                              <br />
                          </div>
                          <div style={{marginBottom: "1rem", fontWeight: "bolder", fontSize: "1rem"}}>
                              ${producto.precio}
                          </div>
                          <Link to= {`/productos/${producto.categoria || 'sin-categoria'}/${producto.id}`} state={{producto}}><button>Más Detalle</button></Link>
                          {/* "state es la memoria del producto. Cuando hago click en boton "Más Detalle" guarda en memoria 
                          el producto para luego mostrar el detalle del producto */}
                          <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>                
                    </li>
                ))}
            </ul>
            <CarritoCompras carrito={carrito} setCarrito={setCarrito}/>
        </section>
</>
  );
}
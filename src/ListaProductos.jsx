
import { useState, useEffect } from "react";
import './App.css';


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);//Usamos una variable de carga de productos
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://68eed365b06cc802829b672e.mockapi.io/api/")
      .then((respuesta) => respuesta.json()).then((datos) => {
        setProductos(datos);//Cuando obtengo los datos de la API, establezco el valor de setProductos
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos");
        setCargando(false);
      });
  }, []);


  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;


  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>
          Nombre: {producto.nombre}
          <br />
          Descripción: {producto.descripcion}
          <br />
          Precio: ${producto.precio}
          <br />
          <img src={producto.avatar} alt={producto.nombre} width="100" />
        </li>
      ))}
    </ul>
  );
}
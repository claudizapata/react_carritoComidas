import React from 'react';


export default function CarritoCompras({ carrito, setCarrito }) {
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const quitarCantidad = (idProducto) => {
    const carritoActualizado = carrito.map(producto => {
      if (producto.id === idProducto) {
        const cantidadActual = producto.cantidad || 1;
        if (cantidadActual === 1) {
          return null;
        }
        return { ...producto, cantidad: cantidadActual - 1 };
      }
      return producto;
    }).filter(producto => producto !== null);

    setCarrito(carritoActualizado);
  };

    const agregarCantidad = (idProducto) => {
    const nuevoCarrito = carrito.map(producto => {
      if (producto.id === idProducto) {
        return {
          ...producto,
          cantidad: (producto.cantidad || 1) + 1
        };
      }
      return producto;
    });
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce((sum, item) => {
    const cantidad = item.cantidad || 1;
    return sum + (Number(item.precio) * cantidad);
  }, 0);

  return (
    <div>
      <hr />
      <h3>Carrito de Compras</h3>
      <hr />
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            

            <div className='carrito_producto' key={item.id}>
              <div style={{marginBottom: ".5rem", color:"#f15508ff"}}>
                 {item.nombre} <br /> 
                ${Number(item.precio).toFixed(3)}
              </div>
              <div >
                  <button className='' onClick={() => quitarCantidad(item.id)}>-</button>
                  Cantidad ({item.cantidad || 1})
                 <button onClick={() => agregarCantidad(item.id)}>+</button>
              </div>
                
            </div>
          ))}

          <div>
            <hr />
            Total: ${Number(total).toFixed(2)}
          </div>
          <button onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
}
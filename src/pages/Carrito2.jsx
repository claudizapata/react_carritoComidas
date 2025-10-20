
/* 
function CarritoCompras ({carrito, setCarrito}) {
  //Calcular el total de la compra
  const vaciarCarrito =() =>{
    setCarrito([]);
  };

  const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);
 

  return (
    
    <div>
      <hr />
      <h2>Figuras Antiguas</h2>
      {carrito.length === 0?(
        <p>El carrito está vacío</p>
      ) : (
        <>
        {carrito.map((item) => (
          <div>
            {item.nombre} - ${item.precio.toFixed(3)}
          </div>
        ) )}
         {/* Muestra el total de la compra 
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f5f5f5',
          fontWeight: 'bold'}}>
            Total: ${total.toFixed(3)}
          </div>
        </>
      )}
    </div>
    
    
  )
}

export default CarritoCompras;

 */
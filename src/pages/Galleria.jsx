import React from 'react'

function Gallery() {
    const images = [
        "https://picsum.photos/id/1/200/300",
        "https://picsum.photos/id/20/200/300",
        "https://picsum.photos/id/24/200/300",
        "https://picsum.photos/id/26/200/300",
        "https://picsum.photos/id/36/200/300",
        "https://picsum.photos/id/42/200/300",
        "https://picsum.photos/id/48/200/300"
    ]

  return (
    <>
        <section style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            marginTop: "20px"
            }}>
                
                {images.map((imagen, index) =>(//INDEX reemplaza al valor del id, index permite mostrar la imagen
                    <img key={index}
                         src={imagen} //URL de la imagen del array
                         alt={`Imagen ${index +1}`}
                         style={{
                            width: "150px",
                            height: "150px"
                         }}
                    />
                ))}
        </section>  
    </>
  );
}export default Gallery;

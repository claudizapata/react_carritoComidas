import React from 'react';

function Header() { 

    return (
     <>
        <header //archivo css inline (en la misma línea del HEADER)
         //en .jsx es con camelcase el nombre de la propiedad
         //en .jsx los valores van entre comillas
        >
                <div >
                    <a style={{display: "flex", justifyContent: "right", padding: "10px"}} href="">Login</a>

                    <h1 style={{fontWeight: "bold", color: "orange", fontSize:'4rem',
                        /* backgroundColor: "#ccaa8dff", */ width: "100%"}}>Cooking Great</h1>

                </div>
            
        </header> 
     </>
    )
} export default Header;
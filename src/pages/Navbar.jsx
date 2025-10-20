import React from 'react';
import { Link } from 'react-router-dom'

//LINK para turas ESTÁTICAS

function Navbar() { 
    return ( 
        <nav id='navBar'>
         
            <ul style={{ display: "flex",
                justifyContent: "space-around",
                margin: 0, /* backgroundColor: "white" */ padding: "5px"}}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Productos"> Productos </Link> </li>{/* Carga del link a Productos */}
                <li><Link to="/Nosotros">Nosotros</Link> </li>{/* Carga del Link a Nosotros */}
                {/* En App.jsx falta carga el COMPONENTE */}
            </ul>
        </nav>
    /* style={{ color: "black",textDecoration: "none" }} */
    
    )
} export default Navbar
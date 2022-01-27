import React from "react";
import Carrito from "./CartWidget";
import ItemList from "./ItemListContainer"

function NavBar(){
    return(
        <nav className='menu'>
            <ul className='menu-lista'>
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Sobre Nosotros</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="" className='linkACarrito'><Carrito/><ItemList/></a></li>
            </ul>
        </nav>
    )
}
export default NavBar

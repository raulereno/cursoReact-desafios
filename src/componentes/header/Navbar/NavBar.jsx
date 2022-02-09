import React from "react";
import logo from "./../../../logo-normal.png";
import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <div className="navBar">
            <a href=""><img src={logo} className='logo'/></a>
                <nav className='menu'>
                    <ul className='menu-lista'>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Sobre Nosotros</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="" className='linkACarrito'><CartWidget/></a></li>
                    </ul>
                </nav>
                <button type='button' className='btn btn-secondary botonLogin'>Login</button>
        </div>
    )
}
export default NavBar

import React from "react";
import logo from "./../../../logo-normal.png";
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';

function NavBar(){
    const isActive = ({isActive})=> isActive ? 'active': '';
    
    
    return(
        <div className="navBar">
            <NavLink to={"/"}><img src={logo} className='logo'/></NavLink>
                <nav className='menu'>
                    <ul className='menu-lista'>
                        <li><NavLink to={"/"} className={isActive}>Inicio</NavLink></li>
                        <li><NavLink to={"/Productos"} className={isActive}>Productos</NavLink></li>
                        <li><a href="">Sobre Nosotros</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><NavLink to={"/Cart"} className={'linkACarrito '+{isActive}}><CartWidget/></NavLink></li>
                    </ul>
                </nav>
                <button type='button' className='btn btn-secondary botonLogin'>Login</button>
        </div>
    )
}
export default NavBar

import React from "react";
import logo from "./../../../logo-normal.png";
import CartWidget from "./CartWidget";
import {NavLink, Link} from 'react-router-dom';

function NavBar(){
    const isActive = ({isActive})=> isActive ? 'active': '';
    
    
    return(
        <div className="navBar">
            <NavLink to={"/"}><img src={logo} className='logo'/></NavLink>
                <nav className='menu'>
                    <ul className='menu-lista'>
                        <li>
                            <NavLink to={"/"} className={isActive}>Inicio</NavLink></li>
                        <li>
                            <div className="dropdown itemsDespegables">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                               Productos
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <NavLink className={'dropdown-item '+{isActive}} to={'/Categoria/BoredMonkeys'}>Coleccion: Bored Monkeys</NavLink>
                                </li>
                                <li>
                                    <NavLink className={"dropdown-item "+{isActive}} to={'/Categoria/LazyLions'}>Coleccion: Lazy Lions </NavLink>
                                </li>
                                <li>
                                    <NavLink className={"dropdown-item "+{isActive}} to={'/Productos'}>Todos los productos</NavLink>
                                </li>
                            </ul>
                            </div>
                        </li>
                        {/* <li><a href="">Sobre Nosotros</a></li>
                        <li><a href="">Contacto</a></li> */}
                        <li>
                            <NavLink to={"/Cart"} className={'linkACarrito '+{isActive}}>
                                <CartWidget/>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* Funcion a agregar mas adelante */}
                {/* <button type='button' className='btn btn-secondary botonLogin'>Login</button> */}
                <div style={{width:210}}>

                </div>
        </div>
    )
}
export default NavBar

import iconCarrito from './iconCarrito.svg';
import {CarritoContext} from './../../../context/CartContext'
import { useContext } from 'react';


function CartWidget(){

    const {carrito}= useContext(CarritoContext)

    return(
        <>
        <img src={iconCarrito} alt=""/>
        <span>{carrito.length}</span>
        </>
    )
}

export default CartWidget
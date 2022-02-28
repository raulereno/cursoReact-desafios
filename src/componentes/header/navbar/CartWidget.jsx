import iconCarrito from './iconCarrito.svg';
import {CarritoContext} from './../../../context/CartContext'
import { useContext } from 'react';


function CartWidget(){

    const {carrito}= useContext(CarritoContext)

    return(
        <div>
            {(carrito.length == 0)?"":<div><img src={iconCarrito} alt=""/>
            <span>{carrito.length}</span></div>}
        </div>
    )
}

export default CartWidget
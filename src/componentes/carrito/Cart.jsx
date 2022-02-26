import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {CarritoContext} from './../../context/CartContext'
import ValorMoneda from '../consultaValor/ValorMonedaEth'

function Cart() {

  const {carrito,quantity,removeItem,clearCart} = useContext(CarritoContext)

  return (
    <div>
      <h1>Carrito({carrito.length})</h1>
      <ul className='listCartItems'>{carrito &&
          carrito.map((i) => (
              <li className='itemInCart'>
                <img src={i.imgUrl} className='imgInCart'/>
                <div className='infoItemInCart'>
                  <p>{i.name}</p>
                  <p>{i.creator}</p>
                  <p>Cantidad:{quantity}</p>
                </div>
                <div className='priceItemInCart'>
                  <p>Precio: {i.price} ETH <img src="https://img.icons8.com/ios/25/000000/ethereum.png"/></p>
                  <p>Precio en USD: {<ValorMoneda precioEnEth={i.price}/>} $USD</p>
                </div>
                {/* Agregar funcionalidad a este boton */}
                <button className='btn btn-light deleteItem' onClick={()=>removeItem(i.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </button>
              </li>
            ))}
      </ul>
      {/* <Link to={'/Cart/Checkout'} className='btn btn-primary'>Checkout</Link> */}
      <p>Total en ETH:</p>
      <p>Total en USD:</p>
      <button className='btn btn-danger' onClick={()=>clearCart()}>Vaciar Carrito</button>
      <Link to={'/Cart/Checkout'} className='btn btn-success'>Finalizar compra</Link>
    </div>
  )
}

export default Cart
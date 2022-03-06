import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {CarritoContext} from './../../context/CartContext'
import ValorMoneda from '../consultaValor/ValorMonedaEth'

function Cart() {

  const {carrito,cantidad,totalEthEnCart,removeItem,clearCart} = useContext(CarritoContext)

  if(carrito.length==0){
    return( 
      <div className='mensajeCarritoVacio'>
        <p className='explicacion'>No posee ningun articulo en el carrito</p>
        <p className='pregunta'>Que desea hacer?</p>
        <div className='links'>
          <Link to={'/'} className={'btn btn-light'}>Ir al Inicio</Link>
          <Link to={'/Productos'} className={'btn btn-light'}>Ir a catalogo</Link>
        </div>
      </div>
    )
  }
  return (
    <div>
      <h1 className='tituloCarrito'>Carrito({carrito.length})</h1>
      <ul className='listCartItems'>{carrito &&
          carrito.map((i) => (
              <li className='itemInCart' key={i.id}>
                <img src={i.imgUrl} className='imgInCart'/>
                <div className='infoItemInCart'>
                  <p className='nombreDelProducto'>{i.name}</p>
                  <p>Creado por: {i.creator}</p>
                  <p>Cantidad:{i.cantidad}</p>
                </div>
                <div className='priceItemInCart'>
                  <p>Precio: {i.price*i.cantidad} ETH <img src="https://img.icons8.com/ios/25/000000/ethereum.png"/></p>
                  <p>Precio en USD: {<ValorMoneda precioEnEth={i.price*i.cantidad}/>} $USD</p>
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
      <div className='infoGeneralCarrito'>
        <div className='precios'>
          <p>Total en ETH: {totalEthEnCart.toFixed(5)} {totalEthEnCart? <img src="https://img.icons8.com/ios/35/FFFFFF/ethereum.png" className='signoEth'/>:""} </p>
          <p>Total en USD: {<ValorMoneda precioEnEth={totalEthEnCart}/>} $USD </p>
        </div>
        
        <div className='botonesCarrito'>
          <button className='btn btn-danger' onClick={()=>clearCart()}>Vaciar Carrito</button>
          <Link to={'/Cart/Checkout'} className='btn btn-success'>Finalizar compra</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
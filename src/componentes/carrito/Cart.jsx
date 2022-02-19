import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
    <h1>Carrito</h1>
    <Link to={'/Cart/Checkout'} className='btn btn-primary'>Checkout</Link>
    </>
  )
}

export default Cart
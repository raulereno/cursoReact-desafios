import React,{createContext, useState} from 'react'

export const CarritoContext = createContext();


const CartContext = ({children}) => {
  
  const [carrito, setCarrito] = useState([]);
  const [quantity, setQuantity]  = useState(null)

  const addItem = (item,quantity) =>{
    setCarrito([...carrito,item]);
    setQuantity(quantity)
  }

  const removeItem= (id)=>{
    console.log(id);
    const cartActualizado = carrito.filter((e)=>e.id != id)
    console.log(cartActualizado);
    setCarrito(cartActualizado)
  }
  const clearCart= ()=>{
    setCarrito([])
  }
  const isInCart=(id)=>{
    //Funcion que busca en el cart y retorna true o false
  }

  return (
    <CarritoContext.Provider value={{
      //Fn
      addItem,
      removeItem,
      clearCart,
      //Variables
      carrito,
      quantity}}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CartContext
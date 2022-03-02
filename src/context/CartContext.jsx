import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

const CartContext = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

  const [cantidad, setCantidad] = useState(null);

  const [totalEthEnCart, setTotalEth] = useState(null) 

  const addItem = (item, quantity) => {
    
    if(quantity>1){item.cantidad+= quantity}
    else{ item.cantidad++}
    
    let totalEth=0;
    
    totalEth = totalEthEnCart + item.price * quantity;
    
    setTotalEth(totalEth)
    console.log(totalEthEnCart);

    if(isInCart(item.id)){
      return

    }else{
      setCarrito([...carrito, item]);
      setCantidad(quantity);
      
    }
    
  };

  const removeItem = (id) => {
    let restarPrecio= carrito.find((e)=>e.id == id);

    setTotalEth(totalEthEnCart-(restarPrecio.price*restarPrecio.cantidad));

    const cartActualizado = carrito.filter((e) => e.id != id);
    setCarrito(cartActualizado);
  };
  
  const clearCart = () => {
    setCarrito([]);
    setTotalEth(0)
  };
  
  const isInCart = (id) => {
    return carrito.some((e)=>e.id == id)      
  };
   
  return (
    <CarritoContext.Provider
      value={{
        //Fn
        addItem,
        removeItem,
        clearCart,
        //Variables
        carrito,
        cantidad,
        totalEthEnCart
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CartContext;

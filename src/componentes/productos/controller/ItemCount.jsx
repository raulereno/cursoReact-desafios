import React, { useContext,useState } from 'react';
import iconAdd from './add.svg';
import iconRemove from './remove.svg';
import {CarritoContext} from '../../../context/CartContext'


function ItemCount({stock,initial,onAdd,details}) {
  
  const [contador, setContador] = useState(initial);

  const {addItem} = useContext(CarritoContext)

  function addToCount(operador){
    if(operador=="+"){
      contador<stock && setContador(contador+1);
    }
    else if(operador=="-"){
      contador>1 && setContador(contador-1);
    }
  }
  


  return (
    <div className='controller'>
      <button onClick={()=>addToCount("-")} type='button' className='btn'><img src={iconRemove} alt="" /></button>
      <span>{contador}</span>
      <button onClick={()=>addToCount("+")} type='button' className='btn'><img src={iconAdd} alt="" /></button>
      <button className='btn btn-primary btnAgregar' onClick={()=>{onAdd(contador); addItem(details,contador) }}>Agregar a Carrito</button>
    </div>);
}

export default ItemCount;

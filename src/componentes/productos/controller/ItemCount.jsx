import React from 'react';
import iconAdd from './add.svg';
import iconRemove from './remove.svg';
import { useState } from 'react';

function ItemCount({stock,initial,onAdd}) {
  
  const [contador, setContador] = useState(initial);

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
      <button className='btn btn-primary' onClick={()=>onAdd(contador)}>Agregar a Carrito</button>
    </div>);
}

export default ItemCount;

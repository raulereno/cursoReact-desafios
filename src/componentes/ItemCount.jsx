import React from 'react';
import iconAdd from './add.svg';
import iconRemove from './remove.svg';
import { useState } from 'react';

function ItemCount({stock,initial}) {
  
  const [contador, setContador] = useState(initial);

  function onAdd(operador){
    if(operador=="+"){
      contador<stock && setContador(contador+1);
    }
    else if(operador=="-"){
      contador>1 && setContador(contador-1);
    }
  }
  return (
    <div className='controller'>
      <button onClick={()=>onAdd("-")} type='button' className='btn'><img src={iconRemove} alt="" /></button>
      <span>{contador}</span>
      <button onClick={()=>onAdd("+")} type='button' className='btn'><img src={iconAdd} alt="" /></button>
    </div>);
}

export default ItemCount;

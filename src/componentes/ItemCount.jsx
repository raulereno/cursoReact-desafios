import React from 'react';
import iconAdd from './add.svg';
import iconRemove from './remove.svg';
import { useState } from 'react';

function ItemCount({stock,initial}) {
  
  const [contador, setContador] = useState(initial);

  function onAdd(){
    contador>=stock ? setContador(stock):setContador(contador+1)
  }
  return <div className="card">
  <img src="https://http2.mlstatic.com/D_NQ_NP_852963-MLA48170563079_112021-O.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Anteojos de Sol</h5>
    <p className="card-text">Stock:{stock}</p>

    <div className='controller'>
      <button onClick={()=> contador<=initial? setContador(initial):setContador(contador-1)} type='button' className='btn'><img src={iconRemove} alt="" /></button>
      <span>{contador}</span>
      <button onClick={()=>onAdd()} type='button' className='btn'><img src={iconAdd} alt="" /></button>
    </div>
  
    <button className='btn btn-primary'>Agregar al carrito</button>
  </div>
  
</div>;
}

export default ItemCount;

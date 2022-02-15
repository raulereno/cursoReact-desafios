import React, { useState } from 'react'

function Item({id,name,price,imgUrl}) {
  
    return (
    <div className={'card'}>
      <img src={imgUrl} className="card-img-top imgProd" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price} ETH <img src="https://img.icons8.com/ios/25/000000/ethereum.png"/></p>
    
        <button className='btn btn-primary'>Ponelo en el carrito wey</button>
      </div>
  
    </div>);
  
}

export default Item
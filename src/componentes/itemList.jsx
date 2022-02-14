import React, { useEffect, useState } from 'react'
import Item from './Item'

function ItemList(items) {
  console.log(items);
  const [products, setProducts] = useState()


  useEffect(() => {
    const listProducts = new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(items)
      }, 2000);
    });
    
    listProducts.then((result)=>{
      setProducts(Object.values(result));
      console.log("entro y seteo la data");
    }, (err)=>{
      console.log(err);
    });
  }, [])
  
  console.log(products);
  
    return (
    <div className='containerProds'>
      {products && 
        products[0].map((i) => <Item key={i.id} name={i.name} price={i.price} imgUrl={i.imgUrl}/>)
      }
    </div>
  )
}

export default ItemList
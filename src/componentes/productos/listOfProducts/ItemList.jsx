import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({ products }) {
  
  return (
    <div className="containerProds">
      {products &&
        products.map((i) => (
          <Item key={i.id} id={i.id} name={i.name} price={i.price} imgUrl={i.imgUrl} stock={i.stock} />
        ))}
    </div>
  );
}

export default ItemList;

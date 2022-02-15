import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({ items }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const listProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });

    listProducts.then((res) => setProducts(res));
  }, []);

  return (
    <div className="containerProds">
      {products &&
        products.map((i) => (
          <Item key={i.id} name={i.name} price={i.price} imgUrl={i.imgUrl} />
        ))}
    </div>
  );
}

export default ItemList;

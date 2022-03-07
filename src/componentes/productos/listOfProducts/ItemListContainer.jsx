import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFireStore from "../../../hooks/useFireStore";
import Loader from "../../loader/Loader";
import ItemList from "./ItemList";

function ItemListContainer() {
  
  
  let categoria = [];

  const { productosCategoria } = useParams();

  const { traerDatos, products, loading } = useFireStore();

  useEffect(() => {
    traerDatos();
  }, []);
  
  if (productosCategoria != undefined) {
    categoria = products && products.filter((e) => e.category == productosCategoria);
    
    return <>{loading ? <Loader /> : <ItemList products={categoria} />}</>;
  } else {
    return <>{loading ? <Loader /> : <ItemList products={products} />}</>;
  }
}
export default ItemListContainer;

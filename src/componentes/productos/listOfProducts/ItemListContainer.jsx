import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loader from "../../loader/Loader";
import ItemList from "./ItemList";
import db from "./../../../service/firebase";

function ItemListContainer() {
  
  const [products, setProducts] = useState([]);

  let filtrarPorCategoria = [];

  const { productosCategoria } = useParams();

  const [loading, setLoading] = useState(true);

  if (productosCategoria != undefined) {
    filtrarPorCategoria = products.filter(
      (e) => e.category === productosCategoria
    );
  }

  //Funcion que busca en firestore, en la coleccion llamada items
  const getData = async () => {
    try {
      const data = collection(db, "items");

      const dataObtenida = await getDocs(data);

      const result = dataObtenida.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );

      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : productosCategoria === undefined ? (
        <ItemList products={products} />
      ) : (
        <ItemList products={filtrarPorCategoria} />
      )}
    </>
  );
}
export default ItemListContainer;

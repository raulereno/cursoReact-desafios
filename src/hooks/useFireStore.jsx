import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import db from "../service/firebase";
import Swal from "sweetalert2";

const useFireStore = () => {
  const [loading, setLoading] = useState();

  const [details, setDetails] = useState();

  const [products, setProducts] = useState();

  const Swal = require("sweetalert2");

  const getData = async () => {
    setLoading(true);
    try {
      const data = collection(db, "items");

      const dataObtenida = await getDocs(data);

      const result = dataObtenida.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setTimeout(() => {
        setProducts(result);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getDetailData = async ({ id }) => {
    try {
      const document = doc(db, "items", id);
      const response = await getDoc(document);

      const resultado = { id: response.id, ...response.data() };
      setDetails(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  const traerDatos = () => {
    if (!products) {
      getData();
    }
  };

  const generateOrder = async ({ datos }) => {
    try {
      const col = collection(db, "orders");

      const order = await addDoc(col, datos);

      datos.items.map((e) => {
        actualizarStock(e);
      });

      Swal.fire({
        title: `Gracias ${datos.buyer.name} `,
        html: `<h2>Le enviaremos los datos de la factura a su casilla de email!</h2>
        <p>Se enviara a <b>${datos.buyer.email}</b> la factura y el procedimiento de pago.</p>
        <h3>Datos de la factura:</h3>
        <p><b>Numero de orden:</b> ${order.id}</p>
        <p>Productos en total: ${datos.items.length} </p>
        <p><b>Total a pagar:</b></p>
        <p>${datos.total} ETH <img src="https://img.icons8.com/ios/25/000000/ethereum.png"/></p>`,
        icon: "success",
        confirmButtonText: "Entendido",
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarStock = async ({ id, stock, cantidad }) => {
    const item = doc(db, "items", id);
    try {
      await updateDoc(item, { stock: stock - cantidad });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    traerDatos,
    getDetailData,
    generateOrder,
    products,
    loading,
    details,
  };
};

export default useFireStore;

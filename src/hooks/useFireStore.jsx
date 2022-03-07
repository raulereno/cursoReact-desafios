import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useState } from "react";
import db from "../service/firebase";

const useFireStore = () => {

  const [loading, setLoading] = useState();

  const [details, setDetails] = useState();
  const [products, setProducts] = useState();

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

  
  const getDetailData = async({id})=>{
    
    try {
      const document = doc(db,"items",id);
      const response = await getDoc(document);
      
      const resultado = {id : response.id,...response.data()};
      setDetails(resultado)
    } catch (error) {
      console.log(error)
    }
  }
  
  const traerDatos=()=>{if(!products){
    getData()
  }};
  
  return {
    traerDatos,
    getDetailData,
    products,
    loading,
    details,
  };
};

export default useFireStore;

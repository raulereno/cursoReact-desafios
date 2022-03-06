import React from "react";
import { useState, useEffect } from "react";
import {collection,getDocs} from  'firebase/firestore';
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import db from './../../../service/firebase'




function ItemDetailContainer() {


  const { id } = useParams();

  const [details, setDetails] = useState();


  // useEffect(() => {
  //   const getItems = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(listDetails);
  //     }, 2000);
  //   });

  //   getItems.then((res) => setDetails(res[buscar]));
  // }, [buscar]);
  
  //Funcion que busca en firestore, en la coleccion llamada items
  const getData= async ()=>{


    try {
      const data= collection(db,"items")
    
      const dataObtenida= await getDocs(data)
      

      const result=dataObtenida.docs.map((doc)=> doc={id:doc.id,...doc.data()});
      const buscar = result.findIndex((e) => e.id == id);  
    
    setDetails(result[buscar])
    } catch (error) {
      console.log(error);
    }
    

  }

  useEffect(() => {
    
    getData();   
  }, [])


  return <>{details && <ItemDetail details={details} />}</>;
}
export default ItemDetailContainer;

import React from "react";
import {useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useFireStore from "../../../hooks/useFireStore";
import ErrorItems from "../../errorItems/ErrorItems";




function ItemDetailContainer() {

  const { id } = useParams();
  const {details, getDetailData}= useFireStore();

  useEffect(() => {
     getDetailData({id})
  }, [])


  return <>{id>6?<ErrorItems mensaje={"El producto que busca no existe."}/>:details && <ItemDetail details={details} />}</>;
}
export default ItemDetailContainer;

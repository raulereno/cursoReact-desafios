import React from "react";
import {useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useFireStore from "../../../hooks/useFireStore";




function ItemDetailContainer() {

  const { id } = useParams();
  const {details, getDetailData}= useFireStore();

  useEffect(() => {
     getDetailData({id})
  }, [])


  return <>{details && <ItemDetail details={details} />}</>;
}
export default ItemDetailContainer;

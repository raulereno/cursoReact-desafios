import React from "react";

function ItemListContainer({texto1,texto2,texto3}){
  
    return( 
        <h1 className="itemList">{texto1},{texto2},{texto3}</h1>
    )
}
export default ItemListContainer
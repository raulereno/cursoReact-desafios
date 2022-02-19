import React from "react";
import ItemCount from './../controller/ItemCount';

function ItemDetail ({ details }) {

    const {name,imgUrl,price,creator,contractAdress,tokenStandard,blockChain,metaData,id} = details ;
    
    return (
        <div className="pageDetail">
                {(<div className={'item'+id}>
                    <img src={imgUrl} alt="" className="imgDetail"/>
                    <h2>{name}</h2>
                    <p>{price}</p>
                    <div>
                    <p>{creator}</p>
                    <p>{contractAdress}</p>
                    <p>{tokenStandard}</p>
                    <p>{blockChain}</p>
                    <p>{metaData}</p>
                    <ItemCount stock={1} initial={1}/>
                    <button className="btn btn-primary">Agregar al Carrito</button>
                    </div>
                </div>)}
        </div>);
}
export default ItemDetail;

import React, { useState } from "react";
import ItemCount from './../controller/ItemCount';
import {Link} from 'react-router-dom'
import ValorMonedaEth from "../../consultaValor/ValorMonedaEth";

function ItemDetail ({ details }) {

    const {name,imgUrl,price,creator,contractAdress,tokenStandard,blockChain,metaData,id,stock} = details ;
    
    const [cantidad, setCantidad] = useState(null)

    const onAdd = (cantidad)=>{
        setCantidad(cantidad);
    }

    return (
        <div className="pageDetail">
                {(<div className={'item'+id}>
                    <img src={imgUrl} alt="" className="imgDetail"/>
                    <div className="containerInfoProd">
                        <Link to={'/Productos'} className='linkAColeccion'>Colecion de Boreds Monkeys</Link>
                        <h2>{name}</h2>
                        <p>Precio: {price} ETH <img src="https://img.icons8.com/ios/25/ffffff/ethereum.png"/></p>
                        <p>USD: ${<ValorMonedaEth precioEnEth={price}/>}</p>
                        <p>ARS: <strong>Funcion en Proceso</strong> </p>
                        <p>Creado por: {creator}</p>
                        <p>Disponibilidad: {(cantidad)? stock-cantidad : stock} en stock</p>
                        {(cantidad===null) ? <ItemCount stock={stock} initial={1} onAdd={onAdd}/> : <Link to={'/Cart'} className="btn btn-success comprarAhora">Finalizar Compra</Link>}
                       
                    </div>
                    <div className="additionalInfo">
                        <h3>Informacion Adicional:</h3>
                        <p>Contract Address: {contractAdress}</p>
                        <p>Token Standard: {tokenStandard}</p>
                        <p>Blockchain: {blockChain}</p>
                        <p>{metaData && "Metadata:"+metaData}</p>
                    </div>
                </div>)}
        </div>);
}
export default ItemDetail;

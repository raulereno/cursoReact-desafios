import React, { useState,useContext,useEffect} from "react";
import ItemCount from './../controller/ItemCount';
import {Link} from 'react-router-dom'
import ValorMonedaEth from "../../consultaValor/ValorMonedaEth";

function ItemDetail ({ details }) {
        
    const {name,imgUrl,price,creator,contractAdress,tokenStandard,blockChain,metaData,id,stock} = details ;
    
    const [cantidad, setCantidad] = useState(null)

    const onAdd = (cantidad)=>{
        setCantidad(cantidad);
    }
    //Por aca va la mano
    // const isInCart = ()=>{
    //     carrito.map((e)=>{
    //         if(e.id == id){
    //             setCantidad(e.cantidad)
    //         }
    //     });
    // }
    // useEffect(() => {
    //     isInCart()
    // }, [])
    
    
    return (
        <div className="pageDetail">
                {(<div className={'item'+id}>
                    <img src={imgUrl} alt="" className="imgDetail"/>
                    <div className="containerInfoProd">
                        <Link to={'/Productos'} className='linkAColeccion'>Colecion NFT's</Link>
                        <h2>{name}</h2>
                        <p>Precio: {price} ETH <img src="https://img.icons8.com/ios/25/ffffff/ethereum.png"/></p>
                        <p>USD: ${<ValorMonedaEth precioEnEth={price}/>}</p>
                        <p>ARS: <strong>Funcion en Proceso</strong> </p>
                        <p>Creado por: {creator}</p>
                        <p>Disponibilidad: {(cantidad)? stock-cantidad : stock} en stock</p>
                        {(cantidad===null) ? <ItemCount stock={stock} initial={1} onAdd={onAdd} details={details}/> : <Link to={'/Cart'} className="btn btn-success comprarAhora">Ir a Carrito</Link>}
                       
                    </div>
                    <div className="additionalInfo">
                        <h3><b>Informacion Adicional:</b></h3>
                        <p><b>Contract Address:</b> {contractAdress}</p>
                        <p><b>Token Standard:</b> {tokenStandard}</p>
                        <p><b>Blockchain:</b> {blockChain}</p>
                        {metaData ? (<p><b> Metadata:</b> {metaData}</p>):''}
                    </div>
                </div>)}
        </div>);
}
export default ItemDetail;

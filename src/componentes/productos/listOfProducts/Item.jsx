import { Link } from 'react-router-dom';
import ValorMoneda from '../../consultaValor/ValorMonedaEth';
import {CarritoContext} from '../../../context/CartContext'
import { useContext } from 'react';

function Item({id,name,price,imgUrl}) {


    const {addItem}= useContext(CarritoContext)

    return (
    
      <div className={'card'}>
        <Link to={'/Productos/'+id} className={'linkADetalle'+id}>
      
          <img src={imgUrl} className="card-img-top imgProd" alt="..."/>
      
          <div className="card-body">
            <h5 className="card-title">{name}</h5>

            <p className="card-text">Precio: {price} ETH <img src="https://img.icons8.com/ios/25/000000/ethereum.png"/></p>
            <p>Precio USD: ${<ValorMoneda precioEnEth={price}/>} </p>
          </div>
        </Link>
        {/* Fn en proceso */}
        <button className='btn btn-primary btAddToCartList' onClick={()=>addItem(id,1)}>Agregar al Carrito</button>
      </div>
    
    );
  
}

export default Item
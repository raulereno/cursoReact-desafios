import { Link } from 'react-router-dom';
import ValorMoneda from '../../consultaValor/ValorMonedaEth';

function Item({id,name,price,imgUrl}) {

    return (
    
    <Link to={'/Productos/'+id} className={'linkADetalle'+id}>
      <div className={'card'}>
      
        <img src={imgUrl} className="card-img-top imgProd" alt="..."/>
      
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <p className="card-text">Price: {price} ETH <img src="https://img.icons8.com/ios/25/000000/ethereum.png"/>( {<ValorMoneda precioEnEth={price}/>} $USD)</p>
          <button className='btn btn-primary'>Agregar al Carrito</button>
        </div>
      </div>
    </Link>);
  
}

export default Item
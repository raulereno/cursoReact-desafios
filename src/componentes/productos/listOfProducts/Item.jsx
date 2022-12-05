import { Link } from "react-router-dom";
import ValorMoneda from "../../consultaValor/ValorMonedaEth";

function Item({ id, name, price, imgUrl, stock }) {
  return stock == 0 ? (
    ""
  ) : (
    <>
      <Link to={"/Productos/" + id} className={"linkADetalle" + id}>
        <div className={"card " + "item" + id}>
          <img src={imgUrl} className="card-img-top imgProd" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{name}</h5>

            <p className="card-text">
              Precio: {price} ETH{" "}
              <img src="https://img.icons8.com/ios/25/000000/ethereum.png" />
            </p>
            <p>Precio USD: ${<ValorMoneda precioEnEth={price} />} </p>
            {/* Fn en proceso */} 
          </div>
        </div>
      </Link>
    </>
  );
}

export default Item;

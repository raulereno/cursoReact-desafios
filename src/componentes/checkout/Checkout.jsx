import React,{ useState,useContext} from "react";
import {CarritoContext} from "../../context/CartContext";
import ItemList from "../productos/listOfProducts/ItemList";

const Checkout = () => {


  const {carrito,totalEthEnCart}= useContext(CarritoContext)
  
  console.log(carrito, totalEthEnCart);
  
  const [form,setForm]= useState({

    buyer:{
      name:"",
      phone:"",
      email:"",
    },
    items:carrito,

    total: totalEthEnCart
  });


  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre y apellido:
          </label>
          <input
            type="text"
            name="name"
            value={form.buyer.name}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Telefono:
          </label>
          <input
            type="number"
            name="phone"
            value={form.buyer.phone}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={form.buyer.email}
            className="form-control"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      {/* importar carrito y total. Ponerlo aqui y darle estilos para que quede estetico,
      me quede en el min 1:07:00 de la grabacion de clase firebase 2*/}
    </>
  );
};

export default Checkout;

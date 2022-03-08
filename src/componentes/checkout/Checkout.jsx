import React, { useState, useContext } from "react";
import { CarritoContext } from "../../context/CartContext";
import useFireStore from "../../hooks/useFireStore";
import ValorMoneda from "../consultaValor/ValorMonedaEth";

const Checkout = () => {
  const { carrito, totalEthEnCart,clearCart } = useContext(CarritoContext);

  const { generateOrder } = useFireStore();

  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: carrito,

    total: totalEthEnCart,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    generateOrder({ datos: form });
    setForm({
      ...form,
      buyer: {
        name: "",
        phone: "",
        email: "",
      }
    });
    clearCart();
  };

  return (
    <>
      <h1 className="tituloCheckout">Checkout</h1>
      <div className="containerCheckout">
        {carrito ? (
          <div className="containerInfoDeCarrito">
            <h2 className="tituloCarritoEnCheckout">Carrito</h2>
            <div className="listaDeCarrito">
              <ol>
                {carrito.map((e) => (
                  <li key={e.id}>
                    <img src={e.imgUrl} alt="" className="imgEnCheckout" />
                    <div>
                      <p>
                        <b>Nombre:</b> {e.name}
                      </p>
                      <p>
                        <b>Cantidad de productos:</b> {e.cantidad}
                      </p>
                      <p>
                        <b>Precio:</b> {(e.price * e.cantidad).toFixed(6)} ETH{" "}
                        <img src="https://img.icons8.com/ios/25/FFFFFF/ethereum.png" />
                      </p>
                      <p>
                        <b>Precio USD:</b> $
                        <ValorMoneda precioEnEth={e.price * e.cantidad} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <p className="cantidadEnCheckout">
              <b>Cantidad de productos:</b> {carrito.length}
            </p>
          </div>
        ) : (
          <h2>No hay nada en el carrito</h2>
        )}
        <div className="totalCheckout">
          <h2>Total a pagar:</h2>
          <p>
            <b>En Cryptomonedas:</b> {totalEthEnCart} ETH{" "}
            <img src="https://img.icons8.com/ios/25/0/ethereum.png" />
          </p>
          <p>
            <b>En dolares:</b> <ValorMoneda precioEnEth={totalEthEnCart} /> $USD
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Complete el formulario de contacto:</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre y apellido:
            </label>
            <input
              type="text"
              name="name"
              value={form.buyer.name}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Telefono:
            </label>
            <input
              type="number"
              name="phone"
              value={form.buyer.phone}
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={form.buyer.email}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <span
            className="d-inline-block"
            tabIndex="0"
            data-bs-toggle="tooltip"
            title="Complete todos los campos del formulario"
          >
            <button
              className="btn btn-primary"
              type="submit"
              disabled={
                !form.buyer.name || !form.buyer.phone || !form.buyer.email
              }
            >
              Enviar
            </button>
          </span>
        </form>
      </div>
    </>
  );
};

export default Checkout;

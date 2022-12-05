import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./../componentes/homePage/HomePage";
import Cart from "./../componentes/carrito/Cart";
import ItemListContainer from "./../componentes/productos/listOfProducts/ItemListContainer";
import Checkout from "../componentes/checkout/Checkout";
import NavBar from "../componentes/header/navbar/NavBar";
import ItemDetailContainer from './../componentes/productos/detailOfProducts/ItemDetailContainer';

function Rutas() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/Productos" element={<ItemListContainer />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Cart/Checkout" element={<Checkout />} />
        <Route path="/Productos/:id" element={<ItemDetailContainer />} />
        <Route path="/categoria/:productosCategoria" element={<ItemListContainer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;

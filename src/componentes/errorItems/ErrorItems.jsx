import React from 'react'
import { Link } from "react-router-dom";

const errorItems = ({mensaje}) => {
  return (
    <div className="mensajeCarritoVacio">
        <p className="explicacion">{mensaje}</p>
        <p className="pregunta">Que desea hacer?</p>
        <div className="links">
          <Link to={"/"} className={"btn btn-light"}>
            Ir al Inicio
          </Link>
          <Link to={"/Productos"} className={"btn btn-light"}>
            Ir a catalogo
          </Link>
        </div>
      </div>
  )
}

export default errorItems
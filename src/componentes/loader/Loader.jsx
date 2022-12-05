import React from 'react'
import {css} from '@emotion/react'
import CircleLoader from "react-spinners/CircleLoader"

const Loader = () => {
  return (
      <>
        <div className='loading'>
            <CircleLoader color={'white'}/>
            <p className='textoLoading'>Cargando catalogo de productos</p>
        </div>
      </>
  )
}

export default Loader
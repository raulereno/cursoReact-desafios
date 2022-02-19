import React from 'react'

function Inicio() {
  return (
    <div className='homePage'>
        <img src="https://img.freepik.com/vector-gratis/texto-desmenuzado-ntf-token-no-fungible-caida-cubos-dorados-aislados-sobre-fondo-negro-texto-fragmentado-bloques-amarillos-elemento-diseno-vectorial_337410-1292.jpg?size=626&ext=jpg" alt="" className='imagenHome' />
        {/* <h1 className='tituloHome'>NFT</h1> */}
        <h2 className='defIng'>Non-Fungible Token</h2>
        <h2 className='defEs'>Token No Fungible</h2>
        <p className='explicacion'>Un token no fungible (en inglés, non-fungible token), o NFT por sus siglas en inglés, es un tipo especial de token criptográfico que representa algo único. Los tókenes no fungibles no son, por tanto, mutuamente intercambiables.23 Esto contrasta con las criptomonedas como el bitcoin, y muchos tókenes de red o de utilidad que son fungibles por naturaleza.4 Las cuatro principales características de los NFT es que son únicos, indivisibles, transferibles y con la capacidad de demostrar su escasez.</p>
        <p className='explicacion'>
        Los NFT también han sido objeto de críticas, principalmente respecto a su alto coste energético y la huella de carbono asociada a la validación de transacciones en la cadena de bloques, así como por su frecuente uso en estafas virtuales. Otras críticas son referidas a la verdadera utilidad de establecer un comprobante de propiedad en un, a veces extralegal, mercado no regulado. 
        </p>
        <p className='explicacion'>Pero como todo lo novedoso, siempre va a ser criticado.</p>
    </div>
  )
}

export default Inicio
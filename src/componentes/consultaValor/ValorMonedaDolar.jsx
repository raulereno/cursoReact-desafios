// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ValorMonedaDolar = () => {
//     const [valorDolarBlue, setValorDolarBlue] = useState(null)

//     const valorDolar= ()=>{
//         axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales').then(res=>{
//            const cotizacionDolar=res.data[1].casa.compra;
//            setValorDolarBlue(cotizacionDolar)
//         })
//     }
    
//     useEffect(() => {
//         valorDolar();
//     }, []);

//     //const precioEnPesos = valorDolarBlue*precioEnDolares
//     return (
//     valorDolarBlue
//   )
// }

// export default ValorMonedaDolar
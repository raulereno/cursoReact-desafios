import React,{useState, useContext} from 'react'
import {CarritoContext} from '../../context/CartContext'


//Ejemplo de clase de Eventos 9
// const Select = ({options,onSelect,defaultOption})=>{
//     return(
//         <select 
//         onChange={(evt)=> onSelect(evt.target.value)}>
//             {options.map(o=> <option value={o.value}>{o.text}</option>)}
//         </select>
//     )

// }



const Prueba = () => {
    //Ejemplo de la clase de Eventos 9
//     const [option, setOption] = useState(1)

//     const options =[
//         {value:1, text:  'azul'},
//         {value:2, text:'    rojo'},
//         {value:3, text: 'verde'}]
    
//     const optionSelected=(value)=>{
//         setOption(value)
//     }


//   return (
//       <>
//         <Select
//             options={options}
//             onSelect={optionSelected}
//             defaultOption={1}>
//         </Select>

//         <p>Seleccionada <strong>{option}</strong></p>
//       </>
//   )

    const {nombre}= useContext(CarritoContext);

    console.log(nombre);

    return(
    <div>
        <h1>Hola mi rey {nombre}</h1>
    </div>)

}

export default Prueba
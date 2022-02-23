import React,{useState} from 'react'

const Select = ({options,onSelect,defaultOption})=>{
    return(
        <select 
        onChange={(evt)=> onSelect(evt.target.value)}>
            {options.map(o=> <option value={o.value}>{o.text}</option>)}
        </select>
    )

}



const Prueba = () => {
    const [option, setOption] = useState(1)

    const options =[
        {value:1, text:  'azul'},
        {value:2, text:'    rojo'},
        {value:3, text: 'verde'}]
    
    const optionSelected=(value)=>{
        setOption(value)
    }


  return (
      <>
        <Select
            options={options}
            onSelect={optionSelected}
            defaultOption={1}>
        </Select>

        <p>Seleccionada <strong>{option}</strong></p>
      </>
  )
}

export default Prueba
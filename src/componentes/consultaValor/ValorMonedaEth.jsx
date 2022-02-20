import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ValorMoneda = ({precioEnEth, precioEnPesos}) => {
    
    const [valorEth, setValor] = useState(null);


    const valorETH = ()=> 
        axios.get('https://criptoya.com/api/ETH/USD/1').then(res =>{
            const valorEnBitso = res.data.bitso.totalBid;
            setValor(valorEnBitso)
        });
    
    
    useEffect(() => {
        valorETH();
    }, []);
    
    const valorEnDolares = precioEnEth*valorEth;

    return (valorEnDolares.toFixed(2))
}

export default ValorMoneda
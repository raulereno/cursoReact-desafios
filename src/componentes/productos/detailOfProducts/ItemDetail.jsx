import React from "react";

function ItemDetail ({ details }) {
  
    console.log(details);
    
    return (
        <div className="pageDetail">
            {details && details.map((e,index) => 
                (<div className={index}>
                    <img src={e.imgUrl} alt="" className="imgDetail"/>
                    <h2>{e.name}</h2>
                    <p>{e.price}</p>
                    <div>
                    <p>{e.creator}</p>
                    <p>{e.contractAdress}</p>
                    <p>{e.tokenStandard}</p>
                    <p>{e.blockChain}</p>
                    <p>{e.metaData}</p>
                    </div>
                </div>)
                )}
        </div>);
}
export default ItemDetail;

import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer(){
    const [array, setArray] = useState([])

    const listOfProducts = [
        {id:1,
        name:"Bored Monkey - Bad Day #145",
        price:0.0033,
        imgUrl:"https://lh3.googleusercontent.com/-YJiIVDCCCqGm99Ld-eTVJfXWtz6lqZ57ZyX6D2q5E5vm4F_U1up5G-ICYXkXJxFHEbz8Hz3GOs9ec009lFFF9j3Y6pvj3Da8RAuvQ=w600"},

        {id:2,
        name:"Bored Monkey - Pizza #435",
        price:0.0050,
        imgUrl:"https://lh3.googleusercontent.com/j4WrClh7vOILJYB8YA7mkHautsHFkfhp1bpXrHIDfPqplXSAqa9zpu_pJGZ192GKNChzHklNUw3nKn-xmfdxZ-OvDjl5K1JmZ2SI=w600"},

        {id:3,
        name:"Bored Monkey - Polit #123",
        price:0.0070,
        imgUrl:"https://lh3.googleusercontent.com/Q9ty8j4RH9oEgJrwR5wUsP6ziU4zSXHqVstiWV1neWi7MJ2ywOxUlJb3zWnbUr91l7hy-s_4gy4aFJjUR64vgev9NOv1HGUKZ08haQ=w600"}
    ];

    
    
    return( 
        <ItemList items={listOfProducts}/>
    )
}
export default ItemListContainer
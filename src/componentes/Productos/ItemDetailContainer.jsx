import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const listDetails = [
    {
      id: 1,
      name: "Bored Monkey - Bad Day #145",
      price: 0.0033,
      imgUrl:
        "https://lh3.googleusercontent.com/-YJiIVDCCCqGm99Ld-eTVJfXWtz6lqZ57ZyX6D2q5E5vm4F_U1up5G-ICYXkXJxFHEbz8Hz3GOs9ec009lFFF9j3Y6pvj3Da8RAuvQ=w600",
      creator: "CFC1AA",
      contractAdress: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
      tokenStandard: "ERC-1155",
      blockChain: "Polygon",
      metaData: "editable",
    },

    {
      id: 2,
      name: "Bored Monkey - Pizza #435",
      price: 0.005,
      imgUrl:
        "https://lh3.googleusercontent.com/j4WrClh7vOILJYB8YA7mkHautsHFkfhp1bpXrHIDfPqplXSAqa9zpu_pJGZ192GKNChzHklNUw3nKn-xmfdxZ-OvDjl5K1JmZ2SI=w600",
      creator: "CFC1AA",
      contractAdress: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
      tokenStandard: "ERC-1155",
      blockChain: "Polygon",
      metaData: "Editable",
    },

    {
      id: 3,
      name: "Bored Monkey - Polit #123",
      price: 0.007,
      imgUrl:
        "https://lh3.googleusercontent.com/Q9ty8j4RH9oEgJrwR5wUsP6ziU4zSXHqVstiWV1neWi7MJ2ywOxUlJb3zWnbUr91l7hy-s_4gy4aFJjUR64vgev9NOv1HGUKZ08haQ=w600",
      creator: "CFC1AA",
      contractAdress: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
      tokenStandard: "ERC-1155",
      blockChain: "Polygon",
      metaData: "Editable",
    },
  ];

  const [details, setDetails] = useState([]);

  
  useEffect(() => {
    
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listDetails);
      }, 2000);
    });

    getItems.then((res) => setDetails(res));

  }, []);

  return (<ItemDetail details={details} />);
}
export default ItemDetailContainer;

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      stock:5
    },

    {
      id: 2,
      name: "Bored Monkey - Pizza #435",
      price: 0.0055,
      imgUrl:
        "https://lh3.googleusercontent.com/j4WrClh7vOILJYB8YA7mkHautsHFkfhp1bpXrHIDfPqplXSAqa9zpu_pJGZ192GKNChzHklNUw3nKn-xmfdxZ-OvDjl5K1JmZ2SI=w600",
      creator: "CFC1AA",
      contractAdress: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
      tokenStandard: "ERC-1155",
      blockChain: "Polygon",
      metaData: "Editable",
      stock:2
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
      stock:6
    },

    {
      id: 4,
      name: "Lazy Lion - Bistec #2690",
      price: 1.75,
      imgUrl:
        "https://lh3.googleusercontent.com/sGLBpTc7uw-4ZW_tAu8ellLA2b4T1QgQ0f_6baFWGcdMZejEpCljGCnTQ44UEVbp3F_KJ5T2Lg0mHyzdqrrpkibhBwJKF0G1JCssXw=w600",
        creator: "CFC1AA",
        contractAdress: "0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0",
        tokenStandard: "ERC-721",
        blockChain: "Ethereum",
        stock:1
    },

    {
      id: 5,
      name: "Lazy Lion - Angry #8466",
      price: 1.8,
      imgUrl:
        "https://lh3.googleusercontent.com/DybGPYq-96BUganEqGAVRUoK13ibNFVqvVE53VIJTewL3Qpe95pHU8UQeK_UtvK-kiFt5O6lKzuqtUpxwHkImB8tAi2VMnX-ayEY=w600",
      creator: "Lazy-Lions",
      contractAdress: "0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0",
      tokenStandard: "ERC-721",
      blockChain: "Ethereum",
      stock:3
    },

    {
      id: 6,
      name: "Lazy Lion - Smoke #6345",
      price: 1.84,
      imgUrl:
        "https://lh3.googleusercontent.com/rNN1YFjQENikZX7SX9s8oUQGhiH5pgbFXBE8jDXsY45Ybmd06CY9OLrI_oivLypSk7exMC4U4ZxZ5FpfLWjquUn-mRhP4FOHbS0QS2Q=w600",
        creator: "Lazy-Lions",
      contractAdress: "0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0",
      tokenStandard: "ERC-721",
      blockChain: "Ethereum",
      stock:8
    },
  ];
  const { id } = useParams();

  const buscar = listDetails.findIndex((e) => e.id == id);

  const [details, setDetails] = useState();

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listDetails);
      }, 2000);
    });

    getItems.then((res) => setDetails(res[buscar]));
  }, [buscar]);

  return <>{details && <ItemDetail details={details} />}</>;
}
export default ItemDetailContainer;

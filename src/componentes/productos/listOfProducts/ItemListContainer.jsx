import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const listOfProducts = [
    {
      id: 1,
      category: "BoredMonkeys",
      name: "Bored Monkey - Bad Day #145",
      price: 0.0033,
      imgUrl:
        "https://lh3.googleusercontent.com/-YJiIVDCCCqGm99Ld-eTVJfXWtz6lqZ57ZyX6D2q5E5vm4F_U1up5G-ICYXkXJxFHEbz8Hz3GOs9ec009lFFF9j3Y6pvj3Da8RAuvQ=w600",
    },

    {
      id: 2,
      category: "BoredMonkeys",
      name: "Bored Monkey - Pizza #435",
      price: 0.0055,
      imgUrl:
        "https://lh3.googleusercontent.com/j4WrClh7vOILJYB8YA7mkHautsHFkfhp1bpXrHIDfPqplXSAqa9zpu_pJGZ192GKNChzHklNUw3nKn-xmfdxZ-OvDjl5K1JmZ2SI=w600",
    },

    {
      id: 3,
      category: "BoredMonkeys",
      name: "Bored Monkey - Polit #123",
      price: 0.007,
      imgUrl:
        "https://lh3.googleusercontent.com/Q9ty8j4RH9oEgJrwR5wUsP6ziU4zSXHqVstiWV1neWi7MJ2ywOxUlJb3zWnbUr91l7hy-s_4gy4aFJjUR64vgev9NOv1HGUKZ08haQ=w600",
    },

    {
      id: 4,
      category: "LazyLions",
      name: "Lazy Lion - Bistec #2690",
      price: 1.75,
      imgUrl:
        "https://lh3.googleusercontent.com/sGLBpTc7uw-4ZW_tAu8ellLA2b4T1QgQ0f_6baFWGcdMZejEpCljGCnTQ44UEVbp3F_KJ5T2Lg0mHyzdqrrpkibhBwJKF0G1JCssXw=w600",
    },

    {
      id: 5,
      category: "LazyLions",
      name: "Lazy Lion - Angry #8466",
      price: 1.8,
      imgUrl:
        "https://lh3.googleusercontent.com/DybGPYq-96BUganEqGAVRUoK13ibNFVqvVE53VIJTewL3Qpe95pHU8UQeK_UtvK-kiFt5O6lKzuqtUpxwHkImB8tAi2VMnX-ayEY=w600",
    },

    {
      id: 6,
      category: "LazyLions",
      name: "Lazy Lion - Smoke #6345",
      price: 1.84,
      imgUrl:
        "https://lh3.googleusercontent.com/rNN1YFjQENikZX7SX9s8oUQGhiH5pgbFXBE8jDXsY45Ybmd06CY9OLrI_oivLypSk7exMC4U4ZxZ5FpfLWjquUn-mRhP4FOHbS0QS2Q=w600",
    },
  ];

  const [products, setProducts] = useState([]);

  const { productosCategoria } = useParams();
  console.log(productosCategoria);

  
  
  useEffect(() => {
    const listProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productosCategoria != undefined) {
          const filtrarPorCategoria = listOfProducts.filter(
            (e) => e.category === productosCategoria
          );
          console.log("entro aca");
          resolve(filtrarPorCategoria);
        } else {
          resolve(listOfProducts);
        }
      }, 2000);
    });

    listProducts.then((res) => setProducts(res));
  }, []);

  return <ItemList products={products} />;
}
export default ItemListContainer;

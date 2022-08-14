import React, { useState } from "react";
// components
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iphone12",
      price: "$ 999",
      quantity: 0,
    },
    {
      id: 2,
      title: "iphone13",
      price: "$ 1800",
      quantity: 0,
    },
    {
      id: 3,
      title: "iphone14",
      price: "$ 2000",
      quantity: 0,
    },
  ]);

  return (
    <div>
      {products.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ProductsList;

import React, { useState } from "react";
// components
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iphone12",
      price: 999,
      quantity: 1,
    },
    {
      id: 2,
      title: "iphone13",
      price: 1800,
      quantity: 1,
    },
    {
      id: 3,
      title: "iphone14",
      price: 2000,
      quantity: 1,
    },
  ]);
  // delete handler
  const deleteHandle = (id) => {
    const filteredItems = products.filter((item) => item.id !== id);
    setProducts(filteredItems);
  };
  // increment button
  const increment = (id) => {
    const intendedIndex = products.findIndex((item) => item.id === id);
    const intendedProduct = products[intendedIndex];
    intendedProduct.quantity++;
    setProducts([...products]);
  };
  // decrement button
  const decrement = (id) => {
    const intendedIndex = products.findIndex((item) => item.id === id);
    const intendedProduct = products[intendedIndex];
    intendedProduct.quantity--;
    setProducts([...products]);
  };

  return (
    <div>
      {products.map((item) => (
        <Product
          key={item.id}
          data={item}
          deleteHandle={deleteHandle}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </div>
  );
};

export default ProductsList;

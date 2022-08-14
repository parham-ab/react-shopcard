import React, { useContext, useState } from "react";
// context
import { ProductsContext } from "../contexts/providers/ProductContextProvider";
// components
import Product from "./Product";

const ProductsList = () => {
  const { products, setProducts } = useContext(ProductsContext);
  console.log(products);
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

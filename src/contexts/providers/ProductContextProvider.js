import React, { useState } from "react";
// context
export const ProductsContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iphone12",
      price: 999,
      quantity: 1,
    },
    {
      id: 2,
      title: "airpod",
      price: 1800,
      quantity: 1,
    },
    {
      id: 3,
      title: "macbook pro",
      price: 2000,
      quantity: 1,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;

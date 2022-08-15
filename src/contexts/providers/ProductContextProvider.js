import React, { useReducer, useState } from "react";
// context
export const ProductsContext = React.createContext();

const initialState = [
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
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      const intendedIndex = state.findIndex((item) => item.id === action.id);
      const intendedProduct = { ...state[intendedIndex] };
      intendedProduct.quantity++;
      const updatedProducts = [...state];
      updatedProducts[intendedIndex] = intendedProduct;
      return updatedProducts;
    }
    case "DECREMENT":
      const intendedIndex = state.findIndex((item) => item.id === action.id);
      const intendedProduct = { ...state[intendedIndex] };
      if (intendedProduct.quantity === 1) {
        const filteredItems = state.filter((item) => item.id !== action.id);
        return filteredItems;
      } else {
        const updatedProducts = [...state];
        intendedProduct.quantity--;
        updatedProducts[intendedIndex] = intendedProduct;
        return updatedProducts;
      }
    case "DELETE":
      const filteredItems = state.filter((item) => item.id !== action.id);
      return filteredItems;

    default:
      return state;
  }
};
const ProductContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;

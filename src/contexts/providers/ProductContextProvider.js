import React, { useReducer } from "react";
// fake data
import { productDataList } from "../../database/productDataList";
// context
export const ProductsContext = React.createContext();

const initialState = productDataList;

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
    case "FILTER":
      const value = action.selectedVal.value;
      if (value === "") {
        return productDataList;
      } else {
        const filteredItems = state.filter(
          (item) => item.sizes.indexOf(value) >= 0
        );
        return filteredItems;
      }
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

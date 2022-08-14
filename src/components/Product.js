import React from "react";

const Product = ({ data }) => {
  const { title, id, price, quantity } = data;
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <span>{price}</span>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";

const Product = ({ data, deleteHandle, increment, decrement }) => {
  const { title, id, price, quantity } = data;
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <span>
          Price= $
          {`${price}*${quantity}= ${(price * quantity).toLocaleString()}`}
        </span>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        <button
          onClick={
            quantity !== 1 ? () => decrement(id) : () => deleteHandle(id)
          }
        >
          {quantity === 1 ? "delete" : "-"}
        </button>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <div>
        <button onClick={() => deleteHandle(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Product;

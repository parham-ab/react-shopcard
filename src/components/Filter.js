// context
import { useContext, useState } from "react";
import { ProductsContext } from "../contexts/providers/ProductContextProvider";

import Select from "react-select";
const options = [
  { value: "", label: "ALL" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const Filter = () => {
  const [value, setValue] = useState("");
  // context
  const { products, dispatch } = useContext(ProductsContext);

  const changeHandle = (selectedVal) => {
    console.log(selectedVal);
    dispatch({ type: "FILTER", selectedVal });
    setValue(selectedVal);
  };

  return (
    <div>
      <Select value={value} options={options} onChange={changeHandle} />
    </div>
  );
};

export default Filter;

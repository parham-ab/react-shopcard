// context
import { useContext, useState } from "react";
import Select from "react-select";
// context
import { ProductsContext } from "../contexts/providers/ProductContextProvider";

const options = [
  { value: "", label: "ALL" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const Filter = () => {
  const [sizeVal, setSizeVal] = useState("");
  // context
  const { dispatch } = useContext(ProductsContext);

  const changeHandle = (selectedVal) => {
    dispatch({ type: "FILTER", selectedVal });
    setSizeVal(selectedVal);
  };

  return (
    <>
      <Select options={options} value={sizeVal} onChange={changeHandle} />
    </>
  );
};

export default Filter;

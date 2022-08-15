import { useContext, useState } from "react";
import { Badge, Container, Navbar } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// icons
import { FaShoppingBasket } from "react-icons/fa";
// context
import { ProductsContext } from "../contexts/providers/ProductContextProvider";
// components
import Product from "./Product";

const ProductsList = () => {
  // context
  const { products, setProducts } = useContext(ProductsContext);
  // search
  const [searchedTxt, setSearchedTxt] = useState("");
  // searchHandle
  const filteredWord = products.filter((item) =>
    item.title.toLowerCase().includes(searchedTxt.toLowerCase())
  );
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
  // total products
  const totalProducts = products.map((item) => item.quantity);
  const sumProducts = totalProducts.reduce((previous, current) => {
    let allItems = previous + current;
    return allItems;
  }, 0);

  return (
    <>
      <Navbar bg="dark" fixed="top" className="p-1 shadow">
        <Container>
          <Form.Control
            className="w-50"
            size="sm"
            type="search"
            value={searchedTxt}
            onChange={(e) => setSearchedTxt(e.target.value)}
            placeholder="Search..."
          />
          <Navbar.Text className="text-white">
            <FaShoppingBasket />
            <sup>
              <Badge pill bg="primary">
                {sumProducts}
              </Badge>
            </sup>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Container className="mt-5">
        {filteredWord.map((item) => (
          <Product
            key={item.id}
            data={item}
            deleteHandle={deleteHandle}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </Container>
    </>
  );
};

export default ProductsList;

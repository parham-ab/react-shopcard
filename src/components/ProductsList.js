import { useContext, useState } from "react";
import { Badge, Container, Navbar } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// icons
import { FaShoppingBasket } from "react-icons/fa";
// context
import { ProductsContext } from "../contexts/providers/ProductContextProvider";
import Filter from "./Filter";
// components
import Product from "./Product";

const ProductsList = () => {
  // context
  const { products, dispatch } = useContext(ProductsContext);
  // search
  const [searchedTxt, setSearchedTxt] = useState("");
  // searchHandle
  const filteredWord = products.filter((item) =>
    item.title.toLowerCase().includes(searchedTxt.toLowerCase())
  );
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
        <div className="pt-5 col-12 col-md-3 m-auto">
          <p className='text-secondary'>Filter based on size:</p>
          <Filter />
        </div>
        {filteredWord.map((item) => (
          <Product
            key={item.id}
            data={item}
            deleteHandle={() => dispatch({ type: "DELETE", id: item.id })}
            increment={() => dispatch({ type: "INCREMENT", id: item.id })}
            decrement={() => dispatch({ type: "DECREMENT", id: item.id })}
          />
        ))}
      </Container>
    </>
  );
};

export default ProductsList;

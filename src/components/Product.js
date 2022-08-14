import { Card, Container } from "react-bootstrap";
// icons
import { FaTrashAlt, FaMinus } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const Product = ({ data, deleteHandle, increment, decrement }) => {
  const { title, id, price, quantity } = data;

  return (
    <Container>
      <Card className='m-5 5 p-5'>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="d-flex flex-row align-items-center justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Price= $
            {`${price}*${quantity}= ${(price * quantity).toLocaleString()}`}
          </Card.Text>
          <Card.Text>{quantity}</Card.Text>
          <div>
            <span
              onClick={
                quantity !== 1 ? () => decrement(id) : () => deleteHandle(id)
              }
            >
              {quantity === 1 ? (
                <FaTrashAlt className="text-danger" />
              ) : (
                <FaMinus />
              )}
            </span>

            <span onClick={() => increment(id)}>
              <IoMdAddCircle />
            </span>
          </div>

          <span className="text-danger" onClick={() => deleteHandle(id)}>
            <FaTrashAlt />
          </span>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Product;

import { Card, Container } from "react-bootstrap";
// icons
import { FaTrashAlt, FaMinus } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const Product = ({ data, deleteHandle, increment, decrement }) => {
  const { title, id, price, quantity } = data;

  return (
    <Container>
      <Card className="m-5 5 p-5 shadow-sm">
        <Card.Body className="d-flex flex-md-row align-items-center justify-content-between flex-column">
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>
            $
            {quantity > 1
              ? `${price}*${quantity}= ${(price * quantity).toLocaleString()}`
              : price}
          </Card.Text>
          <Card.Text>{quantity}</Card.Text>
          <div className="mb-5 mb-md-0">
            <span
              className="text-danger"
              onClick={
                quantity !== 1 ? () => decrement(id) : () => deleteHandle(id)
              }
            >
              {quantity === 1 ? <FaTrashAlt /> : <FaMinus />}
            </span>

            <IoMdAddCircle
              onClick={() => increment(id)}
              className="text-success"
            />
          </div>

          <FaTrashAlt
            className="text-danger"
            onClick={() => deleteHandle(id)}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Product;

import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Cart = () => {

  const {
    state: { cart },
    dispatch,
  }=CartState();

  const [total, setTotal] = useState();

  useEffect(()=>
    {
      setTotal(cart.reduce((acc,curr)=>
        acc+Number(curr.price)*curr.qty
      ,0))
  },[cart])

  return (
    <div className="cart_page">
      <div className="productContainer_cart">
        <ListGroup>
          {
            cart.map((pd)=>(
              <ListGroup.Item key={pd.id}>
              <Row>
                <Col md={2}>
                <Image src={pd.image} alt={pd.name} fluid rounded />
                </Col>
                <Col md={2}>
                <span>{pd.name}</span></Col>
                <Col md={2}>Rs.{pd.price}</Col>
                <Col md={2}><Rating rating={pd.ratings} /></Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={pd.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: pd.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(pd.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: pd,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      <div className="filterssummary">
          <span className="title">Subtotal ({cart.length}) items</span>
      
      <span style={{ fontWeight:700, fontSize:20}}>Total: Rs.{total}</span>
      <Button type="button" disbaled={cart.length === 0}>
        Proceed to Checkout
      </Button>
      </div>
    </div>
  )
}

export default Cart

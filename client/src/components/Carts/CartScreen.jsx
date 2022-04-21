import React from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Image,
    ListGroup,
    Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/actionCart";
// import Message from '../components/Message'

const CartScreen = () => {
    
    // const { _id } = useParams();

    // const qty=location.search?Number(location.search.split('=')[1]):1
    const qty = 1;
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cartReducer);
    console.log(cartItems);
    
    // const {cartItems}=cart
    // useEffect(() => {
    //     if (_id) {
    //         dispatch(addToCart(_id, qty));
    //     }
    // }, [_id]);
    
    // const removeFromCartHandler = (_id) => {
    //     dispatch(removeFromCart(_id));
    // };
    // //    const checkoutHandler=()=>{
    // //     history.push('/login?redirect=shipping')
    // //    }
    return (
        <>
            {/* <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <h2>
                            Your Cart is empty<Link to="/">Go Back</Link>
                        </h2>
                    ) : (
                        <ListGroup variant="flush">
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image
                                                src={item.image}
                                                alt={item.nameProd}
                                                fluid
                                                rounded
                                            />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>
                                                {item.nameProd}
                                            </Link>
                                        </Col>
                                        <Col md={2}>${item.price}</Col>
                                        <Col md={2}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button
                                                type="button"
                                                variant="light"
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>
                                    total : {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                                </h2>
                                $
                                {cartItems
                                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                                    .toFixed(2)}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type="button"
                                    className="btn-block"
                                    disabled={cartItems.length === 0}
                                //   onClick={checkoutHandler}
                                >
                                    Proceed To Chekout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row> */}
        </>
    );
};

export default CartScreen;
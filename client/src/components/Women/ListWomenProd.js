import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWomenProd } from "../../redux/actions/actionProduct";
import WomenProdCard from "./WomenProdCard";
import "./Women.css";
import { Col, Container, Row } from "react-bootstrap";

const ListWomenProd = () => {
  const { products } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWomenProd());
  }, [dispatch]);

  return (
    <div >
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col lg={true} sm={10}>
            <div className="listProduct">
              {products &&
                React.Children.toArray(
                  products.map((el) => <WomenProdCard woman={el} />)
                )}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListWomenProd;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenProd } from "../../redux/actions/actionProduct";
import MenProdCard from "./MenProdCard";
import { Col, Container, Row } from "react-bootstrap";
import "./Men.css";

const ListMenProd = () => {
  const { products } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenProd());
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
                  products.map((el) => <MenProdCard man={el} />)
                )}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListMenProd;

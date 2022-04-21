import React, { useEffect } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actionProduct";
import ProductCard from "../ProductCard/ProductCard";
import "./ListProduct.css";

const ListProduct = () => {
  //store
  const { products } = useSelector((state) => state.productReducer);
  // const { products } = productList;

  // console.log(products);

  //dispatch getallproducts
  const dispatch = useDispatch();

  //useeffect
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="home">
      <div className="carousels">
        <Carousel >
          <Carousel.Item style={{ color: "black" }}>
            <img
              className="d-block w-100"
              style={{ height: "50vh" }}
              src="https://medias.pourlascience.fr/api/v1/images/view/5d1b663a8fe56f77c8671165/wide_1300/image.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>women</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "50vh" }}
              src="https://www.mustdobrisbane.com/sites/default/files/styles/mdb_article_full/public/sp3840-griffith-sport-active-kids-program-must-do-brisbane-running-kids.jpg?itok=wqZ-ZUOG"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>kids</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "50vh" }}
              src="https://cdn.luxe.digital/media/2020/08/16161641/best-men-workout-clothing-brands-luxe-digital.jpg.webp"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>men</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col lg={true} sm={10}>
            <div className="listProduct">
              {products &&
                React.Children.toArray(
                  products.map((el) => <ProductCard product={el} />)
                )}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListProduct;

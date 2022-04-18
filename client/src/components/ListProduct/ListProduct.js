import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actionProduct";
import ProductCard from "../ProductCard/ProductCard";
import "./ListProduct.css"

const ListProduct = () => {
  //store
  const {products} = useSelector((state) => state.productReducer);
  // const { products } = productList;

  // console.log(products);

  //dispatch getallproducts
  const dispatch = useDispatch();

  //useeffect
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="listProduct">
      {products &&
        React.Children.toArray(
          products.map((el) => <ProductCard product={el} />)
        )}
    </div>
  );
};

export default ListProduct;

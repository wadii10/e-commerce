import { ADDPRODUCT, ADDPRODUCT_FAIL, ADDPRODUCT_SUCCESS, DELETEPRODUCT, DETAILPRODUCT, GETPRODUCTS, GET_KIDS_PRODUCT, GET_MEN_PRODUCT, GET_WOMEN_PRODUCT, UPDATEPRODUCT } from "../actionTypes/actionTypesProduct";
import axios from "axios";

export const createProduct = (newProduct) => async (dispatch) => {
    dispatch({ type: ADDPRODUCT });
    try {
      const res = await axios.post("/product/addProduct", newProduct);
      dispatch({
        type: ADDPRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADDPRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };

//get all products
export const getAllProducts = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getAllProduct");
    dispatch (
      {
      type : GETPRODUCTS,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get all products error")
  }
};

//get men products
export const getMenProd = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getMenProducts");
    dispatch (
      {
      type : GET_MEN_PRODUCT,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get Men products error")
  }
};

//get women products
export const getWomenProd = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getWomenProducts");
    dispatch (
      {
      type : GET_WOMEN_PRODUCT,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get women products error")
  }
};

//get men products
export const getkidsProd = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getkidsProducts");
    dispatch (
      {
      type : GET_KIDS_PRODUCT,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get Men products error")
  }
};

//get one product
export const getOneProduct = (_id) => async(dispatch) => {
  try {
    const res = await axios.get(`/product/getOneProduct/${_id}`);
    dispatch(
      {
        type : DETAILPRODUCT,
        payload : res.data
      }
    )
  } catch (error) {
    alert("get one product error");
  }
}

//edit product
export const editeProduct = (product) => async(dispatch) => {
  try {
      const res = await axios.put(`/product/updateProduct/${product._id}`, product);
      dispatch(
          {
              type : UPDATEPRODUCT,
              payload : res.data
          }
      )
  } catch (error) {
      alert("update product error");
  }
};

//delete product
export const removeProduct = (_id) => async(dispatch) => {
  try {
    const res = axios.delete(`/product/deleteOneProduct/${_id}`);
    dispatch(
      {
        type : DELETEPRODUCT,
        payload : res.data
      }
    )
  } catch (error) {
    alert("delete product error")
  }
}
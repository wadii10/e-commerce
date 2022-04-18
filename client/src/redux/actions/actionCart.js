import axios from "axios";
import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "../actionTypes/actionTypesCart";


export const addToCart = (_id, qty) => async (dispatch) => {
  const { data } = await axios.get(`/product/getOneProduct/${_id}`);
  dispatch({
    type: CARD_ADD_ITEM,
    payload: {
      product: data._id,
      nameProd: data.nameProd,
      image: data.image,
      price: data.price,
      qty,
    },
  });
//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CARD_REMOVE_ITEM,
    payload: id,
  });
  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

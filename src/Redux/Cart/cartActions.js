import axios from "axios";
import { ADD_TO_CART, INCREASE_COUNT } from "./cartTypesConstants";

export const addCartItem = (product, quantity) => (dispatch, getState) => {
  const state = getState();

  const isProductExist = state.cart.cart.find(
    (item) => item._id == product._id
  );

  if (isProductExist) {
    isProductExist.quantity += quantity;
    const index = state.cart.cart.findIndex(
      (item) => item._id == isProductExist._id
    );

    state.cart.cart[index] = isProductExist;

    dispatch({
      type: INCREASE_COUNT,
      payload: state.cart.cart,
    });
  } else {
    product.quantity = quantity;

    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  }

  localStorage.setItem("cart", JSON.stringify(state.cart.cart));
};
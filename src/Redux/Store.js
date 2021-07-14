import { createStore, combineReducers,applyMiddleware } from "redux";
import { userReducer } from "./User/userReducer";
import thunk from "redux-thunk";
import { guestReducers } from "./Guest/guestReducers";
import { cartReducer } from "./Cart/cartReducer";
const reducers = combineReducers({
  userDetails: userReducer,
  guestState: guestReducers,
  cart: cartReducer,
});
// QUESTION
const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },
  cart: {
    cart: cartFromLocalStorage,
  },
};
// what happed if i delete it?
const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;

import { USER_LOGIN_SUCCESS } from "./userTypesConstants";

export const loginAction = (userData) => {
  return {
    payload: userData,
    type: USER_LOGIN_SUCCESS,
  };
};

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-cycle */
import { AUTH_ACTION } from "./auth-context-provider";

const AuthContextReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION.LOGIN: {
      return { ...state, currentUser: action.currentUser };
    }

    case AUTH_ACTION.LOGOUT: {
      return {
        currentUser: null,
      };
    }

    default:
      return state;
  }
};

export default AuthContextReducer;

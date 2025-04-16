import { checkingCredentials, logout } from "./";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startLoginWithEmailPassword = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    console.log("start Login With Email Password");
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    console.log("start Google Sign In");
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    console.log("start Logout");

    dispatch(logout());
  };
};

import { checkingCredentials, logout } from "./";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    console.log("start Login With Email Password", {
      email: email,
      password: password,
    });
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    console.log("Sign in with Google clicked");
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    console.log("start Logout");

    dispatch(logout());
  };
};

export const startCreatingUserWithEmailPassword = ({
  displayName,
  email,
  password,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    console.log("start Creating User With Email Password", {
      displayName: displayName,
      email: email,
      password: password,
    });
  };
};

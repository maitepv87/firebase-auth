import {
  loginWithEmailPassword,
  loginWithGoogle,
  logoutFirebase,
  registerUserWithEmailPassword,
  sendPasswordReset,
} from "../../services/firebase/firebaseProvider";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithGoogle();

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startRegisterUserWithEmailPassword = ({
  displayName,
  email,
  password,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      displayName,
      email,
      password,
    });

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    const result = await logoutFirebase();

    if (!result.ok) {
      dispatch(logout({ errorMessage: result.errorMessage }));
    } else {
      dispatch(logout());
    }
  };
};

export const startSendPasswordReset = ({ email }) => {
  return async (dispatch) => {
    // dispatch(checkingCredentials());

    const result = await sendPasswordReset({ email });

    console.log("sendPasswordReset", result);

    if (!result.ok) dispatch(logout({ errorMessage: result.errorMessage }));

    return result;
  };
};

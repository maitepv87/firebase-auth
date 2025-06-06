import { loginWithGoogle } from "../../../services/firebase/firebaseProvider";
import { setLogin, setLogout, setCheckingCredentials } from "../authSlice";

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(setCheckingCredentials());

    const result = await loginWithGoogle();

    if (!result.ok)
      return dispatch(setLogout({ errorMessage: result.errorMessage }));

    dispatch(setLogin(result));
  };
};

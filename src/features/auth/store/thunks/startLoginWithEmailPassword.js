import { loginWithEmailPassword } from "../../../../services/firebase/firebaseProvider";
import { setCheckingCredentials, setLogin, setLogout } from "../authSlice";

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(setCheckingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok)
      return dispatch(setLogout({ errorMessage: result.errorMessage }));

    dispatch(setLogin(result));
  };
};

import { registerUserWithEmailPassword } from "../../../services/firebase/firebaseProvider";
import { setLogin, setLogout, setCheckingCredentials } from "../authSlice";

export const startRegisterUserWithEmailPassword = ({
  displayName,
  email,
  password,
}) => {
  return async (dispatch) => {
    dispatch(setCheckingCredentials());

    const result = await registerUserWithEmailPassword({
      displayName,
      email,
      password,
    });

    if (!result.ok)
      return dispatch(setLogout({ errorMessage: result.errorMessage }));

    dispatch(setLogin(result));
  };
};

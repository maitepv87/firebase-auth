import { sendPasswordReset } from "../../../services/firebase/firebaseProvider";
import { setLogout } from "../authSlice";

export const startResetPassword = ({ email }) => {
  return async (dispatch) => {
    const result = await sendPasswordReset({ email });

    console.log("sendPasswordReset", result);

    if (!result.ok) dispatch(setLogout({ errorMessage: result.errorMessage }));

    return result;
  };
};

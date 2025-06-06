import { logoutFirebase } from "../../../../services/firebase/firebaseProvider";
import { setLogout } from "../authSlice";

export const startLogout = () => {
  return async (dispatch) => {
    const result = await logoutFirebase();

    if (!result.ok) {
      dispatch(setLogout({ errorMessage: result.errorMessage }));
    } else {
      dispatch(setLogout());
    }
  };
};

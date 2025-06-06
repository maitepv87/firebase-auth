import { setCheckingCredentials } from "../authSlice";

export const checkAuthStatus = () => {
  return async (dispatch) => {
    dispatch(setCheckingCredentials());
  };
};

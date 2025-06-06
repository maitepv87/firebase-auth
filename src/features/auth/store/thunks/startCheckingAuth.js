import { setCheckingCredentials } from "../authSlice";

export const startCheckingAuth = () => {
  return async (dispatch) => {
    dispatch(setCheckingCredentials());
  };
};

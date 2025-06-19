import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearAuthMessage } from "../store/authSlice";

export const useAuthCleanup = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearAuthMessage());
    };
  }, []);
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { checkingCredentials, login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingCredentials());

    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log(
        "Auth state changed:",
        user ? "authenticated" : "not authenticated"
      );

      if (!user) {
        dispatch(logout());
        return;
      }

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });

    // Return cleanup function to avoid multiple subscriptions
    return () => unsubscribe();
  }, [dispatch]);

  return { status };
};

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { checkingCredentials, login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const [initialCheckDone, setInitialCheckDone] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingCredentials());

    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        dispatch(logout());
      } else {
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
      }

      setInitialCheckDone(true);
    });

    // Return cleanup function to avoid multiple subscriptions
    return () => unsubscribe();
  }, [dispatch]);

  return { status, initialCheckDone };
};

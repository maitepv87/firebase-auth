import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../services/firebase/firebaseConfig";
import {
  setLogin,
  setLogout,
  setCheckingCredentials,
} from "../store/auth/authSlice";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const [initialCheckDone, setInitialCheckDone] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCheckingCredentials());

    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        dispatch(setLogout());
      } else {
        const { uid, email, displayName, photoURL } = user;
        dispatch(setLogin({ uid, email, displayName, photoURL }));
      }

      setInitialCheckDone(true);
    });

    // Return cleanup function to avoid multiple subscriptions
    return () => unsubscribe();
  }, [dispatch]);

  return { status, initialCheckDone };
};

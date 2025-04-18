import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { checkingCredentials, login, logout } from "../store/auth";

// export const useCheckAuth = () => {
//   const { status } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     console.log("Starting authentication check");
//     dispatch(checkingCredentials());

//     onAuthStateChanged(FirebaseAuth, async (user) => {
//       if (!user) {
//         console.log("Disconnecting user");
//         dispatch(logout());
//         return;
//       }

//       const { uid, email, displayName, photoURL } = user;

//       console.log("Authenticated user:", { uid, email, displayName });
//       dispatch(login({ uid, email, displayName, photoURL }));
//     });
//   }, [dispatch]);

//   return status;
// };

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

    // Importante: Devolver función de limpieza para evitar múltiples suscripciones
    return () => unsubscribe();
  }, [dispatch]);

  return { status };
};

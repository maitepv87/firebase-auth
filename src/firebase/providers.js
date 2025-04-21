import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  displayName,
  email,
  password,
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = result.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { displayName, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const logoutFirebase = async () => {
  try {
    await FirebaseAuth.signOut();

    return {
      ok: true,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const sendPasswordReset = async ({ email }) => {
  try {
    await sendPasswordResetEmail(FirebaseAuth, email);

    return {
      ok: true,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

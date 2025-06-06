import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FirebaseAuth } from "./firebaseConfig";
import { buildError } from "../../utils";

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
    return buildError(error);
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
    return buildError(error);
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
    return buildError(error);
  }
};

export const logoutFirebase = async () => {
  try {
    await signOut(FirebaseAuth);

    return {
      ok: true,
    };
  } catch (error) {
    return buildError(error);
  }
};

export const sendPasswordReset = async ({ email }) => {
  try {
    await sendPasswordResetEmail(FirebaseAuth, email);

    return {
      ok: true,
    };
  } catch (error) {
    return buildError(error);
  }
};

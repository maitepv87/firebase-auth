import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated", // 'checking' | 'authenticated'
  userId: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.userId = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    setLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.userId = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage || null;
    },
    setCheckingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, setLogout, setCheckingCredentials } =
  authSlice.actions;

export default authSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/store/authSlice";

export const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
  },
});

import { Routes, Route, Navigate } from "react-router-dom";
import { ForgotPassword, LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="reset-password" element={<ForgotPassword />} />

      {/*// Redirects to the login page if the user tries to access an undefined route
        // We use "/*" to catch any invalid route under "/auth" and redirect them to the login page. */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

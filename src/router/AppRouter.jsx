import { Routes, Route, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthRoutes } from "../features/auth/routes/AuthRoutes";
import { JournalRoutes } from "../features/journal/routes/JournalRoutes";
import { AppLoader, NotFoundPage } from "../components";
import { useCheckAuth } from "../features/auth/hooks";
import { useEffect } from "react";

export const AppRouter = () => {
  const { status, initialCheckDone } = useCheckAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/");
    }
  }, [status]);

  if (!initialCheckDone) {
    return <AppLoader />;
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <JournalRoutes />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

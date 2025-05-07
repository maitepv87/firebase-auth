import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../features/auth/routes/AuthRoutes";
import { JournalRoutes } from "../features/journal/routes/JournalRoutes";
import { AppLoader } from "../components";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  const { status, initialCheckDone } = useCheckAuth();

  if (!initialCheckDone) {
    return <AppLoader />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <>
          <Route path="/*" element={<JournalRoutes />} />
          {/* Redirigir auth/* a la página principal cuando está autenticado */}
          <Route path="/auth/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          {/* Redirigir cualquier otra ruta a login cuando no está autenticado */}
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      )}
    </Routes>
  );
};

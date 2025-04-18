import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AppLoader } from "../components/ui/AppLoader";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <AppLoader />;
  }

  return (
    // <Routes>
    //   {status === "authenticated" ? (
    //     <Route path="/*" element={<JournalRoutes />} />
    //   ) : (
    //     <Route path="/auth/*" element={<AuthRoutes />} />
    //   )}

    //   <Route path="/*" element={<Navigate to="/auth/login" />} />
    // </Routes>
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

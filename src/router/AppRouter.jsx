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
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      {/* No es necesario redirigir aquí, ya se maneja con el Navigate dentro de JournalRoutes y AuthRoutes */}
    </Routes>
  );
};

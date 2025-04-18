import { Routes, Route, Navigate } from "react-router-dom";
import { JournalPage } from "../pages";

export const JournalRoutes = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<JournalPage />} />

    //   <Route path="/*" element={<Navigate to="/" />} />
    // </Routes>

    <Routes>
      <Route path="/" element={<JournalPage />} />
      {/* Cualquier otra ruta dentro de journal se redirige a la principal */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

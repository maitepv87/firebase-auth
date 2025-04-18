import { Routes, Route, Navigate } from "react-router-dom";
import { JournalPage, NotePage } from "../pages";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path=":id" element={<NotePage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

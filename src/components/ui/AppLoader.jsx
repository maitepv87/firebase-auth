import { Box, CircularProgress } from "@mui/material";

const loaderStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255,255,255,0.6)",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
};

export const AppLoader = () => {
  return (
    <Box sx={loaderStyle} role="status" aria-live="polite">
      <CircularProgress />
    </Box>
  );
};

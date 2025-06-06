import { Box } from "@mui/material";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #673AB7 30%, #3F51B5 90%)",
      }}
    >
      <AppRouter />
    </Box>
  );
}

export default App;

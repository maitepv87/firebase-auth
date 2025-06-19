import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        textAlign: "center",
        p: 4,
      }}
    >
      <Typography variant="h1" fontWeight={700}>
        404
      </Typography>
      <Typography variant="h5" mb={3}>
        Oops! This page doesn't exist.
      </Typography>
      <Button
        variant="contained"
        onClick={() =>
          navigate(status === "authenticated" ? "/" : "/auth/login")
        }
      >
        Go Home
      </Button>
    </Box>
  );
};

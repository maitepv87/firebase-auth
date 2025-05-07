import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { startLogout } from "../../../store/auth";

export const JournalPage = () => {
  const { displayName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center", borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {displayName}!
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          This is your Journal. Start writing your thoughts and ideas.
        </Typography>

        <Box>
          <Button
            variant="contained"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

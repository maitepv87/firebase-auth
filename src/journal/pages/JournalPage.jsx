import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { startLogout } from "../../store/auth";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Journal Page</h1>

      <Button
        variant="outlined"
        color="error"
        startIcon={<LogoutIcon />}
        onClick={handleLogout}
        sx={{ mt: 2 }}
      >
        Logout
      </Button>
    </div>
  );
};

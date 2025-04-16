import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Link, Box, Typography } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import { AuthLayout } from "../components";

export const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");

    console.log("Reset link sent to:", email);
    // Aquí podrías llamar a Firebase: sendPasswordResetEmail(...)
  };

  return (
    <AuthLayout title="Reset your password" Icon={LockResetIcon}>
      <Typography variant="body2" sx={{ mt: 1, mb: 2, textAlign: "center" }}>
        Enter your email and we'll send you a link to reset your password.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send Reset Link
        </Button>

        <Link component={RouterLink} to="/auth/login" variant="body2">
          Back to Login
        </Link>
      </Box>
    </AuthLayout>
  );
};

import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Link, Box, Typography, Alert } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import { AuthLayout } from "../components";
import { startSendPasswordReset } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";

export const ForgotPassword = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación simple
    if (!email) {
      setError("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccessMessage("");

    const result = dispatch(startSendPasswordReset({ email }));

    if (result?.ok) {
      setSuccessMessage("A reset link was sent to your email.");
    }
  };

  return (
    <AuthLayout title="Reset your password" Icon={LockResetIcon}>
      <Typography variant="body2" sx={{ mt: 1, mb: 2, textAlign: "center" }}>
        Enter your email and we'll send you a link to reset your password.
      </Typography>

      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert
          severity="error"
          sx={{ mt: 2 }}
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </Alert>
      )}

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
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(""); // Limpia el error si empieza a escribir
          }}
          error={!!error}
          helperText={error}
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

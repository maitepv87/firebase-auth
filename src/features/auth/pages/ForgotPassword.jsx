import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { TextField, Link, Box, Typography } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import { AuthLayout, FeedbackMessage, AuthButton } from "../components";
import { startPasswordReset } from "../store/thunks";

export const ForgotPassword = () => {
  const { errorMessage, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const isSending = status === "checking";

  const handleSubmit = async (event) => {
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

    const result = await dispatch(startPasswordReset({ email }));

    if (result.ok) {
      setSuccessMessage("A reset link was sent to your email.");
    } else {
      setError(result.errorMessage || "Failed to send reset link.");
    }
  };

  return (
    <AuthLayout title="Reset your password" Icon={LockResetIcon}>
      <Typography variant="body2" sx={{ mt: 1, mb: 2, textAlign: "center" }}>
        Enter your email and we'll send you a link to reset your password.
      </Typography>

      <FeedbackMessage message={successMessage} type="success" />
      <FeedbackMessage message={errorMessage} type="error" />

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
            if (error) setError("");
            if (successMessage) setSuccessMessage("");
          }}
          error={!!error}
          helperText={error}
        />

        <AuthButton text="Send Reset Link" type="submit" disabled={isSending} />

        <Link component={RouterLink} to="/auth/login" variant="body2">
          Back to Login
        </Link>
      </Box>
    </AuthLayout>
  );
};

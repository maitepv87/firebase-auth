import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Link, Grid, Box, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthLayout, FeedbackMessage, AuthButton } from "../components";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../store/thunks";
import { useAuthCleanup } from "../hooks";

export const LoginPage = () => {
  const { errorMessage, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useAuthCleanup();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const isAuthenticating = status === "checking";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = ({ email, password }) => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar errores si el nuevo valor es válido
    setFormErrors((prev) => {
      const newErrors = { ...prev };
      if (name === "email" && value.trim() && emailRegex.test(value)) {
        delete newErrors.email;
      }
      if (name === "password" && value.trim()) {
        delete newErrors.password;
      }
      return newErrors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(startLoginWithEmailPassword(formValues));
    }
  };

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Sign in" Icon={LockOutlinedIcon}>
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
          value={formValues.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="********"
          value={formValues.password}
          onChange={handleChange}
          error={!!formErrors.password}
          helperText={formErrors.password}
        />

        <AuthButton
          text="Sign In"
          type="submit"
          disabled={isAuthenticating}
          loading={isAuthenticating}
        />

        <FeedbackMessage message={errorMessage} type="error" />

        <Divider sx={{ my: 2 }}>or</Divider>

        <AuthButton
          text="Sign in with Google"
          onClick={handleGoogleSignIn}
          variant="outlined"
          icon={<GoogleIcon />}
          disabled={isAuthenticating}
        />

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ mt: 2 }}
        >
          <Grid item xs="auto">
            <Link
              component={RouterLink}
              to="/auth/reset-password"
              variant="body2"
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs="auto">
            <Link component={RouterLink} to="/auth/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

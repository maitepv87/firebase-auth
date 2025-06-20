import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { TextField, Link, Grid, Box, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthLayout, FeedbackMessage, AuthButton } from "../components";
import {
  startRegisterWithEmailPassword,
  startGoogleSignIn,
} from "../store/thunks";
import { useAuthCleanup } from "../hooks";

export const RegisterPage = () => {
  const { errorMessage, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useAuthCleanup();

  const [formValues, setFormValues] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const isAuthenticating = status === "checking";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = ({ displayName, email, password }) => {
    const errors = {};

    if (!displayName.trim()) {
      errors.displayName = "Name is required.";
    }

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
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
      if (name === "displayName" && value.trim()) {
        delete newErrors.displayName;
      }
      if (name === "email") {
        if (value.trim() && emailRegex.test(value)) {
          delete newErrors.email;
        }
      }
      if (name === "password" && value.length >= 6) {
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
      dispatch(startRegisterWithEmailPassword(formValues));
    }
  };

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Sign Up" Icon={LockOutlinedIcon}>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="displayName"
          label="Full Name"
          name="displayName"
          value={formValues.displayName}
          onChange={handleChange}
          placeholder="Jon Snow"
          error={!!formErrors.displayName}
          helperText={formErrors.displayName}
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          autoComplete="email"
          placeholder="your@email.com"
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
          value={formValues.password}
          onChange={handleChange}
          autoComplete="new-password"
          placeholder="********"
          error={!!formErrors.password}
          helperText={formErrors.password}
        />

        <AuthButton
          text="Create Account"
          type="submit"
          disabled={isAuthenticating}
        />

        <FeedbackMessage message={errorMessage} type="error" />

        <Divider sx={{ my: 3 }}>or</Divider>

        <AuthButton
          text="Sign up with Google"
          onClick={handleGoogleSignIn}
          variant="outlined"
          icon={<GoogleIcon />}
          disabled={isAuthenticating}
        />

        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Grid item>
            <Link component={RouterLink} to="/auth/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Link, Grid, Box, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthLayout } from "../components";

export const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google clicked");
    // Aquí podrías despachar tu acción Redux: dispatch(startGoogleSignIn())
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
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Sign In
        </Button>

        <Divider sx={{ my: 3 }}>or</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ mt: 2 }}
        >
          <Grid item xs>
            <Link
              component={RouterLink}
              to="/auth/reset-password"
              variant="body2"
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/auth/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

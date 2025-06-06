import { Avatar, Box, Container, Paper, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "Auth", Icon }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={6}
        sx={{
          marginTop: 8,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {Icon ? <Icon /> : null}
        </Avatar>

        <Typography component="h1" variant="h5">
          {title}
        </Typography>

        <Box sx={{ mt: 1, width: "100%" }}>{children}</Box>
      </Paper>
    </Container>
  );
};

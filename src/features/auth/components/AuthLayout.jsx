import PropTypes from "prop-types";
import { Avatar, Box, Container, Paper, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "Auth", Icon }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #BBDEFB, #E1BEE7)",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={8}
          sx={{
            marginTop: 8,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {Icon && <Icon />}
          </Avatar>

          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: 600, color: "#2C3E50", letterSpacing: "0.5px" }}
          >
            {title}
          </Typography>

          <Box sx={{ mt: 1, width: "100%" }}>{children}</Box>
        </Paper>
      </Container>
    </Box>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  Icon: PropTypes.elementType,
};

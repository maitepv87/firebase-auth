import PropTypes from "prop-types";
import { Button, CircularProgress } from "@mui/material";

export const AuthButton = ({
  text,
  onClick,
  type = "button",
  variant = "contained",
  icon,
  disabled,
}) => {
  return (
    <Button
      type={type}
      fullWidth
      variant={variant}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
      sx={{
        mt: 3,
        mb: type === "submit" ? 2 : 0,
        borderRadius: 3,
        padding: "10px 16px",
        fontSize: "16px",
        textTransform: "none",
        boxShadow: "none",
        backgroundColor: variant === "contained" ? "#4A90E2" : "#FFFFFF",
        color: variant === "contained" ? "#FFF" : "#4A90E2",
        border: variant === "outlined" ? "1px solid #4A90E2" : "none",
        "&:hover": {
          backgroundColor: variant === "contained" ? "#357ABD" : "#F5F5F5",
        },
      }}
    >
      {disabled ? <CircularProgress size={24} color="inherit" /> : text}
    </Button>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["contained", "outlined"]),
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

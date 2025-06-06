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
      sx={{ mt: 3, mb: type === "submit" ? 2 : 0 }}
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

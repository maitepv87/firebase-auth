import PropTypes from "prop-types";
import { Alert } from "@mui/material";

export const FeedbackMessage = ({ message, type }) => {
  if (!message) return null;

  return (
    <Alert severity={type} sx={{ mb: 2 }} role="alert" aria-live="assertive">
      {message}
    </Alert>
  );
};

FeedbackMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
};

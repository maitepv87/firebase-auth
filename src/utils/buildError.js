export const buildError = (error) => ({
  ok: false,
  errorCode: error.code,
  errorMessage: error.message,
});

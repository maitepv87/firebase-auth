import { useState, useEffect, useMemo } from "react";

/**
 * Hook personalizado para manejar formularios con validaciones dinámicas
 * @param {Object} initialForm - Valores iniciales del formulario
 * @param {Object} formValidations - Objeto con funciones de validación y mensajes de error
 * @returns {Object} - Estados y métodos del formulario
 */
export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  // Ejecutar validaciones cuando cambia el estado del formulario
  useEffect(() => {
    if (Object.keys(formValidations).length > 0) {
      createValidators();
    }
  }, [formState]);

  // Calcular si todo el formulario es válido
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  // Manejar cambios en los campos del formulario
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });

    // Si había un error general del formulario, limpiarlo al cambiar algún campo
    if (formError) setFormError(null);
  };

  // Versión alternativa que acepta nombre y valor directamente
  const onValueChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });

    if (formError) setFormError(null);
  };

  // Resetear el formulario a sus valores iniciales
  const onResetForm = () => {
    setFormState(initialForm);
    setFormError(null);
  };

  // Actualizar múltiples campos a la vez
  const updateForm = (newValues) => {
    setFormState({
      ...formState,
      ...newValues,
    });
  };

  // Crear validadores basados en la configuración
  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  // Iniciar el estado de envío
  const startSubmitting = () => setIsSubmitting(true);

  // Detener el estado de envío
  const stopSubmitting = () => setIsSubmitting(false);

  // Establecer un error general del formulario
  const setError = (errorMessage) => setFormError(errorMessage);

  // Validar manualmente el formulario
  const validateForm = () => {
    createValidators();
    return isFormValid;
  };

  return {
    // Valores del formulario
    ...formState,
    formState,

    // Métodos para manipular el formulario
    onInputChange,
    onValueChange,
    onResetForm,
    updateForm,

    // Estado de validación
    ...formValidation,
    isFormValid,
    validateForm,

    // Estado de envío
    isSubmitting,
    startSubmitting,
    stopSubmitting,

    // Error general del formulario
    formError,
    setError,
  };
};

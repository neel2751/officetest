// useFormFields.js
import React from "react";
import { useForm } from "react-hook-form";

export default function UseFormFields(fields, initialValues) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    getValues,
  } = useForm();

  // Set initial values when the component mounts
  React.useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        setValue(key, initialValues[key]);
      });
    }
  }, [initialValues, setValue]); // Include setValue in the dependency array

  const fieldProps = {};

  fields.forEach((field) => {
    fieldProps[field.name] = {
      ...register(field.name, field.validationOptions),
      error: errors[field.name],
    };
  });

  return { handleSubmit, fieldProps, errors, setValue, reset, getValues };
}

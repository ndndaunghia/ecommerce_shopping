import { TextField } from "@mui/material";
import React from "react";

export default function InputC({
  id,
  label,
  variant,
  type,
  size,
  fullWidth,
  required,
  onChange
}) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      type={type}
      size={size}
      fullWidth={fullWidth}
      required={required}
      onChange={onChange}
    />
  );
}

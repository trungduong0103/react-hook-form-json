import { useFormContext } from "react-hook-form";
import { TextField, Typography } from "@material-ui/core";

export default function RHFTextField({ fieldName, ...properties }) {
  const { label, fullWidth, placeholder } = properties;
  const { register } = useFormContext();

  return (
    <>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        {label}
      </Typography>
      <TextField
        {...register(fieldName)}
        fullWidth={fullWidth}
        placeholder={placeholder}
      />
    </>
  );
}

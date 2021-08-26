import { useFormContext } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export default function RHFCheckbox({ fieldName, ...properties }) {
  const { label } = properties;
  const { register } = useFormContext();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FormControlLabel
        style={{ marginLeft: "0px" }}
        control={<Checkbox {...register(fieldName)} color="primary" />}
        label={label}
        labelPlacement="start"
      />
    </div>
  );
}

import { useFormContext, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function RHFRadio({ fieldName, ...properties }) {
  const { label, options } = properties;

  return (
    <Controller
      name={fieldName}
      control={useFormContext().control}
      render={({ field: { onChange, value: fieldValue } }) => {
        return (
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup
              aria-label={label}
              name={fieldName}
              onChange={(e) => onChange(e)}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio checked={option.value === fieldValue} />}
                  label={option.value}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
      }}
    />
  );
}

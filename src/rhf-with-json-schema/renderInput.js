import RHFTextField from "./components/TextField";
import RHFCheckbox from "./components/Checkbox";
import RHFRadio from "./components/Radio";

export default function renderInput(name, properties) {
  switch (properties.type) {
    case "textfield":
      return <RHFTextField fieldName={name} {...properties} />;
    case "checkbox":
      return <RHFCheckbox fieldName={name} {...properties} />;
    case "radio":
      return <RHFRadio fieldName={name} {...properties} />;
    default:
      return null;
  }
}

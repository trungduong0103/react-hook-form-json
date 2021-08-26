import { RHFTextField } from "./components/TextField";

export default function renderInput(name, properties) {
  switch (properties.type) {
    case "textfield":
      return <RHFTextField fieldName={name} {...properties} />;
    default:
      return null;
  }
}

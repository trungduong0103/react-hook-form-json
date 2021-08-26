import { useForm, FormProvider } from "react-hook-form";
import { Box, Typography, Button } from "@material-ui/core";
import renderInput from "./renderInput";
import styles from "./FormStyle.module.scss";

const Form = ({ title, schema, handleSubmit, formOptions, buttons }) => {
  const form = useForm(formOptions);
  return (
    <Box component="div" className={styles.formWrapper}>
      <FormProvider {...form}>
        <Typography variant="h3" component="h3">
          Hello {title}!
        </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {Object.entries(schema).map(([key, value]) => (
            <div className={styles.fieldWrapper} key={key}>
              {renderInput(key, value)}
            </div>
          ))}

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
};

export default Form;

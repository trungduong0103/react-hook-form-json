import React from "react";
import { useForm, Controller } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "./MaterialUITestRHF.module.scss";

const options = [
  "Very Small Yoshi",
  "Small Yoshi",
  "Medium Yoshi",
  "Regular Yoshi",
  "Big Yoshi",
  "Very Big Yoshi",
];

const MaterialUITestRHF = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const generateInputs = () => {
    return Array.from(Array(40)).map((_, i) => {
      return (
        <div className={styles.inputRow} key={i}>
          <Controller
            name={"textField" + i + 1}
            control={control}
            defaultValue="Big Big Yoshi"
            rules={{
              validate: (value) => {
                return value === "Big Big Yoshi";
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.inputWrapper}>
                <Typography className={styles.label}>
                  TextField #{i + 1}
                </Typography>
                <TextField className={styles.input} {...field} />
                {error && (
                  <Typography style={{ color: "red" }}>
                    This field must be Big Big Yoshi
                  </Typography>
                )}
              </div>
            )}
          />
          <div className={styles.inputWrapper}>
            <Controller
              name={"select" + i + 1}
              control={control}
              defaultValue="Regular Yoshi"
              render={({ field }) => (
                <>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className={styles.input}
                    defaultValue="Regular Yoshi"
                    helperText="Please select your Yoshi size"
                    {...field}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </>
              )}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Controller
              name={"checkbox" + (i + 1)}
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <>
                  <Typography className={styles.label}>
                    CheckBox #{i + 1}
                  </Typography>
                  <Checkbox name={"checkbox" + (i + 1)} {...field} />
                </>
              )}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" component="h3">
        Material UI React Hook Form
      </Typography>
      <div className={styles.inputsWrapper}>{generateInputs()}</div>
      <input type="submit" />
    </form>
  );
};

export default MaterialUITestRHF;

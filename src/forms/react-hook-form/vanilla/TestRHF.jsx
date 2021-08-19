import * as React from "react";
import { useForm } from "react-hook-form";
import styles from "./VanillaTestRHF.module.scss";

export default function TestRHF() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const generateInputs = () => {
    return Array.from(Array(40)).reduce((acc, _, currentIndex) => {
      acc.push(
        <div key={currentIndex} className={styles.inputRow}>
          <div className={styles.inputWrapper}>
            <label className={styles.label}>
              TextField #{currentIndex + 1}
            </label>
            <input
              defaultValue="Hello"
              className={styles.input}
              {...register(`myFormData.textField_${currentIndex + 1}`, {
                required: "This field is required!",
              })}
            />
            {errors?.myFormData?.[`textField_${currentIndex + 1}`] && (
              <span style={{ color: "red" }}>Text field has error</span>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Select #{currentIndex + 1}</label>
            <select
              className={styles.input}
              {...register(`myFormData.select_${currentIndex + 1}`, {
                validate: {
                  notOther: (v) => v !== "Other",
                },
              })}
            >
              <option value="True">True</option>
              <option value="False">False</option>
              <option value="Other">Other</option>
            </select>
            {errors?.myFormData?.[`select_${currentIndex + 1}`] && (
              <span style={{ color: "red" }}>You cannot select Other!</span>
            )}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                {...register(`myFormData.checkBox_${currentIndex + 1}`)}
              />
              <span>Checkbox #{currentIndex + 1}</span>
            </label>
          </div>
        </div>
      );
      return acc;
    }, []);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Vanilla React Hook Form</h1>
      <div className={styles.bordered}>
        <div className={styles.inputsWrapper}>{generateInputs()}</div>
        <input type="submit" />
      </div>
    </form>
  );
}

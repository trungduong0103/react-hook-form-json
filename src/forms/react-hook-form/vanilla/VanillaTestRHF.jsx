import * as React from "react";
import { useForm } from "react-hook-form";
import styles from "./VanillaTestRHF.module.scss";

const options = [
  "Very Small Yoshi",
  "Small Yoshi",
  "Medium Yoshi",
  "Regular Yoshi",
  "Big Yoshi",
  "Very Big Yoshi",
];

export default function VanillaTestRHF() {
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
              defaultValue="Big Big Yoshi"
              className={styles.input}
              {...register(`myFormData.textField_${currentIndex + 1}`, {
                required: "This field is required!",
                validate: {
                  isBigEnough: (value) => value.length > 10,
                },
              })}
            />
            {errors?.myFormData?.[`textField_${currentIndex + 1}`] && (
              <span style={{ color: "red" }}>
                Must not be empty and has more than 10 characters!
              </span>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Select #{currentIndex + 1}</label>
            <select
              className={styles.input}
              {...register(`myFormData.select_${currentIndex + 1}`, {
                validate: {
                  notOther: (v) => v !== "Medium Yoshi",
                },
              })}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors?.myFormData?.[`select_${currentIndex + 1}`] && (
              <span style={{ color: "red" }}>You cannot Medium Yoshi!</span>
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

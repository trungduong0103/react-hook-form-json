import React from "react";
import Form from "@rjsf/core";
import { schema } from "../schema/schema";
import styles from "./TestRJSF.module.scss";

const TestRJSF = () => (
  <div className={styles.wrapper}>
    <h1>Vanilla React JSON Schema Form</h1>
    <div className={styles.formWrapper}>
      <Form
        className={styles.form}
        schema={schema}
        onSubmit={({ formData }) => alert(JSON.stringify(formData))}
      />
      <Form
        className={styles.form}
        schema={schema}
        onSubmit={({ formData }) => alert(JSON.stringify(formData))}
      />
    </div>
  </div>
);

export default TestRJSF;

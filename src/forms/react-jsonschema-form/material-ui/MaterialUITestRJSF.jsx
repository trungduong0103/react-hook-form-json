import React from "react";
import Form from "@rjsf/material-ui";
import { schema } from "../schema/schema";
import styles from "../TestRJSF.module.scss";

const MaterialUITestRJSF = () => (
  <div className={styles.wrapper}>
    <h1>Material UI React JSON Schema Form</h1>
    <div className={styles.formWrapper}>
      <Form
        className={styles.form}
        schema={schema}
        onSubmit={({ formData }) => console.log(formData)}
      />
    </div>
  </div>
);

export default MaterialUITestRJSF;

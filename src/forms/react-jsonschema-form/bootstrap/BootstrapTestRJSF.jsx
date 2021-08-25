import React from "react";
import Form from "@rjsf/bootstrap-4";
import { schema } from "../schema/schema";
import styles from "../TestRJSF.module.scss";

const BootstrapTestRJSF = () => (
  <div className={styles.wrapper}>
    <h1>Bootstrap React JSON Schema Form</h1>
    <div className={styles.formWrapper}>
      <Form
        className={styles.form}
        schema={schema}
        onSubmit={({ formData }) => console.log(formData)}
      />
    </div>
  </div>
);

export default BootstrapTestRJSF;

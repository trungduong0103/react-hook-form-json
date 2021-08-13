import React from 'react';
import Form from "@rjsf/core";

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3,
      maxLength: 10,
      pattern: "^[a-zA-Z ]+$",
      title: "Name",
      description: "Name of the person",
      default: "John Doe",
    },
    age: {
      type: "integer",
      minimum: 0,
      maximum: 150,
      title: "Age",
      description: "Age of the person",
      default: 21,
    },
    email: {
      type: "string",
      format: "email",
      title: "Email",
      description: "Email of the person",
      default: 18,
    },
  },
};

const TestRJSF = () => (
  <Form schema={schema} onSubmit={(data) => console.log(data)} />
);

export default React.memo(TestRJSF);

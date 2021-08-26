import Form from "./Form";

const schema = {
  firstName: {
    type: "textfield",
    label: "First Name",
    placeholder: "Enter your first name...",
    fullWidth: true,
    isRequired: true,
  },
  lastName: {
    type: "textfield",
    label: "Last Name",
    placeholder: "Enter your last name...",
    fullWidth: true,
    isRequired: true,
  },
  isYoshi: {
    type: "checkbox",
    label: "Check if you are actually Yoshi in disguise",
  },
  isYoshiConfirm: {
    type: "radio",
    label: "Are you sure ?",
    options: [
      {
        key: 1,
        value: "Yeah",
      },
      {
        key: 2,
        value: "Nah",
      },
    ],
  },
};

const Demo = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      title="RHF with JSON schema demo"
      schema={schema}
      handleSubmit={handleSubmit}
    />
  );
};

export default Demo;

const generateTextFields = () => {
  return Array.from(Array(50)).reduce((acc, curr, currentIndex) => {
    acc[`TextField #${currentIndex + 1}`] = {
      type: "string",
      minLength: 3,
      maxLength: 10,
      pattern: "^[a-zA-Z ]+$",
      title: `Textfield #${currentIndex + 1}`,
      default: "Big Yoshi",
    };

    return acc;
  }, {});
};

const generateSelects = () => {
  return Array.from(Array(50)).reduce((acc, curr, currentIndex) => {
    acc[`Select #${currentIndex + 1}`] = {
      type: "string",
      title: `Select #${currentIndex + 1}`,
      enum: ["Big Yoshi", "Tiny Yoshi"],
      default: "Big Yoshi",
    };

    return acc;
  }, {});
};

const textfields = generateTextFields();
const selects = generateSelects();

export const schema = {
  type: "object",
  properties: {
    ...textfields,
    ...selects,
  },
};

export const uiSchema = {
  properties: {
    "Name #1": {
      classNames: "input",
    },
  },
};

const generateTextFields = () => {
  return Array.from(Array(15)).reduce((acc, curr, currentIndex) => {
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
  return Array.from(Array(15)).reduce((acc, curr, currentIndex) => {
    acc[`Select #${currentIndex + 1}`] = {
      type: "string",
      title: `Select #${currentIndex + 1}`,
      enum: ["Big Yoshi", "Tiny Yoshi"],
      default: "Big Yoshi",
    };

    return acc;
  }, {});
};

const generateCheckboxes = () => {
  return Array.from(Array(15)).reduce((acc, curr, currentIndex) => {
    acc[`Checkbox #${currentIndex + 1}`] = {
      type: "boolean",
      title: `Select #${currentIndex + 1}`,
      enum: [true, false],
      default: false,
    };

    return acc;
  }, {});
};

const generateMixes = () => {
  return Array.from(Array(40)).reduce((acc, curr, currentIndex) => {
    acc[`TextField #${currentIndex + 1}`] = {
      type: "string",
      minLength: 3,
      maxLength: 10,
      pattern: "^[a-zA-Z ]+$",
      title: `Textfield #${currentIndex + 1}`,
      default: "Big Big Yoshi",
    };
    acc[`Select #${currentIndex + 1}`] = {
      type: "string",
      title: `Select #${currentIndex + 1}`,
      enum: [
        "Very Small Yoshi",
        "Small Yoshi",
        "Medium Yoshi",
        "Regular Yoshi",
        "Big Yoshi",
        "Very Big Yoshi",
      ],
      default: "Regular Yoshi",
    };
    acc[`Checkbox #${currentIndex + 1}`] = {
      type: "boolean",
      enum: [true, false],
      default: false,
    };

    return acc;
  }, {});
};

// const textfields = generateTextFields();
// const selects = generateSelects();
// const checkBoxes = generateCheckboxes();
const mixes = generateMixes();

export const schema = {
  type: "object",
  properties: {
    ...mixes,
  },
};

export const uiSchema = {
  properties: {
    "Name #1": {
      classNames: "input",
    },
  },
};

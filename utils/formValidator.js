export const formSchema = {
  name: {
    required: true,
    minLength: 3,
    message: "نام باید حداقل ۳ کاراکتر باشد",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "ایمیل معتبر نیست",
  },
  subject: {
    required: true,
    minLength: 3,
    message: "موضوع کوتاه است",
  },
  description: {
    required: true,
    minLength: 10,
    message: "متن پیام کوتاه است",
  },
};

export const formValidator = (data, schema) => {
  const errors = {};

  Object.keys(schema).forEach((field) => {
    const rules = schema[field];
    const value = data[field]?.trim();

    if (rules.required && !value) {
      errors[field] = "این فیلد الزامی است";
      return;
    }

    if (value) {
      if (rules.minLength && value.length < rules.minLength) {
        errors[field] = rules.message;
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        errors[field] = rules.message;
      }
    }
  });

  return errors;
};

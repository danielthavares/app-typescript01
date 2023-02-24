export const keysAndValues = {
  mixed: {
    default: () => ({ key: "invalid" }),
    required: () => ({ key: "required" }),
    oneOf: ({ values }) => ({ key: "oneOf", values: { values } }),
    notOneOf: ({ values }) => ({ key: "notOneOf", values: { values } }),
  },
  string: {
    length: ({ length }) => ({ key: "s_length", values: { length } }),
    min: ({ min }) => ({ key: "s_min", values: { min } }),
    max: ({ max }) => ({ key: "s_max", values: { max } }),
    email: () => ({ key: "s_invalid_email" }),
    url: () => ({ key: "s_invalid_url" }),
    trim: () => ({ key: "s_trim" }),
    lowercase: () => ({ key: "s_lowercase" }),
    uppercase: () => ({ key: "s_uppercase" }),
  },
  number: {
    min: ({ min }) => ({ key: "n_min", values: { min } }),
    max: ({ max }) => ({ key: "n_max", values: { max } }),
    lessThan: ({ less }) => ({ key: "n_less", values: { less } }),
    moreThan: ({ more }) => ({ key: "n_more", values: { more } }),
    positive: () => ({ key: "n_positive" }),
    negative: () => ({ key: "n_negative" }),
    integer: () => ({ key: "n_integer" }),
  },
  date: {
    min: ({ min }) => ({ key: "d_min", values: { min } }),
    max: ({ max }) => ({ key: "d_max", values: { max } }),
  },
  array: {
    min: ({ min }) => ({ key: "a_min", values: { min } }),
    max: ({ max }) => ({ key: "a_max", values: { max } }),
  },
};

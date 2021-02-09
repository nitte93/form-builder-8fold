import React from "react";

export const Form = ({ children, config }) => {
  const { onFormSubmit } = config;
  const [values, setValue] = React.useState(config.fields);

  const onChange = (name, value) => {
    setValue({ ...values, [name]: { ...values[name], value: value } });
  };
  const onSubmit = () => {
    // console.log()
    onFormSubmit(values);
  };
  const onClear = () => {
    setValue(null);
  };
  return children({ onSubmit, fields: values, onChange, onClear });
};
